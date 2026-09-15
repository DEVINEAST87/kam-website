import Image from "next/image";
import Link from "next/link";

const materials = [
  "24 ga Steel",
  "22 ga Steel",
  ".032 Aluminum",
  ".040 Aluminum",
];

const faceOptions = [
  "Smooth / Flat",
  "Striations",
  "Beads",
  "Ribs / Pencil Ribs",
  "Clip Relief",
];

export default function SS200Page() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15">
        <div className="kam-container flex h-20 items-center justify-between sm:h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={250}
              height={80}
              priority
              className="h-auto w-[150px] object-contain brightness-0 invert sm:w-[230px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-white lg:flex">
            <Link
              className="transition hover:text-yellow-300"
              href="/#services"
            >
              Products
            </Link>

            <Link
              className="transition hover:text-yellow-300"
              href="/#projects"
            >
              Projects
            </Link>

            <Link
              className="transition hover:text-yellow-300"
              href="/#capabilities"
            >
              Capabilities
            </Link>

            <Link
              className="transition hover:text-yellow-300"
              href="/#locations"
            >
              Locations
            </Link>

            <Link
              className="transition hover:text-yellow-300"
              href="/#contact"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/submit-order"
            className="rounded-md bg-yellow-400 px-4 py-3 text-[10px] font-black uppercase tracking-[0.08em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-300 sm:px-5 sm:text-xs"
          >
            Submit an Order
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111936] pt-20 text-white sm:pt-24">
        <div className="absolute -right-40 top-0 h-full w-1/2 -skew-x-12 bg-[#202d61]/35" />

        <div className="kam-container relative z-10 py-20 sm:py-28">
          <Link
            href="/products/roof-panels"
            className="inline-flex text-xs font-black uppercase tracking-[0.18em] text-yellow-400 transition hover:text-yellow-300"
          >
            ← Roof Panels
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
                Mechanically Seamed Standing Seam
              </p>

              <h1 className="mt-4 text-6xl font-black tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                SS200
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                A 2-inch concealed-clip mechanically seamed standing seam roof
                panel available in multiple widths, materials and panel-face
                configurations.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/request-quote"
                  className="rounded-md bg-yellow-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/submit-order"
                  className="rounded-md border border-white/30 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#111936]"
                >
                  Submit an Order
                </Link>
              </div>
            </div>

            {/* CLEAN PROFILE DRAWING */}
            <div
              className="relative min-h-[280px] overflow-hidden rounded-sm border border-slate-200 bg-white sm:min-h-[340px]"
              style={{
                backgroundColor: "#ffffff",
                colorScheme: "only light",
                forcedColorAdjust: "none",
              }}
            >
              <Image
                src="/images/ss200-profile.png"
                alt="SS200 mechanically seamed standing seam roof panel profile"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-7 sm:p-10"
                style={{
                  colorScheme: "only light",
                  forcedColorAdjust: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SPECS */}
      <section className="border-b border-slate-200 bg-[#f4f6f8]">
        <div className="kam-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-slate-200 py-7 sm:border-r lg:border-b-0 lg:pr-7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Seam Height
              </p>

              <p className="mt-2 text-2xl font-black text-[#111936]">
                2&quot;
              </p>
            </div>

            <div className="border-b border-slate-200 py-7 sm:pl-7 lg:border-b-0 lg:border-r lg:pr-7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Panel Widths
              </p>

              <p className="mt-2 text-2xl font-black text-[#111936]">
                12&quot;, 14&quot;, 16&quot;, 18&quot;
              </p>
            </div>

            <div className="border-b border-slate-200 py-7 sm:border-r lg:border-b-0 lg:px-7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Seam Type
              </p>

              <p className="mt-2 text-2xl font-black text-[#111936]">
                Mechanical
              </p>
            </div>

            <div className="py-7 sm:pl-7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Attachment
              </p>

              <p className="mt-2 text-2xl font-black text-[#111936]">
                Concealed Clip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PROFILE */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">SS200 Profile</p>

            <h2 className="kam-heading">
              A 2-inch mechanically seamed standing seam profile.
            </h2>
          </div>

          <div className="self-end">
            <p className="kam-copy text-base sm:text-lg">
              The SS200 is a mechanically seamed standing seam roof panel with
              a 2-inch seam. Adjacent panels overlap at the seam and are
              mechanically seamed together after installation.
            </p>

            <p className="kam-copy mt-5 text-base sm:text-lg">
              Concealed clips secure the panels to the roof substrate while
              keeping the attachment system hidden beneath the finished roof.
              KAM can produce the SS200 in multiple widths and panel-face
              configurations.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILE DIMENSIONS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-12">
            <div>
              <p className="kam-eyebrow">Profile Dimensions</p>

              <h2 className="kam-heading">
                SS200 panel geometry.
              </h2>
            </div>

            <p className="kam-copy max-w-2xl lg:justify-self-end">
              Reference dimensions for the SS200 mechanically seamed standing
              seam profile. Contact KAM with questions regarding panel sizing,
              material selection or project-specific requirements.
            </p>
          </div>

          <div
            className="relative mt-10 min-h-[300px] overflow-hidden border border-slate-200 bg-white shadow-sm sm:min-h-[420px] lg:min-h-[520px]"
            style={{
              backgroundColor: "#ffffff",
              colorScheme: "only light",
              forcedColorAdjust: "none",
            }}
          >
            <Image
              src="/images/ss200-profile-dimensions.png"
              alt='SS200 standing seam roof panel dimensions showing 2-inch seam height and 12-inch, 14-inch, 16-inch and 18-inch coverage widths'
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-3 sm:p-6 lg:p-8"
              style={{
                colorScheme: "only light",
                forcedColorAdjust: "none",
              }}
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Dimensions shown are for profile reference. Contact Kansas
            Architectural Metals to confirm project-specific panel
            requirements before ordering.
          </p>
        </div>
      </section>

      {/* AVAILABLE WIDTHS */}
      <section className="kam-section">
        <div className="kam-container">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="kam-eyebrow">Available Panel Widths</p>

              <h2 className="kam-heading">
                Four KAM coverage widths.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['12"', '14"', '16"', '18"'].map((width) => (
                <div
                  key={width}
                  className="flex min-h-32 items-center justify-center border border-slate-200 bg-[#f4f6f8] p-5"
                >
                  <span className="text-4xl font-black tracking-[-0.04em] text-[#111936]">
                    {width}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS + FACE OPTIONS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kam-eyebrow">Material Options</p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#111936] sm:text-5xl">
              Available materials.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-px bg-slate-200">
              {materials.map((material) => (
                <div
                  key={material}
                  className="flex min-h-20 items-center bg-white p-5 font-black text-[#202d61]"
                >
                  <span className="mr-3 h-2 w-2 shrink-0 bg-yellow-400" />
                  {material}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="kam-eyebrow">Panel Face Options</p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#111936] sm:text-5xl">
              Configure the panel face.
            </h2>

            <div className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-2">
              {faceOptions.map((option) => (
                <div
                  key={option}
                  className="flex min-h-20 items-center bg-white p-5 font-black text-[#202d61]"
                >
                  <span className="mr-3 h-2 w-2 shrink-0 bg-yellow-400" />
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION OPTIONS */}
      <section className="kam-section bg-[#202d61] text-white">
        <div className="kam-container">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-3">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
                Production Options
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                Rollformed for the way your project needs to be built.
              </h2>
            </div>

            <article className="border border-white/15 bg-[#111936]/45 p-7 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                Shop Rollforming
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Up to 40&apos; for shipping
              </h3>

              <p className="mt-5 leading-7 text-blue-100/70">
                SS200 panels can be produced at our Shawnee facility for
                customer pickup or delivery. When panels are being shipped,
                lengths up to 40 feet are available.
              </p>
            </article>

            <article className="border border-white/15 bg-[#111936]/45 p-7 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                On-Site Rollforming
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Continuous project lengths
              </h3>

              <p className="mt-5 leading-7 text-blue-100/70">
                For longer roof runs, KAM can bring the rollforming equipment
                directly to the project and produce continuous panels at the
                jobsite. Travel and per-diem charges apply.
              </p>
            </article>

            <article className="border border-white/15 bg-[#111936]/45 p-7 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                Your Material
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Customer-supplied coil welcome
              </h3>

              <p className="mt-5 leading-7 text-blue-100/70">
                Already have project coil? KAM can rollform customer-supplied
                material at a reduced fabrication rate. Customer-supplied sheet
                can also be used for matching trim.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MATCHING TRIM */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Complete Roof Package</p>

            <h2 className="kam-heading">
              Panels and matching trim from one fabricator.
            </h2>
          </div>

          <div>
            <p className="kam-copy text-base sm:text-lg">
              KAM can fabricate matching roof trim and architectural sheet
              metal at our Wichita and Shawnee locations, including ridge
              caps, rake and eave trim, flashing, cleats, coping and
              project-specific components.
            </p>

            <Link
              href="/submit-order"
              className="mt-7 inline-flex text-sm font-black uppercase tracking-[0.12em] text-[#202d61]"
            >
              Submit Your Drawings →
            </Link>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <div className="grid gap-10 border-l-4 border-[#202d61] bg-white p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="kam-eyebrow">Colors &amp; Finishes</p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
                Choose the finish for your project.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-500">
                Review available architectural metal colors and finishes from
                PAC-CLAD and Drexel Metals. Contact KAM to confirm material
                availability or request a physical color sample.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.pac-clad.com/specs/color-availability-chart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#111936] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-[#202d61]"
                >
                  View PAC-CLAD Colors →
                </a>

                <a
                  href="https://www.drexmet.com/color-chart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[#202d61] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#202d61] transition hover:bg-[#202d61] hover:text-white"
                >
                  View Drexel Metals Colors →
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Color and material availability may vary. Contact KAM to
                confirm availability or request a physical color sample.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="kam-section">
        <div className="kam-container">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="kam-eyebrow">Questions?</p>

              <h2 className="kam-heading">
                Talk to us about your project.
              </h2>
            </div>

            <div>
              <p className="kam-copy text-base sm:text-lg">
                Panel requirements can vary by project. Contact KAM to discuss
                profile options, materials, lengths, accessories or other
                project-specific requirements.
              </p>

              <a
                href="tel:9134411208"
                className="mt-7 inline-flex text-lg font-black text-[#202d61]"
              >
                913-441-1208
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-yellow-400 py-20 sm:py-24">
        <div className="absolute -right-20 top-0 h-full w-1/3 -skew-x-12 bg-white/20" />

        <div className="kam-container relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#202d61]">
              SS200
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#111936] sm:text-5xl">
              Ready to get your panels rolling?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#202d61]">
              Send us the panel widths, lengths, quantities, material, color
              and face options required for your project.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-md border border-[#111936] px-7 py-5 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:bg-white"
            >
              Request a Quote
            </Link>

            <Link
              href="/submit-order"
              className="rounded-md bg-[#111936] px-7 py-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1"
            >
              Submit an Order →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1024] py-14 text-white sm:py-16">
        <div className="kam-container">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr_.75fr_.75fr] lg:gap-12">
            <div>
              <Link href="/">
                <Image
                  src="/logos/kam-logo-horizontal.png"
                  alt="Kansas Architectural Metals"
                  width={260}
                  height={90}
                  className="h-auto w-[220px] brightness-0 invert sm:w-[240px]"
                />
              </Link>

              <p className="mt-7 max-w-md leading-7 text-slate-400">
                Architectural Metals. Built by Pros.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                Quick Links
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <Link
                  href="/products/roof-panels"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Roof Panels
                </Link>

                <Link
                  href="/submit-order"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Submit an Order
                </Link>

                <Link
                  href="/request-quote"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/request-pricing"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Request Current Pricing
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                Contact
              </p>

              <a
                href="tel:9134411208"
                className="mt-6 block font-bold transition hover:text-yellow-400"
              >
                913-441-1208
              </a>

              <a
                href="mailto:fabricate@kansasarchmetals.com"
                className="mt-3 block break-all text-sm text-slate-400 transition hover:text-white"
              >
                fabricate@kansasarchmetals.com
              </a>

              <p className="mt-3 text-sm text-slate-400">
                Monday–Friday
                <br />
                6:30 AM–4:30 PM
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                Locations
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p>Wichita, Kansas</p>
                <p>Shawnee, Kansas</p>
                <p>Topeka, Kansas</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-xs text-slate-600 sm:mt-14">
            © 2026 Kansas Architectural Metals. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}