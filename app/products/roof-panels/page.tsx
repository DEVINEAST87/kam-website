import Image from "next/image";
import Link from "next/link";

const roofProfiles = [
  {
    name: "SS675",
    dimensionLabel: "Seam Height",
    dimension: '1 5/8"',
    widths: '12", 14", 16", 18"',
    type: "Snap-Lock Standing Seam",
    description:
      "A concealed-clip snap-lock standing seam panel available with multiple panel-face options.",
    href: "/products/roof-panels/ss675",
    image: "/images/ss675-profile.png",
  },
  {
    name: "SS150",
    dimensionLabel: "Seam Height",
    dimension: '1 1/2"',
    widths: '12", 16", 18", 20"',
    type: "Mechanically Seamed",
    description:
      "A concealed-clip standing seam panel with overlapping seams designed for mechanical seaming.",
    href: "/products/roof-panels/ss150",
    image: "/images/ss150-profile.png",
  },
  {
    name: "SS200",
    dimensionLabel: "Seam Height",
    dimension: '2"',
    widths: '12", 14", 16", 18"',
    type: "Mechanically Seamed",
    description:
      "A 2-inch mechanically seamed standing seam panel with concealed clips for commercial roofing applications.",
    href: "/products/roof-panels/ss200",
    image: "/images/ss200-profile.png",
  },
  {
    name: "SS210A",
    dimensionLabel: "Seam Height",
    dimension: '2"',
    widths: '12"–24"',
    type: "Mechanically Seamed",
    description:
      "A 2-inch mechanically seamed roof panel with adjustable coverage from 12 to 24 inches for commercial and architectural roofing applications.",
    href: "/products/roof-panels/ss210a",
    image: "/images/ss210a-profile.png",
  },
];

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

