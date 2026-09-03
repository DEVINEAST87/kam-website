import { get } from "@vercel/blob";

const requests = new Map<
  string,
  { count: number; resetAt: number }
>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 30;

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

function isValidPathname(pathname: string) {
  if (
    pathname.length > 500 ||
    pathname.includes("..") ||
    pathname.includes("\\") ||
    pathname.includes("\0")
  ) {
    return false;
  }

  const parts = pathname.split("/");

  if (parts.length < 4) {
    return false;
  }

  if (
    parts[0] !== "customer-uploads" ||
    !allowedUploadTypes.has(parts[1])
  ) {
    return false;
  }

  const submissionId = parts[2];

  if (!/^[a-zA-Z0-9_-]{8,80}$/.test(submissionId)) {
    return false;
  }

  if (!parts.slice(3).every((part) => part.length > 0)) {
    return false;
  }

  return true;
}

function getSafeFilename(pathname: string) {
  const rawFilename =
    pathname.split("/").pop() || "download";

  const cleaned = rawFilename
    .replace(/[\r\n"]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .slice(0, 200);

  return cleaned || "download";
}

export async function GET(request: Request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return new Response(
        "Too many download requests. Please wait a minute and try again.",
        {
          status: 429,
          headers: {
            "Cache-Control": "private, no-store",
          },
        }
      );
    }

    const url = new URL(request.url);
    const pathname = url.searchParams.get("pathname");

    if (!pathname) {
      return new Response("Missing file pathname.", {
        status: 400,
        headers: {
          "Cache-Control": "private, no-store",
        },
      });
    }

    if (!isValidPathname(pathname)) {
      return new Response("Invalid file pathname.", {
        status: 400,
        headers: {
          "Cache-Control": "private, no-store",
        },
      });
    }

    const storeId =
      process.env.BLOB_STORE_ID ||
      process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      console.error(
        "Blob download configuration error: missing Blob store ID."
      );

      return new Response(
        "File storage is temporarily unavailable.",
        {
          status: 500,
          headers: {
            "Cache-Control": "private, no-store",
          },
        }
      );
    }

    const result = await get(pathname, {
      access: "private",
      storeId,
      useCache: false,
    });

    if (
      !result ||
      result.statusCode !== 200 ||
      !result.stream
    ) {
      return new Response("File not found.", {
        status: 404,
        headers: {
          "Cache-Control": "private, no-store",
        },
      });
    }

    const filename = getSafeFilename(pathname);

    return new Response(result.stream, {
      headers: {
        "Content-Type":
          result.blob.contentType ||
          "application/octet-stream",

        "Content-Disposition":
          `attachment; filename="${filename}"`,

        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Blob download error:", error);

    return new Response(
      "Unable to download file. Please try again.",
      {
        status: 500,
        headers: {
          "Cache-Control": "private, no-store",
        },
      }
    );
  }
}