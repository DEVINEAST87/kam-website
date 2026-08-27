import { put } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json(
        {
          success: false,
          message: "No file was provided.",
        },
        { status: 400 }
      );
    }

    const storeId = process.env.KAM_BLOB_STORE_ID;

    if (!storeId) {
      return Response.json(
        {
          success: false,
          message: "KAM_BLOB_STORE_ID is missing.",
          diagnostics: {
            hasKamBlobStoreId: false,
          },
        },
        { status: 500 }
      );
    }

    const blob = await put(
      `tests/${Date.now()}-${file.name}`,
      file,
      {
        access: "private",
        addRandomSuffix: true,
        storeId,
      }
    );

    return Response.json({
      success: true,
      pathname: blob.pathname,
      diagnostics: {
        hasKamBlobStoreId: true,
      },
    });
  } catch (error) {
    console.error("Blob test upload failed:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown Blob upload error",
        diagnostics: {
          hasKamBlobStoreId: Boolean(process.env.KAM_BLOB_STORE_ID),
        },
      },
      { status: 500 }
    );
  }
}