import {
  issueSignedToken,
  presignUrl,
} from "@vercel/blob";

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

    const storeId = process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      return new Response(
        "KAM Blob storage is not configured.",
        {
          status: 500,
        }
      );
    }

    const signedToken = await issueSignedToken({
      pathname,
      operations: ["get"],
      storeId,
    });

    const { presignedUrl } = await presignUrl(signedToken, {
      pathname,
      operation: "get",
      access: "private",
      useCache: false,
      validUntil: Date.now() + 5 * 60 * 1000,
    });

    return Response.redirect(presignedUrl, 302);
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