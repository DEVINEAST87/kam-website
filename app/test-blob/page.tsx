"use client";

import { FormEvent, useState } from "react";

export default function TestBlobPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Uploading...");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/test-blob", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      setMessage(`Error: ${result.message ?? "Upload failed"}`);
      return;
    }

    setMessage(`Success: ${result.pathname}`);
  }

  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <h1 className="text-3xl font-bold">KAM Blob Test</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input type="file" name="file" required />

        <button
          type="submit"
          className="block bg-black px-5 py-3 font-bold text-white"
        >
          Upload Test File
        </button>
      </form>

      <p className="mt-8">{message}</p>
    </main>
  );
}