import Image from "next/image";
import Link from "next/link";

const wallProfiles = [
  {
    name: "FWQ100",
    depth: '1"',
    widths: '11"–20"',
    type: "Flush Wall / Soffit Panel",
    description:
      "A concealed-fastener flush panel with adjustable coverage for clean wall and soffit applications.",
    href: "/products/wall-soffit-panels/fwq100",
    image: "/images/fwq100-profile.png",
  },
  {
    name: "FWQ150",
    depth: '1 1/2"',
    widths: '12"–16"',
    type: "Flush Wall / Soffit Panel",
    description:
      "A deeper concealed-fastener flush panel designed for architectural wall and soffit applications.",
    href: "/products/wall-soffit-panels/fwq150",
    image: "/images/fwq150-profile.png",
  },
  {
    name: "BB7-750P",
    depth: '3/4"',
    widths: '10", 12 1/4"',
    type: "Board & Batten Panel",
    description:
      "A concealed-fastener board and batten profile featuring a pronounced 2-inch raised batten.",
    href: "/products/wall-soffit-panels/bb7-750p",
    image: "/images/bb7-750p-profile.png",
  },
  {
    name: "WAV-8-1F",
    depth: '7/8"',
    widths: '8"',
    type: "Wave Panel",
    description:
      "A compact single-rib wave profile for walls, soffits and architectural accents.",
    href: "/products/wall-soffit-panels/wav-8-1f",
    image: "/images/wav-8-1f-profile.png",
  },
  {
    name: "WAV-12-1F",
    depth: '7/8"',
    widths: '12"',
    type: "Wave Panel",
    description:
      "A 12-inch single-rib wave profile offering a broad architectural face for wall and soffit applications.",
    href: "/products/wall-soffit-panels/wav-12-1f",
    image: "/images/wav-12-1f-profile.png",
  },
  {
    name: "WAV-12-4F",
    depth: '7/8"',
    widths: '12"',
    type: "Wave Panel",
    description:
      "A 12-inch multi-rib wave panel for architectural wall, soffit and accent applications.",
    href: "/products/wall-soffit-panels/wav-12-4f",
    image: "/images/wav-12-4f-profile.png",
  },
  {
    name: "WAV-16-4F",
    depth: '7/8"',
    widths: '16"',
    type: "Wave Panel",
    description:
      "A 16-inch four-rib wave profile with a pronounced architectural pattern for wall and soffit applications.",
    href: "/products/wall-soffit-panels/wav-16-4f",
    image: "/images/wav-16-4f-profile.png",
  },
];

const materials = [
  "24 ga Steel",
  "22 ga Steel",
  ".032 Aluminum",
  ".040 Aluminum",
];

const applications = [
  "Exterior Wall Systems",
  "Soffits",
  "Canopies",
  "Equipment Screens",
  "Accent Walls",
  "Commercial Facades",
];

