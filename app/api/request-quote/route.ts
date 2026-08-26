import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const requests = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);

  if (!current || current.resetAt <= now) {
    requests.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  current.count += 1;
  requests.set(ip, current);

  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return Response.json(
        {
          success: false,
          message:
            "Too many submissions were received from this connection. Please wait a minute and try again.",
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const getText = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const company = getText("company");
    const contactName = getText("contactName");
    const phone = getText("phone");
    const email = getText("email");

    const projectName = getText("projectName");
    const projectAddress = getText("projectAddress");
    const bidDate = getText("bidDate");
    const location = getText("location");

    const scope = getText("scope");
    const material = getText("material");
    const color = getText("color");
    const notes = getText("notes");

    // Hidden honeypot field.
    const website = getText("website");

    if (website) {
      return Response.json({
        success: true,
        referenceNumber: "KAM-Q-RECEIVED",
      });
    }

    if (!company || !contactName || !phone || !email) {
      return Response.json(
        {
          success: false,
          message: "Please complete all required contact fields.",
        },
        { status: 400 }
      );
    }

    if (company.length > 150 || contactName.length > 150) {
      return Response.json(
        {
          success: false,
          message: "One or more contact fields are too long.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        { status: 400 }
      );
    }

    if (notes.length > 10_000) {
      return Response.json(
        {
          success: false,
          message: "The project details field is too long.",
        },
        { status: 400 }
      );
    }

    const fileEntries = formData.getAll("attachments");

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    let totalBytes = 0;

    const allowedExtensions = [
      ".pdf",
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
    ];

    for (const entry of fileEntries) {
      if (!(entry instanceof File) || entry.size === 0) {
        continue;
      }

      const lowerName = entry.name.toLowerCase();

      if (!allowedExtensions.some((ext) => lowerName.endsWith(ext))) {
        return Response.json(
          {
            success: false,
            message: `The file "${entry.name}" is not an allowed file type.`,
          },
          { status: 400 }
        );
      }

      totalBytes += entry.size;

      if (totalBytes > 3_500_000) {
        return Response.json(
          {
            success: false,
            message:
              "The uploaded files are too large. Please keep the combined upload under about 3.5 MB for now.",
          },
          { status: 413 }
        );
      }

      attachments.push({
        filename: entry.name,
        content: Buffer.from(await entry.arrayBuffer()),
      });
    }

    const referenceNumber = `KAM-Q-${new Date()
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${Math.random()
      .toString(36)
      .slice(2, 7)
      .toUpperCase()}`;

    const safe = {
      company: escapeHtml(company),
      contactName: escapeHtml(contactName),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      projectName: escapeHtml(projectName),
      projectAddress: escapeHtml(projectAddress),
      bidDate: escapeHtml(bidDate),
      location: escapeHtml(location),
      scope: escapeHtml(scope),
      material: escapeHtml(material),
      color: escapeHtml(color),
      notes: escapeHtml(notes).replaceAll("\n", "<br />"),
    };

    const { data, error } = await resend.emails.send({
      from: "KAM Website <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: `New KAM Quote Request — ${referenceNumber}`,
      replyTo: email,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:760px;margin:0 auto;color:#111936;">
          <div style="background:#111936;padding:28px;">
            <h1 style="color:#ffffff;margin:0;">
              Kansas Architectural Metals
            </h1>

            <p style="color:#ffd000;font-weight:bold;margin:8px 0 0;">
              New Quote Request
            </p>
          </div>

          <div style="padding:28px;border:1px solid #e5e7eb;">
            <p style="font-size:14px;color:#667085;">
              Quote Reference
            </p>

            <p style="font-size:22px;font-weight:bold;">
              ${referenceNumber}
            </p>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:28px 0;" />

            <h2>Customer</h2>

            <p><strong>Company:</strong> ${safe.company}</p>
            <p><strong>Contact:</strong> ${safe.contactName}</p>
            <p><strong>Phone:</strong> ${safe.phone}</p>
            <p><strong>Email:</strong> ${safe.email}</p>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:28px 0;" />

            <h2>Project</h2>

            <p><strong>Project Name:</strong> ${safe.projectName || "—"}</p>
            <p><strong>Project Address:</strong> ${safe.projectAddress || "—"}</p>
            <p><strong>Needed-By Date:</strong> ${safe.bidDate || "—"}</p>
            <p><strong>Preferred KAM Location:</strong> ${safe.location || "—"}</p>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:28px 0;" />

            <h2>Scope</h2>

            <p><strong>Requested Scope:</strong> ${safe.scope || "—"}</p>
            <p><strong>Material:</strong> ${safe.material || "—"}</p>
            <p><strong>Finish / Color:</strong> ${safe.color || "—"}</p>

            <p>
              <strong>Additional Information:</strong>
              <br />
              ${safe.notes || "—"}
            </p>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:28px 0;" />

            <p style="font-size:13px;color:#667085;">
              Submitted through the Kansas Architectural Metals website.
            </p>
          </div>
        </div>
      `,

      attachments,
    });

    if (error) {
      console.error("Resend quote error:", error);

      return Response.json(
        {
          success: false,
          message: "The email service could not send the quote request.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      referenceNumber,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Quote submission error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while processing the quote request.",
      },
      { status: 500 }
    );
  }
}