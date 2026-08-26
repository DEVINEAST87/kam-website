import Image from "next/image";
import Link from "next/link";

export default function RequestQuotePage() {
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

      {/* SPLIT HERO */}
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
              alt="Commercial architectural metal project by Kansas Architectural Metals"
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

      {/* PROCESS STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid md:grid-cols-3">
          {[
            ["01", "Tell Us About It", "Share your project and available information."],
            ["02", "We Review It", "Our team looks through your scope and files."],
            ["03", "We Follow Up", "We contact you with questions and current pricing."],
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
                <Field label="Company Name" name="company" />
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

            {/* PRODUCTS */}
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

            {/* FILE UPLOAD */}
            <div>
              <p className="kam-eyebrow">Plans, Drawings & Photos</p>

              <label className="group mt-7 flex min-h-56 cursor-pointer flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-[#f8f9fa] p-8 text-center transition hover:border-yellow-400 hover:bg-yellow-50/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#202d61] text-2xl font-black text-white transition group-hover:bg-yellow-400 group-hover:text-[#111936]">
                  ↑
                </div>

                <span className="mt-5 text-lg font-black text-[#111936]">
                  Upload whatever you have
                </span>

                <span className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                  Plans, marked-up PDFs, screenshots, sketches, photos and
                  existing takeoff information can all help us understand your
                  project.
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

            <button
              type="submit"
              className="mt-10 w-full rounded-md bg-yellow-400 px-7 py-5 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Request My Quote →
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              The form is currently in design/testing mode. Email delivery will
              be connected before launch.
            </p>
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

              <p className="mt-4 text-2xl font-black">913-441-1208</p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
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