export default function WallSoffitPanelsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111936]">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="kam-container flex min-h-20 items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={250}
              height={80}
              className="h-auto w-[190px] sm:w-[220px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.12em] text-[#111936] lg:flex">
            <Link href="/#services" className="transition hover:text-[#d5a928]">
              Products
            </Link>

            <Link href="/#projects" className="transition hover:text-[#d5a928]">
              Projects
            </Link>

            <Link href="/#locations" className="transition hover:text-[#d5a928]">
              Locations
            </Link>

            <Link href="/#about" className="transition hover:text-[#d5a928]">
              About
            </Link>
          </nav>

          <Link
            href="/request-quote"
            className="bg-[#f2c230] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#111936] transition hover:bg-[#e3b323]"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111936]">
        <div className="absolute inset-0">
          <Image
            src="/images/project-commercial-facade.jpg"
            alt="Architectural wall panel project"
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover opacity-35"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#111936] via-[#111936]/90 to-[#111936]/45" />
        </div>

        <div className="kam-container relative py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="kam-eyebrow text-[#f2c230]">WALL & SOFFIT PANELS</p>

            <h1 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Architectural profiles built for walls, soffits and everything
              between.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              KAM fabricates wall and soffit panel systems in a range of flush,
              wave and board-and-batten profiles for commercial and
              architectural applications.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/request-quote"
                className="bg-[#f2c230] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#111936] transition hover:bg-[#e3b323]"
              >
                Request a Quote →
              </Link>

              <Link
                href="/submit-order"
                className="border border-white/40 bg-white/10 px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#111936]"
              >
                Submit an Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="kam-section bg-white">
        <div className="kam-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="kam-eyebrow">ARCHITECTURAL PANEL SYSTEMS</p>

            <h2 className="kam-heading mt-4">
              Multiple profiles. One fabrication partner.
            </h2>
          </div>

          <div>
            <p className="kam-copy">
              From clean flush panels and soffits to wave profiles and
              board-and-batten systems, Kansas Architectural Metals provides
              panel fabrication for projects of all sizes.
            </p>

            <p className="kam-copy mt-5">
              Our panel lineup gives contractors, installers, architects and
              building owners multiple architectural options while keeping
              fabrication, matching trim and project coordination under one
              roof.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section className="kam-section border-y border-slate-200 bg-slate-50">
        <div className="kam-container">
          <div className="max-w-3xl">
            <p className="kam-eyebrow">AVAILABLE PROFILES</p>

            <h2 className="kam-heading mt-4">
              Wall & soffit panel profiles.
            </h2>

            <p className="kam-copy mt-5">
              Select a profile below for available widths, dimensions,
              materials and fabrication details.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wallProfiles.map((profile) => (
              <Link
                key={profile.name}
                href={profile.href}
                className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-6 pb-0 sm:p-7 sm:pb-0">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d5a928]">
                        {profile.type}
                      </p>

                      <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#111936]">
                        {profile.name}
                      </h3>
                    </div>

                    <span className="shrink-0 bg-[#111936] px-3 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-white">
                      {profile.depth} Deep
                    </span>
                  </div>
                </div>

                <div
                  className="relative mt-6 h-36 w-full overflow-hidden border-y border-slate-100 bg-white sm:h-40"
                  style={{
                    backgroundColor: "#ffffff",
                    colorScheme: "only light",
                    forcedColorAdjust: "none",
                  }}
                >
                  <Image
                    src={profile.image}
                    alt={`${profile.name} wall and soffit panel profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain px-3 py-5"
                    style={{
                      colorScheme: "only light",
                      forcedColorAdjust: "none",
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                        Coverage
                      </p>

                      <p className="mt-1 font-black text-[#111936]">
                        {profile.widths}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                        Profile
                      </p>

                      <p className="mt-1 font-black text-[#111936]">
                        {profile.depth}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 flex-1 leading-7 text-slate-500">
                    {profile.description}
                  </p>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.12em] text-[#202d61] transition group-hover:text-[#111936]">
                    View Profile →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS + APPLICATIONS */}
      <section className="kam-section bg-white">
        <div className="kam-container grid gap-8 lg:grid-cols-2">
          <div className="border border-slate-200 bg-white p-7 sm:p-9">
            <p className="kam-eyebrow">MATERIAL OPTIONS</p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#111936]">
              Built from the material your project requires.
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Wall and soffit profiles can be fabricated in multiple steel and
              aluminum options depending on the selected profile and project
              requirements.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {materials.map((material) => (
                <div
                  key={material}
                  className="border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black text-[#111936]"
                >
                  {material}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111936] p-7 text-white sm:p-9">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f2c230]">
              COMMON APPLICATIONS
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
              One panel family. A lot of possibilities.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              These profiles can be used throughout commercial and
              architectural projects to create clean, durable metal surfaces
              and distinctive facade details.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {applications.map((application) => (
                <div
                  key={application}
                  className="border border-white/15 bg-white/5 px-4 py-4 text-sm font-bold"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER MATERIAL */}
      <section className="kam-section border-y border-slate-200 bg-slate-50">
        <div className="kam-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="kam-eyebrow">CUSTOMER-SUPPLIED MATERIAL</p>

            <h2 className="kam-heading mt-4">
              Already have the material? We can fabricate it.
            </h2>

            <p className="kam-copy mt-5">
              KAM can fabricate compatible customer-supplied coil or sheet
              material at a reduced fabrication rate. This can be especially
              useful when material has already been purchased for a project or
              when matching existing project material.
            </p>

            <p className="kam-copy mt-5">
              Contact KAM before delivering material so we can confirm profile,
              material and machine compatibility.
            </p>

            <Link
              href="/request-quote"
              className="mt-7 inline-flex text-xs font-black uppercase tracking-[0.12em] text-[#202d61] transition hover:text-[#111936]"
            >
              Discuss Your Project →
            </Link>
          </div>

          <div className="border-l-4 border-[#f2c230] bg-white p-7 shadow-sm sm:p-9">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d5a928]">
              FABRICATION FLEXIBILITY
            </p>

            <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#111936]">
              Small quantities to commercial production runs.
            </h3>

            <p className="mt-5 leading-7 text-slate-500">
              Whether you need replacement panels, a small architectural
              feature or material for a larger commercial project, KAM can
              coordinate fabrication around the requirements of the job.
            </p>
          </div>
        </div>
      </section>

      {/* MATCHING TRIM */}
      <section className="kam-section bg-white">
        <div className="kam-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden bg-slate-100 sm:min-h-[440px]">
            <Image
              src="/images/product-trim-profiles.jpg"
              alt="Architectural sheet metal trim profiles"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="kam-eyebrow">MATCHING TRIM & ACCESSORIES</p>

            <h2 className="kam-heading mt-4">
              Panels are only part of the package.
            </h2>

            <p className="kam-copy mt-5">
              KAM can fabricate matching trim and accessories alongside your
              wall and soffit panels, helping keep material, color and project
              coordination together.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Inside & Outside Corners",
                "Base & Head Trim",
                "Jamb & Opening Trim",
                "Coping & Fascia",
                "Cleats & Flashing",
                "Custom Project Trim",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black text-[#111936]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Matching trim can be fabricated through KAM&apos;s Wichita or
              Shawnee facilities depending on project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="kam-section bg-[#111936] text-white">
        <div className="kam-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f2c230]">
              COLORS & FINISHES
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Find the right finish for the project.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              KAM works with architectural metal from leading manufacturers,
              including PAC-CLAD and Drexel Metals. Color and material
              availability may vary by profile and project.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              Contact KAM to confirm current availability or request a physical
              color sample before final material selection.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href="https://www.pac-clad.com/specs/color-availability-chart/"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 bg-white/5 px-6 py-5 text-sm font-black uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#111936]"
            >
              View PAC-CLAD Colors →
            </a>

            <a
              href="https://www.drexmet.com/color-chart/"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 bg-white/5 px-6 py-5 text-sm font-black uppercase tracking-[0.1em] transition hover:bg-white hover:text-[#111936]"
            >
              View Drexel Metals Colors →
            </a>
          </div>
        </div>
      </section>

      {/* ORDER INFO */}
      <section className="kam-section bg-slate-50">
        <div className="kam-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="kam-eyebrow">READY TO ORDER?</p>

            <h2 className="kam-heading mt-4">
              Give us the project details. We&apos;ll help with the metal.
            </h2>

            <p className="kam-copy mx-auto mt-5 max-w-3xl">
              When requesting pricing or submitting an order, include the panel
              profile, coverage width, lengths and quantities, material and
              color, along with any matching trim or project-specific
              requirements.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/submit-order"
                className="bg-[#111936] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#202d61]"
              >
                Submit an Order →
              </Link>

              <Link
                href="/request-quote"
                className="bg-[#f2c230] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#111936] transition hover:bg-[#e3b323]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0b1025] text-white">
        <div className="kam-container grid gap-10 py-12 md:grid-cols-3">
          <div>
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={230}
              height={80}
              className="h-auto w-[190px] brightness-0 invert"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Architectural sheet metal fabrication serving contractors and
              projects throughout Kansas and beyond.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#f2c230]">
              Locations
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>Wichita, Kansas</p>
              <p>Shawnee, Kansas</p>
              <p>Topeka, Kansas</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#f2c230]">
              Quick Links
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/submit-order" className="hover:text-white">
                Submit an Order
              </Link>

              <Link href="/request-quote" className="hover:text-white">
                Request a Quote
              </Link>

              <Link href="/request-pricing" className="hover:text-white">
                Request Current Pricing
              </Link>

              <Link href="/" className="hover:text-white">
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="kam-container py-5 text-xs text-slate-500">
            © Kansas Architectural Metals LLC
          </div>
        </div>
      </footer>
    </main>
  );
}