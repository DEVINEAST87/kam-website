"use client";

import { FormEvent, useState } from "react";

type Diagnostics = {
  hasBlobStoreId?: boolean;
  hasOidcToken?: boolean;
  hasReadWriteToken?: boolean;
};

export default function TestBlobPage() {
  const [message, setMessage] = useState("");
  const [diagnostics, setDiagnostics] = useState<Diagnostics | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("Uploading...");
    setDiagnostics(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/test-blob", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      setDiagnostics(result.diagnostics ?? null);

      if (!response.ok || !result.success) {
        setMessage(`Error: ${result.message ?? "Upload failed"}`);
        return;
      }

      setMessage(`Success: ${result.pathname}`);
    } catch {
      setMessage("Error: Could not connect to the Blob test route.");
    }
  }

  return (
    <main className="min-h-screen bg-[#111111] p-6 text-white sm:p-10">
      <h1 className="text-3xl font-black">KAM Blob Test</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <input type="file" name="file" required />

        <button
          type="submit"
          className="block bg-black px-5 py-4 font-bold text-white"
        >
          Upload Test File
        </button>
      </form>

      {message && (
        <div className="mt-8">
          <p>{message}</p>
        </div>
      )}

      {diagnostics && (
        <div className="mt-8 border border-white/20 bg-white/5 p-5">
          <h2 className="font-black">Authentication Diagnostics</h2>

          <div className="mt-4 space-y-2 font-mono text-sm">
            <p>
              BLOB_STORE_ID:{" "}
              <strong>
                {diagnostics.hasBlobStoreId ? "TRUE" : "FALSE"}
              </strong>
            </p>

            <p>
              VERCEL_OIDC_TOKEN:{" "}
              <strong>
                {diagnostics.hasOidcToken ? "TRUE" : "FALSE"}
              </strong>
            </p>

            <p>
              BLOB_READ_WRITE_TOKEN:{" "}
              <strong>
                {diagnostics.hasReadWriteToken ? "TRUE" : "FALSE"}
              </strong>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}