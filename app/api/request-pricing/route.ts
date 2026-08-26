import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const getText = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const company = getText("company");
    const contactName = getText("contactName");
    const phone = getText("phone");
    const email = getText("email");
    const location = getText("location");
    const material = getText("material");
    const color = getText("color");
    const details = getText("details");

    const pricingTypes = formData
      .getAll("pricingType")
      .map((value) => String(value))
      .join(", ");

    if (!company || !contactName || !phone || !email) {
      return Response.json(
        {
          success: false,
          message: "Please complete all required contact fields.",
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

    for (const entry of fileEntries) {
      if (!(entry instanceof File) || entry.size === 0) {
        continue;
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

    const referenceNumber = `KAM-P-${new Date()
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
      location: escapeHtml(location),
      pricingTypes: escapeHtml(pricingTypes),
      material: escapeHtml(material),
      color: escapeHtml(color),
      details: escapeHtml(details).replaceAll("\n", "<br />"),
    };

    const { data, error } = await resend.emails.send({
      from: "KAM Website <onboarding@resend.dev>",

      // TEST MODE
      to: ["delivered@resend.dev"],

      subject: `KAM Current Pricing Request — ${referenceNumber}`,

      replyTo: email,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:760px;margin:0 auto;color:#111936;">

          <div style="background:#111936;padding:28px;">
            <h1 style="color:#ffffff;margin:0;">
              Kansas Architectural Metals
            </h1>

            <p style="color:#ffd000;font-weight:bold;margin:8px 0 0;">
              Current Pricing Request
            </p>
          </div>

          <div style="padding:28px;border:1px solid #e5e7eb;">

            <p style="font-size:14px;color:#667085;">
              Pricing Request Reference
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

            <h2>Pricing Request</h2>

            <p>
              <strong>Preferred Location:</strong>
              ${safe.location || "—"}
            </p>

            <p>
              <strong>Pricing Requested:</strong>
              ${safe.pricingTypes || "—"}
            </p>

            <p>
              <strong>Material:</strong>
              ${safe.material || "—"}
            </p>

            <p>
              <strong>Finish / Color:</strong>
              ${safe.color || "—"}
            </p>

            <p>
              <strong>Additional Details:</strong>
              <br />
              ${safe.details || "—"}
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
      console.error("Resend pricing error:", error);

      return Response.json(
        {
          success: false,
          message: "The email service could not send the pricing request.",
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
    console.error("Pricing submission error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while processing the pricing request.",
      },
      { status: 500 }
    );
  }
}