export default function RoofPanelsPage() {
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
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#101733] pt-20 text-white sm:min-h-[680px] sm:pt-24">
        <Image
          src="/images/roof-panels-project.jpg"
          alt="Standing seam metal roof panels fabricated by Kansas Architectural Metals"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#0c1230]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1027]/95 via-[#0b1027]/70 to-[#0b1027]/25" />

        <div className="kam-container relative z-10 py-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.24em] text-yellow-400 sm:text-xs sm:tracking-[0.32em]">
              Products &amp; Services
            </p>

            <h1 className="max-w-[900px] text-[3rem] font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Standing Seam
              <span className="block text-white/95">Roof Panels.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Precision rollformed metal roofing manufactured at our Kansas
              City-area facility or rolled directly at your jobsite for
              continuous panel lengths.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/submit-order"
                className="rounded-md bg-yellow-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Submit an Order
              </Link>

              <Link
                href="/request-quote"
                className="rounded-md border border-white/35 bg-black/10 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-950"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="kam-eyebrow">Roof Panel Rollforming</p>

            <h2 className="kam-heading">
              Shop rolled or produced directly at the jobsite.
            </h2>
          </div>

          <div className="self-end">
            <p className="kam-copy max-w-3xl text-base sm:text-lg">
              KAM manufactures standing seam roof panels at our Shawnee,
              Kansas facility for pickup or delivery. Shipped panels can be
              produced in lengths up to 40 feet. For projects requiring longer
              continuous runs, our mobile rollforming equipment can be brought
              directly to the jobsite and produce panels to the required
              length.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILE CARDS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">Available Profiles</p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="kam-heading max-w-3xl">
              Choose the profile that fits your project.
            </h2>

            <p className="kam-copy max-w-lg">
              Multiple panel widths, materials and profile options are
              available across our architectural roof panel lineup.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
            {roofProfiles.map((profile) => (
              <article
                key={profile.name}
                className="flex flex-col border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#202d61]">
                  {profile.type}
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#111936]">
                  {profile.name}
                </h3>

                {/* PANEL PROFILE IMAGE */}
                <div
                  className="relative mt-6 h-36 w-full overflow-hidden border-y border-slate-100 sm:h-40"
                  style={{
                    backgroundColor: "#ffffff",
                    colorScheme: "only light",
                    forcedColorAdjust: "none",
                  }}
                >
                  <Image
                    src={profile.image}
                    alt={`${profile.name} architectural roof panel profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-contain px-2 py-5"
                    style={{
                      colorScheme: "only light",
                      forcedColorAdjust: "none",
                    }}
                  />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-px bg-slate-200">
                  <div className="bg-[#f8f9fa] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                      {profile.dimensionLabel}
                    </p>

                    <p className="mt-2 font-black text-[#111936]">
                      {profile.dimension}
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                      Panel Widths
                    </p>

                    <p className="mt-2 font-black text-[#111936]">
                      {profile.widths}
                    </p>
                  </div>
                </div>

                <p className="mt-6 flex-1 leading-7 text-slate-500">
                  {profile.description}
                </p>

                <Link
                  href={profile.href}
                  className="mt-8 text-xs font-black uppercase tracking-[0.12em] text-[#202d61]"
                >
                  View {profile.name} Profile →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS + FACE OPTIONS */}
      <section className="kam-section">
        <div className="kam-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kam-eyebrow">Material Options</p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#111936] sm:text-5xl">
              Built around your specifications.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-px bg-slate-200">
              {materials.map((material) => (
                <div
                  key={material}
                  className="flex min-h-20 items-center bg-[#f4f6f8] p-5 font-black text-[#202d61]"
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
              More than one way to finish the panel.
            </h2>

            <div className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-2">
              {faceOptions.map((option) => (
                <div
                  key={option}
                  className="flex min-h-20 items-center bg-[#f4f6f8] p-5 font-black text-[#202d61]"
                >
                  <span className="mr-3 h-2 w-2 shrink-0 bg-yellow-400" />
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER-SUPPLIED METAL */}
      <section className="kam-section bg-[#202d61] text-white">
        <div className="kam-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
              Customer-Supplied Material
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Already have the metal? We&apos;ll roll it.
            </h2>
          </div>

          <div className="self-end">
            <p className="max-w-3xl text-base leading-8 text-blue-100/75 sm:text-lg">
              KAM can rollform customer-supplied coil at a reduced fabrication
              rate. Customer-supplied sheet material can also be used for
              matching trims and accessories, giving contractors another way
              to use the materials already purchased for their project.
            </p>

            <Link
              href="/request-quote"
              className="mt-8 inline-flex rounded-md bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Request Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ON-SITE ROLLFORMING */}
      <section className="kam-section">
        <div className="kam-container">
          <div className="overflow-hidden bg-[#111936] text-white">
            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
                  On-Site Rollforming
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                  Need panels longer than 40 feet?
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                  We can bring the rollforming equipment to your project. KAM
                  offers on-site panel production for continuous roof runs that
                  are not practical to manufacture and ship from our facility.
                  Panels can be rolled to the lengths required for the project.
                </p>

                <p className="mt-5 text-sm font-bold text-white/70">
                  Travel and per-diem charges apply based on project location.
                </p>

                <Link
                  href="/request-quote"
                  className="mt-8 inline-flex rounded-md bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Discuss Your Project →
                </Link>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <Image
                  src="/images/roof-panels-project.jpg"
                  alt="Standing seam metal roofing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 to-transparent lg:from-[#111936]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE ROOF PACKAGE */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Matching Trim &amp; Accessories</p>

            <h2 className="kam-heading">Complete the roof package.</h2>
          </div>

          <div>
            <p className="kam-copy text-base sm:text-lg">
              Roof panels are only part of the job. KAM can also fabricate
              matching architectural sheet metal at our Wichita and Shawnee
              locations, including ridge caps, rake and eave trim, flashing,
              cleats, coping and other project-specific components.
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
      <section className="kam-section">
        <div className="kam-container">
          <div className="grid gap-10 border-l-4 border-[#202d61] bg-[#f8f9fa] p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="kam-eyebrow">Available Colors &amp; Finishes</p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
                Find the finish for your project.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-500">
                KAM works with architectural metal from leading manufacturers.
                Review available colors and finishes below, then contact us to
                confirm material availability or request a physical color
                sample.
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-yellow-400 py-20 sm:py-24">
        <div className="absolute -right-20 top-0 h-full w-1/3 -skew-x-12 bg-white/20" />

        <div className="kam-container relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#202d61]">
              Ready to get started?
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#111936] sm:text-5xl">
              Send us your panel requirements.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#202d61]">
              Include the panel profile, width, lengths, quantities, material,
              color and any face or profile options required for the project.
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

                <Link
                  href="/#services"
                  className="block text-slate-400 transition hover:text-white"
                >
                  Products &amp; Services
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