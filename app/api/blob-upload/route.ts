import { issueSignedToken, presignUrl } from "@vercel/blob";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB per file
const MAX_REQUESTS_PER_WINDOW = 20;
const WINDOW_MS = 60_000;

const requests = new Map<
  string,
  { count: number; resetAt: number }
>();

const allowedContentTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

const allowedUploadTypes = new Set([
  "order",
  "quote",
  "pricing",
]);

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

function isValidSubmissionId(value: string) {
  return /^[a-zA-Z0-9_-]{8,80}$/.test(value);
}

function sanitizeFilename(filename: string) {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^\.+/, "")
    .slice(0, 180);
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return Response.json(
        {
          success: false,
          message:
            "Too many upload requests were received from this connection. Please wait a minute and try again.",
        },
        { status: 429 }
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return Response.json(
        {
          success: false,
          message: "File information is invalid.",
        },
        { status: 400 }
      );
    }

    if (
      typeof body !== "object" ||
      body === null
    ) {
      return Response.json(
        {
          success: false,
          message: "File information is invalid.",
        },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const filename = String(data.filename ?? "").trim();
    const contentType = String(data.contentType ?? "").trim();
    const size = Number(data.size ?? 0);
    const uploadType = String(data.uploadType ?? "").trim();
    const submissionId = String(
      data.submissionId ?? ""
    ).trim();

    if (
      !filename ||
      !contentType ||
      !uploadType ||
      !submissionId ||
      !Number.isFinite(size) ||
      size <= 0
    ) {
      return Response.json(
        {
          success: false,
          message: "File information is incomplete.",
        },
        { status: 400 }
      );
    }

    if (filename.length > 255) {
      return Response.json(
        {
          success: false,
          message: "The filename is too long.",
        },
        { status: 400 }
      );
    }

    if (
      filename.includes("/") ||
      filename.includes("\\") ||
      filename.includes("..")
    ) {
      return Response.json(
        {
          success: false,
          message: "The filename is invalid.",
        },
        { status: 400 }
      );
    }

    if (!isValidSubmissionId(submissionId)) {
      return Response.json(
        {
          success: false,
          message: "Submission information is invalid.",
        },
        { status: 400 }
      );
    }

    if (!allowedUploadTypes.has(uploadType)) {
      return Response.json(
        {
          success: false,
          message: "Invalid upload category.",
        },
        { status: 400 }
      );
    }

    if (!allowedContentTypes.has(contentType)) {
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

    const safeFilename = sanitizeFilename(filename);

    if (!safeFilename) {
      return Response.json(
        {
          success: false,
          message: "The filename is invalid.",
        },
        { status: 400 }
      );
    }

    const storeId =
      process.env.BLOB_STORE_ID ||
      process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      console.error(
        "Blob upload configuration error: missing Blob store ID."
      );

      return Response.json(
        {
          success: false,
          message:
            "File storage is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

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
          "Unable to prepare the file upload. Please try again.",
      },
      { status: 500 }
    );
  }
}