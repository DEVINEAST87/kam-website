"use client";

import { ChangeEvent, useState } from "react";

export default function BlobUploadTestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0] ?? null);
    setMessage("");
  }

  async function uploadFile() {
    if (!file) {
      setMessage("Choose a file first.");
      return;
    }

    setUploading(true);
    setMessage("Creating secure upload...");

    try {
      const tokenResponse = await fetch("/api/blob-upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
          size: file.size,
        }),
      });

      const tokenResult = await tokenResponse.json();

      if (!tokenResponse.ok || !tokenResult.success) {
        setMessage(
          `Error: ${tokenResult.message ?? "Could not prepare upload."}`
        );
        return;
      }

      setMessage("Uploading directly to private storage...");

      const uploadResponse = await fetch(tokenResult.presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();

        setMessage(
          `Upload failed (${uploadResponse.status}): ${errorText || "Unknown error"}`
        );
        return;
      }

      setMessage(`Success: ${tokenResult.pathname}`);
    } catch (error) {
      setMessage(
        `Error: ${
          error instanceof Error ? error.message : "Unknown upload error"
        }`
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#111111] p-6 text-white sm:p-10">
      <h1 className="text-3xl font-black">
        KAM Large File Upload Test
      </h1>

      <p className="mt-4 max-w-xl text-white/70">
        This test uploads directly from the browser into KAM&apos;s private
        Blob storage.
      </p>

      <div className="mt-8 space-y-6">
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx"
        />

        {file && (
          <div className="border border-white/20 p-4">
            <p className="font-bold">{file.name}</p>

            <p className="mt-1 text-sm text-white/60">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={uploadFile}
          disabled={!file || uploading}
          className="block bg-yellow-400 px-6 py-4 font-black text-black disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Test File"}
        </button>

        {message && (
          <div className="border border-white/20 p-4">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}