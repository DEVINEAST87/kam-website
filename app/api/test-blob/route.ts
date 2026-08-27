import { put } from "@vercel/blob";
import { getVercelOidcToken } from "@vercel/oidc";

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
    const oidcToken = await getVercelOidcToken();

    const diagnostics = {
      hasKamBlobStoreId: Boolean(storeId),
      hasOidcToken: Boolean(oidcToken),
    };

    if (!storeId || !oidcToken) {
      return Response.json(
        {
          success: false,
          message: "Required Blob authentication information is missing.",
          diagnostics,
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
        oidcToken,
      }
    );

    return Response.json({
      success: true,
      pathname: blob.pathname,
      diagnostics,
    });
  } catch (error) {
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