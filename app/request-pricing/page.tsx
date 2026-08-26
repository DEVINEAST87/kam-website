"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useRef,
  useState,
} from "react";

const MAX_UPLOAD_BYTES = 3_500_000;

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 KB";

  if (bytes < 1_000_000) {
    return `${Math.max(1, Math.round(bytes / 1000))} KB`;
  }

  return `${(bytes / 1_000_000).toFixed(2)} MB`;
}

export default function RequestPricingPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalFileBytes = selectedFiles.reduce(
    (total, file) => total + file.size,
    0
  );

  function addFiles(incomingFiles: File[]) {
    setFileError("");

    const validFiles = incomingFiles.filter((file) => file.size > 0);

    if (validFiles.length === 0) return;

    const existingNames = new Set(
      selectedFiles.map((file) => `${file.name}-${file.size}`)
    );

    const newFiles = validFiles.filter(
      (file) => !existingNames.has(`${file.name}-${file.size}`)
    );

    const combined = [...selectedFiles, ...newFiles];

    const combinedSize = combined.reduce(
      (total, file) => total + file.size,
      0
    );

    if (combinedSize > MAX_UPLOAD_BYTES) {
      setFileError(
        "The combined upload is too large. Please keep all files under about 3.5 MB total for this first version."
      );
      return;
    }

    setSelectedFiles(combined);
  }

  function handleFileInput(event: ChangeEvent<HTMLInputElement>) {
    addFiles(Array.from(event.target.files ?? []));
    event.target.value = "";
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);

    addFiles(Array.from(event.dataTransfer.files ?? []));
  }

  function removeFile(indexToRemove: number) {
    setSelectedFiles((current) =>
      current.filter((_, index) => index !== indexToRemove)
    );

    setFileError("");
  }

  function clearFiles() {
    setSelectedFiles([]);
    setFileError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setMessage("");
    setReferenceNumber("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.delete("attachments");

    for (const file of selectedFiles) {
      formData.append("attachments", file);
    }

    if (totalFileBytes > MAX_UPLOAD_BYTES) {
      setStatus("error");
      setMessage(
        "Your attached files are too large. Please keep the combined upload under about 3.5 MB."
      );
      return;
    }

    try {
      const response = await fetch("/api/request-pricing", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(
          result.message ||
            "Your pricing request could not be submitted. Please try again."
        );
        return;
      }

      setStatus("success");
      setReferenceNumber(result.referenceNumber);
      setMessage(
        "Your request for current pricing was submitted successfully."
      );

      form.reset();
      clearFiles();
    } catch {
      setStatus("error");
      setMessage(
        "We could not connect to the submission service. Please try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-[#111936]">
      <header className="bg-[#0b1024] text-white">
        <div className="kam-container flex min-h-20 items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={220}
              height={70}
              className="h-auto w-[190px] brightness-0 invert"
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hidden text-xs font-black uppercase tracking-[0.14em] text-white/80 transition hover:text-yellow-400 sm:block"
            >
              ← Back to Home
            </Link>

            <Link
              href="/submit-order"
              className="rounded-md bg-yellow-400 px-4 py-3 text-xs font-black uppercase tracking-[0.1em] text-[#111936] transition hover:bg-yellow-300"
            >
              Submit an Order
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-[#202d61] text-white">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="flex items-center">
            <div className="w-full px-6 py-20 sm:px-10 lg:ml-auto lg:max-w-[760px] lg:px-12 lg:py-24">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
                Request Current Pricing
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Get the pricing you can actually use.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/80">
                Material and fabrication pricing can change quickly. Rather than
                publish a price sheet that may already be outdated, KAM provides
                current pricing directly based on what you need.
              </p>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
            <Image
              src="/images/product-trim-profiles.jpg"
              alt="Custom architectural sheet metal profiles fabricated by KAM"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#202d61]/55 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid md:grid-cols-3">
          {[
            [
              "01",
              "Tell Us Who You Are",
              "Give us your contact and company information.",
            ],
            [
              "02",
              "Tell Us What You Need",
              "Select the pricing categories that apply to your work.",
            ],
            [
              "03",
              "We Send Current Pricing",
              "Our team follows up with the appropriate information.",
            ],
          ].map(([number, title, copy], index) => (
            <div
              key={number}
              className={`flex gap-5 py-7 ${
                index > 0 ? "md:border-l md:border-slate-200 md:pl-8" : ""
              }`}
            >
              <span className="text-sm font-black text-yellow-500">
                {number}
              </span>

              <div>
                <p className="font-black text-[#111936]">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
          >
            <div>
              <p className="kam-eyebrow">Contact Information</p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <Field label="Company Name" name="company" required />
                <Field label="Contact Name" name="contactName" required />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email Address" name="email" type="email" required />
              </div>
            </div>

            <Divider />

            <div>
              <p className="kam-eyebrow">KAM Location</p>

              <div className="mt-7 max-w-xl">
                <SelectField
                  label="Preferred Location"
                  name="location"
                  options={[
                    "Wichita",
                    "Shawnee",
                    "Topeka",
                    "Not Sure — Route It For Me",
                  ]}
                />
              </div>
            </div>

            <Divider />

            <div>
              <p className="kam-eyebrow">What Pricing Do You Need?</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Architectural Sheet Metal / Trim",
                  "Roof Panel Pricing",
                  "Wall / Soffit Panel Pricing",
                  "ACM Pricing",
                  "Gutters / Downspouts",
                  "Coping / Fascia",
                  "Accessories / Fasteners",
                  "Other / Not Sure",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 border border-slate-200 bg-[#f8f9fa] p-4 transition hover:border-[#202d61]"
                  >
                    <input
                      type="checkbox"
                      name="pricingType"
                      value={item}
                      className="h-4 w-4"
                    />

                    <span className="text-sm font-bold text-[#111936]">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <Divider />

            <div>
              <p className="kam-eyebrow">Material Information</p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <SelectField
                  label="Material"
                  name="material"
                  options={[
                    "24 Gauge Pre-Finished Steel",
                    "Galvanized Steel",
                    ".032 Aluminum",
                    ".040 Aluminum",
                    "Stainless Steel",
                    "Copper",
                    "Other / Not Sure",
                  ]}
                />

                <Field label="Finish / Color" name="color" />
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-black text-[#111936]">
                  Additional Details
                </span>

                <textarea
                  name="details"
                  rows={7}
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#202d61]"
                  placeholder="Tell us what you're pricing, approximate quantities, project size, preferred panel profile or any other useful information."
                />
              </label>
            </div>

            <Divider />

            <div>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="kam-eyebrow">Optional Project Files</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Drag files into the box or choose them from your computer.
                  </p>
                </div>

                <p className="text-xs font-black text-slate-400">
                  {formatBytes(totalFileBytes)} / 3.5 MB
                </p>
              </div>

              <div
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`group mt-7 flex min-h-56 cursor-pointer flex-col items-center justify-center border-2 border-dashed p-8 text-center transition ${
                  isDragging
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-slate-300 bg-[#f8f9fa] hover:border-yellow-400 hover:bg-yellow-50/30"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#202d61] text-2xl font-black text-white">
                  ↑
                </div>

                <span className="mt-5 text-lg font-black text-[#111936]">
                  {isDragging
                    ? "Drop your files here"
                    : "Have drawings or takeoff information?"}
                </span>

                <span className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                  Uploading project information can help us understand exactly
                  what pricing will be most useful to you.
                </span>

                <span className="mt-6 rounded-md bg-[#202d61] px-6 py-3 text-xs font-black uppercase tracking-wide text-white">
                  Choose Files
                </span>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx"
                  onChange={handleFileInput}
                />
              </div>

              {fileError && (
                <div className="mt-4 border-l-4 border-red-500 bg-red-50 p-4">
                  <p className="text-sm font-bold text-red-800">
                    {fileError}
                  </p>
                </div>
              )}

              {selectedFiles.length > 0 && (
                <div className="mt-6 overflow-hidden border border-slate-200 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8f9fa] px-5 py-4">
                    <p className="text-sm font-black">
                      {selectedFiles.length}{" "}
                      {selectedFiles.length === 1 ? "file" : "files"} selected
                    </p>

                    <button
                      type="button"
                      onClick={clearFiles}
                      className="text-xs font-black uppercase text-slate-500 hover:text-red-600"
                    >
                      Remove All
                    </button>
                  </div>

                  {selectedFiles.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between border-t border-slate-200 px-5 py-4 first:border-t-0"
                    >
                      <div>
                        <p className="text-sm font-bold">
                          ✓ {file.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {formatBytes(file.size)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-xs font-black uppercase text-slate-400 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {status === "success" && (
              <div className="mt-8 border-l-4 border-green-500 bg-green-50 p-5">
                <p className="font-black text-green-900">
                  Pricing request received.
                </p>

                <p className="mt-2 text-sm text-green-800">
                  {message}
                </p>

                {referenceNumber && (
                  <p className="mt-3 text-sm font-black text-green-900">
                    Reference: {referenceNumber}
                  </p>
                )}
              </div>
            )}

            {status === "error" && (
              <div className="mt-8 border-l-4 border-red-500 bg-red-50 p-5">
                <p className="font-black text-red-900">
                  We couldn&apos;t submit your pricing request.
                </p>

                <p className="mt-2 text-sm text-red-800">
                  {message}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-10 w-full rounded-md bg-yellow-400 px-7 py-5 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending Pricing Request..."
                : "Request Current Pricing →"}
            </button>
          </form>

          <aside className="space-y-5">
            <div className="bg-[#111936] p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Why Request Pricing?
              </p>

              <h2 className="mt-5 text-3xl font-black">
                Material costs move.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Requesting current pricing helps prevent estimates from being
                based on outdated information.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <p className="kam-eyebrow">Need a Project Quote?</p>

              <Link
                href="/request-quote"
                className="mt-6 block w-full border border-[#202d61] px-5 py-4 text-center text-xs font-black uppercase tracking-wide text-[#202d61]"
              >
                Request a Quote →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-slate-200" />;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#111936]">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>

      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#202d61]"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#111936]">
        {label}
      </span>

      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#202d61]"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}