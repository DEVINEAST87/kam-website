import {
  issueSignedToken,
  presignUrl,
} from "@vercel/blob";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const requests = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const MAX_FILE_BYTES = 25 * 1024 * 1024;
const MAX_TOTAL_BYTES = 75 * 1024 * 1024;
const MAX_FILES = 20;

type UploadedFile = {
  originalName: string;
  pathname: string;
  size: number;
  contentType: string;
};

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

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function parseUploadedFiles(value: string): UploadedFile[] {
  if (!value) return [];

  const parsed = JSON.parse(value);

  if (!Array.isArray(parsed)) {
    throw new Error("Uploaded file information is invalid.");
  }

  return parsed.map((item) => ({
    originalName: String(item.originalName ?? ""),
    pathname: String(item.pathname ?? ""),
    size: Number(item.size ?? 0),
    contentType: String(item.contentType ?? ""),
  }));
}

function validateUploadedFiles(
  files: UploadedFile[],
  submissionId: string
) {
  if (files.length > MAX_FILES) {
    throw new Error(`No more than ${MAX_FILES} files may be submitted.`);
  }

  let totalBytes = 0;

  for (const file of files) {
    if (
      !file.originalName ||
      !file.pathname ||
      !file.size ||
      !file.contentType
    ) {
      throw new Error("One or more uploaded files are invalid.");
    }

    if (file.size > MAX_FILE_BYTES) {
      throw new Error(
        `"${file.originalName}" exceeds the 25 MB per-file limit.`
      );
    }

    totalBytes += file.size;

    if (totalBytes > MAX_TOTAL_BYTES) {
      throw new Error("Uploaded files exceed the 75 MB total limit.");
    }

    const expectedPrefix =
      `customer-uploads/order/${submissionId}/`;

    if (!file.pathname.startsWith(expectedPrefix)) {
      throw new Error(
        `The uploaded file "${file.originalName}" does not belong to this order.`
      );
    }
  }
}

