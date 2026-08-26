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

export default function RequestQuotePage() {
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

    /*
      Combine all selected product/scope checkboxes into one clean
      description for the email.
    */
    const selectedScopes = formData
      .getAll("productType")
      .map((value) => String(value));

    formData.set(
      "scope",
      selectedScopes.length > 0
        ? selectedScopes.join(", ")
        : "Not specified"
    );

    /*
      Translate our customer-friendly field names into the names
      expected by the API route.
    */
    formData.set(
      "projectAddress",
      String(formData.get("jobLocation") ?? "")
    );

    formData.set(
      "bidDate",
      String(formData.get("neededBy") ?? "")
    );

    formData.set(
      "notes",
      String(formData.get("details") ?? "")
    );

    /*
      We manually add attachments so drag-and-drop files are included.
    */
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
      const response = await fetch("/api/request-quote", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(
          result.message ||
            "Your quote request could not be submitted. Please try again."
        );
        return;
      }

      setStatus("success");
      setReferenceNumber(result.referenceNumber);
      setMessage(
        "Your quote request was submitted successfully. Our team will review the information you provided."
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
      {/* HEADER */}
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

      {/* HERO */}
      <section className="bg-[#202d61] text-white">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="flex items-center">
            <div className="w-full px-6 py-20 sm:px-10 lg:ml-auto lg:max-w-[760px] lg:px-12 lg:py-24">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
                Request a Quote
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Tell us what you&apos;re working on.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/80">
                Send us your project information, drawings, measurements or
                photos. We&apos;ll review what you have and contact you if we
                need anything else before preparing pricing.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {["Plans", "Drawings", "Photos", "Takeoffs"].map((item) => (
                  <span
                    key={item}
                    className="border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
            <Image
              src="/images/project-commercial-facade.jpg"
              alt="Commercial architectural metal project"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#202d61]/55 via-transparent to-transparent" />

            <div className="absolute bottom-6 right-6 border-l-4 border-yellow-400 bg-[#0b1024]/90 px-5 py-4 backdrop-blur-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-400">
                Project Support
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Send what you have. We&apos;ll help work through the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid md:grid-cols-3">
          {[
            [
              "01",
              "Tell Us About It",
              "Share your project and available information.",
            ],
            [
              "02",
              "We Review It",
              "Our team looks through your scope and files.",
            ],
            [
              "03",
              "We Follow Up",
              "We contact you with questions and current pricing.",
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

      {/* FORM */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
          >
            {/* CONTACT */}
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

            {/* PROJECT */}
            <div>
              <p className="kam-eyebrow">Project Information</p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <Field label="Project / Job Name" name="projectName" />
                <Field label="Job Location" name="jobLocation" />

                <Field
                  label="Approximate Needed-By Date"
                  name="neededBy"
                  type="date"
                />

                <SelectField
                  label="Preferred KAM Location"
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

            {/* SCOPE */}
            <div>
              <p className="kam-eyebrow">What Do You Need?</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Architectural Flashings / Trim",
                  "Roof Panels",
                  "Wall / Soffit Panels",
                  "ACM Panels",
                  "Gutters / Downspouts",
                  "Coping / Fascia",
                  "Custom Fabrication",
                  "Other / Not Sure",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 border border-slate-200 bg-[#f8f9fa] p-4 transition hover:border-[#202d61]"
                  >
                    <input
                      type="checkbox"
                      name="productType"
                      value={item}
                      className="h-4 w-4"
                    />

                    <span className="text-sm font-bold text-[#111936]">
                      {item}
                    </span>
                  </label>
                ))}
              </div>

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
                  Project Details
                </span>

                <textarea
                  name="details"
                  rows={8}
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#202d61]"
                  placeholder="Tell us what you're looking for, approximate quantities, dimensions, square footage, lineal footage or any other information you already have."
                />
              </label>
            </div>

            <Divider />

            {/* UPLOAD */}
            <div>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="kam-eyebrow">
                    Plans, Drawings & Photos
                  </p>

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
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl font-black transition ${
                    isDragging
                      ? "bg-yellow-400 text-[#111936]"
                      : "bg-[#202d61] text-white group-hover:bg-yellow-400 group-hover:text-[#111936]"
                  }`}
                >
                  ↑
                </div>

                <span className="mt-5 text-lg font-black text-[#111936]">
                  {isDragging
                    ? "Drop your files here"
                    : "Upload whatever you have"}
                </span>

                <span className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                  Plans, marked-up PDFs, screenshots, sketches, photos and
                  existing takeoff information can all help us understand your
                  project.
                </span>

                <span className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  PDF • JPG • PNG • WEBP • WORD • EXCEL
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
                    <div>
                      <p className="text-sm font-black text-[#111936]">
                        {selectedFiles.length}{" "}
                        {selectedFiles.length === 1 ? "file" : "files"} selected
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {formatBytes(totalFileBytes)} total
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={clearFiles}
                      className="text-xs font-black uppercase tracking-[0.1em] text-slate-500 hover:text-red-600"
                    >
                      Remove All
                    </button>
                  </div>

                  <div className="divide-y divide-slate-200">
                    {selectedFiles.map((file, index) => (
                      <div
                        key={`${file.name}-${file.size}-${index}`}
                        className="flex items-center justify-between gap-5 px-5 py-4"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-[#111936]">
                            ✓ {file.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {formatBytes(file.size)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="shrink-0 text-xs font-black uppercase tracking-[0.08em] text-slate-400 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CONFIRMATION */}
            {status === "success" && (
              <div className="mt-8 border-l-4 border-green-500 bg-green-50 p-5">
                <p className="font-black text-green-900">
                  Quote request received.
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
                  We couldn&apos;t submit your quote request.
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
                ? "Sending Quote Request..."
                : "Request My Quote →"}
            </button>
          </form>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            <div className="relative min-h-[260px] overflow-hidden">
              <Image
                src="/images/project-basehor-city-hall.jpg"
                alt="Architectural metal project supported by KAM"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1024]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-400">
                  Real Project Work
                </p>

                <p className="mt-2 max-w-xs font-bold leading-6">
                  Architectural metals built for commercial construction.
                </p>
              </div>
            </div>

            <div className="bg-[#111936] p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Already Ready to Fabricate?
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                Skip the quote form.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                If you already know what you need and are ready to send the job
                to fabrication, use our order submission page instead.
              </p>

              <Link
                href="/submit-order"
                className="mt-7 inline-block rounded-md bg-yellow-400 px-6 py-4 text-xs font-black uppercase tracking-wide text-[#111936]"
              >
                Submit an Order →
              </Link>
            </div>

            <div className="border-t-4 border-yellow-400 bg-white p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Need Current Pricing?
              </p>

              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em]">
                Ask for the latest pricing information.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Material pricing changes frequently, so KAM provides current
                pricing directly rather than publishing potentially outdated
                pricing online.
              </p>

              <Link
                href="/request-pricing"
                className="mt-6 block w-full border border-[#202d61] px-5 py-4 text-center text-xs font-black uppercase tracking-wide text-[#202d61] transition hover:bg-[#202d61] hover:text-white"
              >
                Request Current Pricing →
              </Link>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <p className="kam-eyebrow">Questions?</p>

              <p className="mt-4 text-2xl font-black">
                913-441-1208
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Monday–Friday
                <br />
                6:30 AM–4:30 PM
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="bg-[#111936] py-10 text-white">
        <div className="kam-container flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
              Kansas Architectural Metals
            </p>

            <p className="mt-2 text-xl font-black">
              Architectural Metals. Built by Pros.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
            <span>Wichita</span>
            <span>Shawnee</span>
            <span>Topeka</span>
          </div>
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