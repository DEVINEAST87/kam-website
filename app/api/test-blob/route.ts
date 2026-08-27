import { put } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json(
        { success: false, message: "No file was provided." },
        { status: 400 }
      );
    }

    const diagnostics = {
      hasBlobStoreId: Boolean(process.env.BLOB_STORE_ID),
      hasOidcToken: Boolean(process.env.VERCEL_OIDC_TOKEN),
      hasReadWriteToken: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
    };

    console.log("Blob diagnostics:", diagnostics);

    const blob = await put(
      `tests/${Date.now()}-${file.name}`,
      file,
      {
        access: "private",
        addRandomSuffix: true,
      }
    );

    return Response.json({
      success: true,
      pathname: blob.pathname,
      diagnostics,
    });
  } catch (error) {
    const diagnostics = {
      hasBlobStoreId: Boolean(process.env.BLOB_STORE_ID),
      hasOidcToken: Boolean(process.env.VERCEL_OIDC_TOKEN),
      hasReadWriteToken: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
    };

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown Blob error",
        diagnostics,
      },
      { status: 500 }
    );
  }
}