import { get } from "@vercel/blob";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const pathname = url.searchParams.get("pathname");

    if (!pathname) {
      return new Response("Missing file pathname.", {
        status: 400,
      });
    }

    if (!pathname.startsWith("customer-uploads/")) {
      return new Response("Invalid file pathname.", {
        status: 400,
      });
    }

    const storeId =
      process.env.BLOB_STORE_ID ||
      process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      return new Response(
        "KAM Blob storage is not configured.",
        {
          status: 500,
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
      return new Response("Blob not found.", {
        status: 404,
      });
    }

    const filename =
      pathname.split("/").pop() || "download";

    return new Response(result.stream, {
      headers: {
        "Content-Type":
          result.blob.contentType ||
          "application/octet-stream",
        "Content-Disposition": `attachment; filename="${filename.replace(
          /"/g,
          ""
        )}"`,
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Blob download error:", error);

    return new Response(
      error instanceof Error
        ? error.message
        : "Unable to download file.",
      {
        status: 500,
      }
    );
  }
}