import Image from "next/image";
import Link from "next/link";

const materials = [
  "24 ga Steel",
  "22 ga Steel",
  ".032 Aluminum",
  ".040 Aluminum",
];

const applications = [
  "Exterior Walls",
  "Soffits",
  "Canopies",
  "Commercial Facades",
  "Equipment Screens",
  "Architectural Accents",
];

export default function FWQ100Page() {
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
            <Link
              href="/#services"
              className="transition hover:text-[#d5a928]"
            >
              Products
            </Link>

            <Link
              href="/#projects"
              className="transition hover:text-[#d5a928]"
            >
              Projects
            </Link>

            <Link
              href="/#locations"
              className="transition hover:text-[#d5a928]"
            >
              Locations
            </Link>

            <Link
              href="/#about"
              className="transition hover:text-[#d5a928]"
            >
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
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="kam-container grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <Link
              href="/products/wall-soffit-panels"
              className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d5a928] transition hover:text-[#111936]"
            >
              ← Wall & Soffit Panels
            </Link>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.16em] text-[#202d61]">
              Flush Wall / Soffit Panel
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] text-[#111936] sm:text-6xl lg:text-7xl">
              FWQ100
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              A concealed-fastener flush panel with adjustable coverage for
              architectural wall, soffit and accent applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/request-quote"
                className="bg-[#f2c230] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#111936] transition hover:bg-[#e3b323]"
              >
                Request a Quote →
              </Link>

              <Link
                href="/submit-order"
                className="bg-[#111936] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#202d61]"
              >
                Submit an Order
              </Link>
            </div>
          </div>

          <div
            className="relative min-h-[300px] overflow-hidden border border-slate-200 bg-white shadow-sm sm:min-h-[380px]"
            style={{
              backgroundColor: "#ffffff",
              colorScheme: "only light",
              forcedColorAdjust: "none",
            }}
          >
            <Image
              src="/images/fwq100-profile.png"
              alt="FWQ100 wall and soffit panel profile"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain p-6 sm:p-10"
              priority
              style={{
                colorScheme: "only light",
                forcedColorAdjust: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* QUICK SPECS */}
      <section className="bg-[#111936] text-white">
        <div className="kam-container grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
          {[
            ["Profile Depth", '1"'],
            ["Coverage", '11"–20"'],
            ["Attachment", "Concealed"],
            ["Application", "Wall / Soffit"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#111936] px-5 py-7 sm:px-7">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#f2c230]">
                {label}
              </p>

              <p className="mt-2 text-lg font-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="kam-section bg-white">
        <div className="kam-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kam-eyebrow">ABOUT THE PROFILE</p>

            <h2 className="kam-heading mt-4">
              Clean lines with flexible coverage.
            </h2>
          </div>

          <div>
            <p className="kam-copy">
              FWQ100 is a concealed-fastener architectural panel designed for
              wall and soffit applications where a clean, uninterrupted face
              is desired.
            </p>

            <p className="kam-copy mt-5">
              With coverage options ranging from 11 to 20 inches, the profile
              gives contractors and designers flexibility when coordinating
              panel layout, joint spacing and architectural proportions.
            </p>

            <p className="kam-copy mt-5">
              KAM can fabricate FWQ100 panels alongside matching trim and
              accessories to help keep the complete metal package coordinated.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILE DIMENSIONS */}
      <section className="kam-section border-y border-slate-200 bg-slate-50">
        <div className="kam-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="kam-eyebrow">PROFILE DIMENSIONS</p>

            <h2 className="kam-heading mt-4">
              FWQ100 panel geometry.
            </h2>

            <p className="kam-copy mt-5">
              Reference dimensions for KAM&apos;s FWQ100 wall and soffit panel
              profile.
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
              src="/images/fwq100-profile-dimensions.png"
              alt="FWQ100 wall and soffit panel profile dimensions"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-3 sm:p-6 lg:p-8"
              style={{
                colorScheme: "only light",
                forcedColorAdjust: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="kam-section bg-white">
        <div className="kam-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="kam-eyebrow">AVAILABLE COVERAGE</p>

            <h2 className="kam-heading mt-4">
              Adjustable from 11 to 20 inches.
            </h2>

            <p className="kam-copy mt-5">
              FWQ100 can be fabricated in coverage widths from 11 through 20
              inches, allowing the panel layout to be coordinated around the
              requirements and appearance of the project.
            </p>
          </div>

          <div className="border-l-4 border-[#f2c230] bg-slate-50 p-7 sm:p-9">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d5a928]">
              COVERAGE RANGE
            </p>

            <p className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#111936]">
              11&quot;–20&quot;
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Contact KAM when selecting panel width so fabrication can be
              coordinated with your project layout and material requirements.
            </p>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="kam-section bg-[#111936] text-white">
        <div className="kam-container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f2c230]">
              MATERIAL OPTIONS
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Fabricated for the material your project requires.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              FWQ100 is available in KAM&apos;s standard architectural steel
              and aluminum material options.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {materials.map((material) => (
                <div
                  key={material}
                  className="border border-white/15 bg-white/5 px-4 py-4 text-sm font-black"
                >
                  {material}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f2c230]">
              COMMON APPLICATIONS
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Built for architectural versatility.
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {applications.map((application) => (
                <div
                  key={application}
                  className="border border-white/15 bg-white/5 px-4 py-4 text-sm font-black"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUPPLIED MATERIAL */}
      <section className="kam-section bg-slate-50">
        <div className="kam-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="kam-eyebrow">CUSTOMER-SUPPLIED MATERIAL</p>

            <h2 className="kam-heading mt-4">
              Have the material already? Bring it to us.
            </h2>

            <p className="kam-copy mt-5">
              KAM can fabricate compatible customer-supplied coil at a reduced
              fabrication rate. This is useful when project material has
              already been purchased or when matching material being used
              elsewhere on the building.
            </p>

            <p className="kam-copy mt-5">
              Contact KAM before delivering material so we can confirm machine,
              profile and material compatibility.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d5a928]">
              NEED MATCHING TRIM?
            </p>

            <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#111936]">
              Keep the complete metal package together.
            </h3>

            <p className="mt-5 leading-7 text-slate-500">
              KAM can fabricate matching corners, base and head trim, jamb
              trim, flashing, coping, fascia, cleats and custom project
              details alongside your panels.
            </p>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="kam-section bg-white">
        <div className="kam-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="kam-eyebrow">COLORS & FINISHES</p>

            <h2 className="kam-heading mt-4">
              Architectural finishes from trusted manufacturers.
            </h2>

            <p className="kam-copy mt-5">
              KAM works with architectural metal from leading manufacturers,
              including PAC-CLAD and Drexel Metals.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Color and material availability may vary. Contact KAM to confirm
              availability or request a physical color sample.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href="https://www.pac-clad.com/specs/color-availability-chart/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#111936] px-6 py-5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#202d61]"
            >
              View PAC-CLAD Colors →
            </a>

            <a
              href="https://www.drexmet.com/color-chart/"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 px-6 py-5 text-sm font-black uppercase tracking-[0.1em] text-[#111936] transition hover:bg-slate-100"
            >
              View Drexel Metals Colors →
            </a>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="kam-container grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d5a928]">
              QUESTIONS ABOUT FWQ100?
            </p>

            <p className="mt-2 text-xl font-black tracking-[-0.02em] text-[#111936]">
              Talk with KAM about profile, material, width or project
              requirements.
            </p>
          </div>

          <Link
            href="/request-quote"
            className="bg-[#111936] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#202d61]"
          >
            Contact KAM →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f2c230]">
        <div className="kam-container py-14 text-center sm:py-16">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#111936]/60">
            FWQ100 WALL & SOFFIT PANEL
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
            Ready to put FWQ100 on your project?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-quote"
              className="bg-[#111936] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#202d61]"
            >
              Request a Quote →
            </Link>

            <Link
              href="/submit-order"
              className="border border-[#111936] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#111936] transition hover:bg-[#111936] hover:text-white"
            >
              Submit an Order
            </Link>
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
              <Link
                href="/products/wall-soffit-panels"
                className="hover:text-white"
              >
                Wall & Soffit Panels
              </Link>

              <Link href="/submit-order" className="hover:text-white">
                Submit an Order
              </Link>

              <Link href="/request-quote" className="hover:text-white">
                Request a Quote
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