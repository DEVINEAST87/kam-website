import Image from "next/image";
import Link from "next/link";

export default function SubmitOrderPage() {
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
              href="/request-quote"
              className="rounded-md border border-white/25 px-4 py-3 text-xs font-black uppercase tracking-[0.1em] transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* SPLIT HERO */}
      <section className="bg-[#202d61] text-white">
        <div className="grid lg:grid-cols-[1.15fr_.85fr]">
          <div className="flex items-center">
            <div className="w-full px-6 py-20 sm:px-10 lg:ml-auto lg:max-w-[760px] lg:px-12 lg:py-24">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
                Order Submission
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Send us what you have.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/80">
                Upload a completed KAM fabrication form, your own drawing, a
                blueprint screenshot, PDF, sketch or other project information.
                We&apos;ll contact you if anything needs clarification.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {["Drawings", "PDFs", "Photos", "Sketches"].map((item) => (
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
              src="/images/product-custom-welded.jpg"
              alt="Custom fabricated architectural sheet metal component"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#202d61]/55 via-transparent to-transparent lg:block" />

            <div className="absolute bottom-6 right-6 border-l-4 border-yellow-400 bg-[#0b1024]/90 px-5 py-4 backdrop-blur-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-400">
                Built to Order
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Custom fabrication is what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid md:grid-cols-3">
          {[
            ["01", "Send It", "Upload your order information and files."],
            ["02", "We Review It", "Our fabrication team checks the details."],
            ["03", "We Build It", "We contact you if anything needs clarification."],
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
                <p className="mt-1 text-sm leading-6 text-slate-500">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[1.35fr_.65fr]">
          <form className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
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
                <Field label="PO Number" name="poNumber" />
                <Field label="Job Address" name="jobAddress" />

                <Field
                  label="Requested Completion Date"
                  name="requestedDate"
                  type="date"
                />
              </div>
            </div>

            <Divider />

            {/* ORDER DETAILS */}
            <div>
              <p className="kam-eyebrow">Order Details</p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
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

                <Field label="Gauge / Thickness" name="gauge" />
                <Field label="Finish / Color" name="color" />
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-black text-[#111936]">
                  Order Details / Notes
                </span>

                <textarea
                  name="notes"
                  rows={7}
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#202d61]"
                  placeholder="Describe what you need, quantities, dimensions, special instructions or anything else that may help us process your order."
                />
              </label>
            </div>

            <Divider />

            {/* FILE UPLOAD */}
            <div>
              <p className="kam-eyebrow">Files & Drawings</p>

              <label className="group mt-7 flex min-h-56 cursor-pointer flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-[#f8f9fa] p-8 text-center transition hover:border-yellow-400 hover:bg-yellow-50/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#202d61] text-2xl font-black text-white transition group-hover:bg-yellow-400 group-hover:text-[#111936]">
                  ↑
                </div>

                <span className="mt-5 text-lg font-black text-[#111936]">
                  Upload drawings, forms, photos or PDFs
                </span>

                <span className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                  Completed fabrication forms, marked-up blueprints, sketches,
                  screenshots and other supporting documents are welcome.
                </span>

                <span className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  PDF • JPG • PNG • WEBP • WORD • EXCEL
                </span>

                <span className="mt-6 rounded-md bg-[#202d61] px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition group-hover:bg-[#111936]">
                  Choose Files
                </span>

                <input
                  type="file"
                  name="attachments"
                  multiple
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx"
                />
              </label>
            </div>

            <Divider />

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="contactIfQuestions"
                defaultChecked
                className="mt-1 h-4 w-4"
              />

              <span className="text-sm leading-6 text-slate-600">
                Please contact me if any dimensions, materials or instructions
                need clarification before the order is processed.
              </span>
            </label>

            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-yellow-400 px-7 py-5 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Submit Order →
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              The form is currently in design/testing mode. Email delivery will
              be connected before launch.
            </p>
          </form>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            {/* PHOTO */}
            <div className="relative min-h-[260px] overflow-hidden">
              <Image
                src="/images/product-custom-components.jpg"
                alt="Custom sheet metal components fabricated by KAM"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1024]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-400">
                  Real KAM Fabrication
                </p>

                <p className="mt-2 max-w-xs font-bold leading-6">
                  From straightforward trim to specialty fabricated components.
                </p>
              </div>
            </div>

            {/* NO DRAWING */}
            <div className="bg-[#111936] p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Don&apos;t have a formal drawing?
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                That&apos;s okay.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Send us a hand sketch, screenshot, marked-up blueprint or photo.
                As long as we can contact you, our team can help work through
                the remaining details.
              </p>
            </div>

            {/* FORM DOWNLOAD */}
            <div className="border border-slate-200 bg-white p-8">
              <p className="kam-eyebrow">Need the KAM Form?</p>

              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em]">
                Download our fabrication order form.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Print it, draw your parts, scan it and upload the completed form
                here.
              </p>

              <button
                type="button"
                className="mt-6 w-full border border-[#202d61] px-5 py-4 text-xs font-black uppercase tracking-wide text-[#202d61] transition hover:bg-[#202d61] hover:text-white"
              >
                Fabrication Form — Coming Next
              </button>
            </div>

            {/* CONTACT */}
            <div className="border-t-4 border-yellow-400 bg-white p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Questions?
              </p>

              <p className="mt-4 text-2xl font-black">913-441-1208</p>

              <p className="mt-3 text-sm text-slate-500">
                Monday–Friday
                <br />
                6:30 AM–4:30 PM
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM TRUST STRIP */}
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
      <span className="text-sm font-black text-[#111936]">{label}</span>

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