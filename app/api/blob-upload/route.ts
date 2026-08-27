import { issueSignedToken, presignUrl } from "@vercel/blob";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB

const allowedContentTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

function sanitizeFilename(filename: string) {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const filename = String(body.filename ?? "");
    const contentType = String(body.contentType ?? "");
    const size = Number(body.size ?? 0);

    if (!filename || !contentType || !size) {
      return Response.json(
        {
          success: false,
          message: "File information is incomplete.",
        },
        { status: 400 }
      );
    }

    if (!allowedContentTypes.includes(contentType)) {
      return Response.json(
        {
          success: false,
          message: "That file type is not allowed.",
        },
        { status: 400 }
      );
    }

    if (size > MAX_FILE_SIZE) {
      return Response.json(
        {
          success: false,
          message: "Files may not exceed 25 MB.",
        },
        { status: 413 }
      );
    }

    const safeFilename = sanitizeFilename(filename);

    const pathname = `customer-uploads/test/${Date.now()}-${safeFilename}`;

    const token = await issueSignedToken({
      operations: ["put"],
      storeId: process.env.KAM_BLOB_STORE_ID,
    });

    const { presignedUrl } = await presignUrl(token, {
      pathname,
      operation: "put",
      access: "private",
      contentType,
      maximumSizeInBytes: MAX_FILE_SIZE,
      validUntil: Date.now() + 15 * 60 * 1000,
    });

    return Response.json({
      success: true,
      pathname,
      presignedUrl,
    });
  } catch (error) {
    console.error("Blob upload URL error:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create upload URL.",
      },
      { status: 500 }
    );
  }
}