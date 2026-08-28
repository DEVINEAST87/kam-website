import { get, list } from "@vercel/blob";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const pathname = url.searchParams.get("pathname");

    if (!pathname) {
      return Response.json(
        {
          success: false,
          error: "Missing pathname",
        },
        { status: 400 }
      );
    }

    const storeId =
      process.env.BLOB_STORE_ID ||
      process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      return Response.json(
        {
          success: false,
          error: "No Blob store ID available",
        },
        { status: 500 }
      );
    }

    const lastSlash = pathname.lastIndexOf("/");
    const folderPrefix =
      lastSlash >= 0
        ? pathname.slice(0, lastSlash + 1)
        : "";

    const listed = await list({
      prefix: folderPrefix,
      limit: 20,
      storeId,
    });

    const matchingBlob = listed.blobs.find(
      (blob) => blob.pathname === pathname
    );

    const result = await get(pathname, {
      access: "private",
      storeId,
      useCache: false,
    });

    if (!result) {
      return Response.json(
        {
          success: false,
          error: "get() returned null",
          pathname,
          folderPrefix,
          matchingBlobFoundByList: Boolean(matchingBlob),
          listedBlobs: listed.blobs.map((blob) => ({
            pathname: blob.pathname,
            size: blob.size,
          })),
          hasKamStoreId: Boolean(
            process.env.KAM_BLOB_STORE_ID
          ),
          hasManagedStoreId: Boolean(
            process.env.BLOB_STORE_ID
          ),
          storeIdLength: storeId.length,
        },
        { status: 404 }
      );
    }

    if (result.statusCode !== 200 || !result.stream) {
      return Response.json(
        {
          success: false,
          error: "get() did not return 200",
          pathname,
          statusCode: result.statusCode,
          matchingBlobFoundByList: Boolean(matchingBlob),
          listedBlobs: listed.blobs.map((blob) => ({
            pathname: blob.pathname,
            size: blob.size,
          })),
        },
        { status: 404 }
      );
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
    console.error("Blob diagnostic error:", error);

    return Response.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown Blob error",
        errorName:
          error instanceof Error
            ? error.name
            : "Unknown",
      },
      { status: 500 }
    );
  }
}