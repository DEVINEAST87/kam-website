import { issueSignedToken, presignUrl } from "@vercel/blob";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB per file

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

const allowedUploadTypes = [
  "order",
  "quote",
  "pricing",
];

function sanitizeFilename(filename: string) {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

function sanitizeFolder(value: string) {
  return value
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 80);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const filename = String(body.filename ?? "");
    const contentType = String(body.contentType ?? "");
    const size = Number(body.size ?? 0);
    const uploadType = String(body.uploadType ?? "");
    const submissionId = sanitizeFolder(
      String(body.submissionId ?? "")
    );

    if (
      !filename ||
      !contentType ||
      !size ||
      !uploadType ||
      !submissionId
    ) {
      return Response.json(
        {
          success: false,
          message: "File information is incomplete.",
        },
        { status: 400 }
      );
    }

    if (!allowedUploadTypes.includes(uploadType)) {
      return Response.json(
        {
          success: false,
          message: "Invalid upload category.",
        },
        { status: 400 }
      );
    }

    if (!allowedContentTypes.includes(contentType)) {
      return Response.json(
        {
          success: false,
          message: `The file "${filename}" is not an allowed file type.`,
        },
        { status: 400 }
      );
    }

    if (size > MAX_FILE_SIZE) {
      return Response.json(
        {
          success: false,
          message: `"${filename}" is larger than the 25 MB per-file limit.`,
        },
        { status: 413 }
      );
    }

    const storeId =
      process.env.BLOB_STORE_ID ||
      process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      return Response.json(
        {
          success: false,
          message: "KAM Blob storage is not configured.",
        },
        { status: 500 }
      );
    }

    const safeFilename = sanitizeFilename(filename);

    const pathname =
      `customer-uploads/${uploadType}/` +
      `${submissionId}/` +
      `${Date.now()}-${safeFilename}`;

    const token = await issueSignedToken({
      operations: ["put"],
      storeId,
    });

    const { presignedUrl } = await presignUrl(token, {
      pathname,
      operation: "put",
      access: "private",
      addRandomSuffix: false,
      maximumSizeInBytes: MAX_FILE_SIZE,
      validUntil: Date.now() + 15 * 60 * 1000,
    });

    return Response.json({
      success: true,
      pathname,
      presignedUrl,
      originalName: filename,
      size,
      contentType,
    });
  } catch (error) {
    console.error("Blob upload URL error:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to prepare the file upload.",
      },
      { status: 500 }
    );
  }
}