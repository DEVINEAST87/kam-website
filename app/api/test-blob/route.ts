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

    const blob = await put(`tests/${Date.now()}-${file.name}`, file, {
      access: "private",
      addRandomSuffix: true,
    });

    return Response.json({
      success: true,
      pathname: blob.pathname,
      url: blob.url,
    });
  } catch (error) {
    console.error("Blob test upload failed:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown Blob upload error",
      },
      { status: 500 }
    );
  }
}