async function createDownloadLink(pathname: string) {
  const storeId = process.env.KAM_BLOB_STORE_ID;

  if (!storeId) {
    throw new Error("KAM Blob storage is not configured.");
  }

  const token = await issueSignedToken({
    operations: ["get"],
    storeId,
  });

  const { presignedUrl } = await presignUrl(token, {
    pathname,
    operation: "get",
    access: "private",
    validUntil: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });

  return presignedUrl;
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
    const poNumber = getText("poNumber");
    const jobAddress = getText("jobAddress");
    const requestedDate = getText("requestedDate");

    const location = getText("location");
    const material = getText("material");
    const gauge = getText("gauge");
    const color = getText("color");
    const notes = getText("notes");

    const submissionId = getText("submissionId");
    const uploadedFilesRaw = getText("uploadedFiles");

    // Hidden bot trap.
    const website = getText("website");

    if (website) {
      return Response.json({
        success: true,
        referenceNumber: "KAM-RECEIVED",
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

    if (!submissionId) {
      return Response.json(
        {
          success: false,
          message: "Submission information is missing.",
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
          message: "The notes field is too long.",
        },
        { status: 400 }
      );
    }

    let uploadedFiles: UploadedFile[] = [];

    try {
      uploadedFiles = parseUploadedFiles(uploadedFilesRaw);
      validateUploadedFiles(uploadedFiles, submissionId);
    } catch (error) {
      return Response.json(
        {
          success: false,
          message:
            error instanceof Error
              ? error.message
              : "Uploaded file information is invalid.",
        },
        { status: 400 }
      );
    }

    const referenceNumber = `KAM-${new Date()
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
      poNumber: escapeHtml(poNumber),
      jobAddress: escapeHtml(jobAddress),
      requestedDate: escapeHtml(requestedDate),
      location: escapeHtml(location),
      material: escapeHtml(material),
      gauge: escapeHtml(gauge),
      color: escapeHtml(color),
      notes: escapeHtml(notes).replaceAll("\n", "<br />"),
    };

    const filesWithLinks = await Promise.all(
      uploadedFiles.map(async (file) => ({
        ...file,
        downloadUrl: await createDownloadLink(file.pathname),
      }))
    );

    const fileSection =
      filesWithLinks.length === 0
        ? `
          <p style="color:#667085;">
            No files were uploaded with this order.
          </p>
        `
        : `
          <table
            cellpadding="0"
            cellspacing="0"
            style="width:100%;border-collapse:collapse;"
          >
            ${filesWithLinks
              .map(
                (file) => `
                  <tr>
                    <td
                      style="
                        padding:14px 0;
                        border-bottom:1px solid #e5e7eb;
                      "
                    >
                      <div
                        style="
                          font-weight:bold;
                          color:#111936;
                          word-break:break-word;
                        "
                      >
                        ${escapeHtml(file.originalName)}
                      </div>

                      <div
                        style="
                          margin-top:4px;
                          font-size:13px;
                          color:#667085;
                        "
                      >
                        ${formatBytes(file.size)}
                      </div>
                    </td>

                    <td
                      align="right"
                      style="
                        padding:14px 0;
                        border-bottom:1px solid #e5e7eb;
                      "
                    >
                      <a
                        href="${file.downloadUrl}"
                        style="
                          display:inline-block;
                          background:#202d61;
                          color:#ffffff;
                          text-decoration:none;
                          padding:10px 14px;
                          font-size:12px;
                          font-weight:bold;
                        "
                      >
                        DOWNLOAD FILE
                      </a>
                    </td>
                  </tr>
                `
              )
              .join("")}
          </table>

          <p
            style="
              margin-top:16px;
              font-size:12px;
              line-height:18px;
              color:#667085;
            "
          >
            File download links are temporary and expire after 7 days.
            The original files remain stored privately in KAM storage.
          </p>
        `;

    const { data, error } = await resend.emails.send({
      from: "KAM Website <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: `New KAM Order Submission — ${referenceNumber}`,
      replyTo: email,

      html: `
        <div
          style="
            font-family:Arial,sans-serif;
            max-width:760px;
            margin:0 auto;
            color:#111936;
          "
        >
          <div style="background:#111936;padding:28px;">
            <h1 style="color:#ffffff;margin:0;">
              Kansas Architectural Metals
            </h1>

            <p
              style="
                color:#ffd000;
                font-weight:bold;
                margin:8px 0 0;
              "
            >
              New Order Submission
            </p>
          </div>

          <div
            style="
              padding:28px;
              border:1px solid #e5e7eb;
            "
          >
            <p style="font-size:14px;color:#667085;">
              Reference Number
            </p>

            <p style="font-size:22px;font-weight:bold;">
              ${referenceNumber}
            </p>

            <hr
              style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              "
            />

            <h2>Contact Information</h2>

            <p><strong>Company:</strong> ${safe.company}</p>
            <p><strong>Contact:</strong> ${safe.contactName}</p>
            <p><strong>Phone:</strong> ${safe.phone}</p>
            <p><strong>Email:</strong> ${safe.email}</p>

            <hr
              style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              "
            />

            <h2>Project Information</h2>

            <p>
              <strong>Project / Job:</strong>
              ${safe.projectName || "—"}
            </p>

            <p>
              <strong>PO Number:</strong>
              ${safe.poNumber || "—"}
            </p>

            <p>
              <strong>Job Address:</strong>
              ${safe.jobAddress || "—"}
            </p>

            <p>
              <strong>Requested Date:</strong>
              ${safe.requestedDate || "—"}
            </p>

            <hr
              style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              "
            />

            <h2>Order Details</h2>

            <p>
              <strong>Preferred Location:</strong>
              ${safe.location || "—"}
            </p>

            <p>
              <strong>Material:</strong>
              ${safe.material || "—"}
            </p>

            <p>
              <strong>Gauge / Thickness:</strong>
              ${safe.gauge || "—"}
            </p>

            <p>
              <strong>Finish / Color:</strong>
              ${safe.color || "—"}
            </p>

            <p>
              <strong>Notes:</strong>
              <br />
              ${safe.notes || "—"}
            </p>

            <hr
              style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              "
            />

            <h2>Uploaded Files</h2>

            ${fileSection}

            <hr
              style="
                border:none;
                border-top:1px solid #e5e7eb;
                margin:28px 0;
              "
            />

            <p
              style="
                font-size:13px;
                color:#667085;
              "
            >
              Submitted through the Kansas Architectural Metals website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend order error:", error);

      return Response.json(
        {
          success: false,
          message: "The email service could not send the submission.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      referenceNumber,
      emailId: data?.id,
      uploadedFileCount: uploadedFiles.length,
    });
  } catch (error) {
    console.error("Order submission error:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while processing the order.",
      },
      { status: 500 }
    );
  }
}