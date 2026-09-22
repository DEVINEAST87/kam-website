import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Sheet Metal",
  description:
    "Custom architectural sheet metal fabrication from Kansas Architectural Metals, including flashings, coping, fascia, trim, cleats and project-specific formed metal.",
  alternates: {
    canonical:
      "https://www.kansasarchmetals.com/products/architectural-sheet-metal",
  },
  openGraph: {
    title: "Architectural Sheet Metal | Kansas Architectural Metals",
    description:
      "Custom formed architectural sheet metal built to your dimensions for commercial and residential projects.",
    url: "https://www.kansasarchmetals.com/products/architectural-sheet-metal",
    type: "website",
  },
};

const fabricatedProducts = [
  {
    title: "Flashings & Trim",
    description:
      "Custom-formed roof, wall, edge and transition flashings fabricated to project dimensions.",
  },
  {
    title: "Coping & Fascia",
    description:
      "Parapet coping, fascia and related edge-metal components formed for project-specific conditions.",
  },
  {
    title: "Cleats & Closures",
    description:
      "Continuous cleats, closures and supporting formed-metal components for architectural assemblies.",
  },
  {
    title: "Roof & Wall Trim",
    description:
      "Ridge, rake, eave, corner, base and other trim profiles to complement architectural panel systems.",
  },
  {
    title: "Custom Profiles",
    description:
      "Specialty shapes fabricated from drawings, sketches, dimensions or project details.",
  },
  {
    title: "Project-Specific Fabrication",
    description:
      "Unique formed components for conditions that do not fit a standard catalog item.",
  },
];

const materials = [
  "Pre-Finished Steel",
  "Galvanized Steel",
  "Aluminum",
  "Stainless Steel",
  "Customer-Supplied Material",
];

const applications = [
  "Commercial Construction",
  "Residential Construction",
  "Roofing Systems",
  "Wall & Soffit Systems",
  "Parapets & Roof Edges",
  "Architectural Details",
  "Repairs & Replacement Pieces",
  "Custom Project Conditions",
];

export default function ArchitecturalSheetMetalPage() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-[#111936]">
        <div className="kam-container flex min-h-20 items-center justify-between gap-5 py-4 sm:min-h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={250}
              height={80}
              priority
              className="h-auto w-[155px] object-contain brightness-0 invert sm:w-[230px]"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/request-quote"
              className="hidden border border-white/25 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#111936] sm:inline-flex"
            >
              Request a Quote
            </Link>

            <Link
              href="/submit-order"
              className="bg-yellow-400 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-[#111936] transition hover:bg-yellow-300"
            >
              Submit an Order
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#111936] text-white">
        <Image
          src="/images/architectural-sheet-metal.jpg"
          alt="Custom architectural sheet metal profiles fabricated by Kansas Architectural Metals"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Blue / navy treatment */}
        <div className="absolute inset-0 bg-[#101b46]/65" />

        {/* Darker left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1027]/95 via-[#111936]/75 to-[#202d61]/30" />

        <div className="kam-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Link
              href="/#services"
              className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300"
            >
              Products & Services
            </Link>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-slate-300">
              Architectural Sheet Metal
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Custom formed.
              <span className="block text-yellow-400">
                Built to your dimensions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              From everyday flashings and trim to complex project-specific
              profiles, Kansas Architectural Metals fabricates the formed metal
              contractors need to keep their projects moving.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/submit-order"
                className="bg-yellow-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Submit an Order
              </Link>

              <Link
                href="/request-quote"
                className="border border-white/35 bg-black/10 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111936]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Made to Order</p>

            <h2 className="kam-heading">
              If it can be formed, there&apos;s a good chance we can make it.
            </h2>
          </div>

          <div className="self-end">
            <p className="kam-copy text-base sm:text-lg">
              Architectural sheet metal rarely comes down to one standard
              profile. Dimensions, conditions and details change from project
              to project. KAM fabricates formed metal from customer drawings,
              project details, sketches and dimensions, giving contractors a
              straightforward source for both everyday trim and specialty
              pieces.
            </p>

            <p className="kam-copy mt-5 text-base sm:text-lg">
              Whether you need a handful of replacement pieces or fabricated
              material for a larger project, our team can help turn your
              dimensions into finished components ready for the field.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">What We Fabricate</p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="kam-heading max-w-3xl">
              Standard details, custom profiles and everything in between.
            </h2>

            <p className="max-w-md leading-7 text-slate-500">
              Don&apos;t see the piece you need? Send us the detail. This list
              represents common fabrication—not the limit of what we can make.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {fabricatedProducts.map((product) => (
              <article key={product.title} className="bg-white p-7 sm:p-8">
                <div className="h-1 w-12 bg-yellow-400" />

                <h3 className="mt-6 text-xl font-black tracking-[-0.025em] text-[#111936]">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICATION PHOTO / PROCESS */}
      <section className="kam-section">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="grid gap-4">
            {/* SHOP FABRICATION */}
            <div className="relative min-h-[520px] overflow-hidden bg-[#111936] sm:min-h-[620px]">
              <Image
                src="/images/architectural-sheet-metal-fabrication.jpg"
                alt="Architectural sheet metal being formed in the Kansas Architectural Metals fabrication shop"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              <div className="absolute bottom-0 left-0 bg-[#111936] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white">
                Formed in Our Shop
              </div>
            </div>

            {/* FINISHED FABRICATION */}
            <div className="flex items-center justify-center overflow-hidden bg-[#111936] p-3 sm:p-5">
              <Image
                src="/images/architectural-sheet-metal.jpg"
                alt="Finished custom formed architectural sheet metal profiles"
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="kam-eyebrow">Your Detail. Our Fabrication.</p>

            <h2 className="kam-heading">
              Built around the way contractors actually order metal.
            </h2>

            <p className="kam-copy mt-6">
              Send us a drawing, sketch, project detail or the dimensions of the
              profile you need. Our fabrication team can use that information
              to produce the pieces for your project without forcing you into a
              limited list of stock shapes.
            </p>

            <p className="kam-copy mt-5">
              From straightforward trim to project-specific profiles, the work
              is formed in our fabrication shops and built around the
              requirements of the job.
            </p>

            <div className="mt-8 border-l-4 border-yellow-400 bg-[#f4f6f8] p-6">
              <p className="font-black text-[#111936]">
                Need help defining the profile?
              </p>

              <p className="mt-2 leading-7 text-slate-500">
                Send us what you have. We can review the information provided
                and help determine what is needed to fabricate the order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="kam-section bg-[#202d61] text-white">
        <div className="kam-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
              Materials
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
              Fabricated in the material your project calls for.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-blue-100/70">
              Material, gauge, finish and availability vary by project. Contact
              KAM to confirm the best option for your application.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/15 sm:grid-cols-2">
            {materials.map((material) => (
              <div
                key={material}
                className="flex min-h-24 items-center bg-[#202d61] p-6 font-bold"
              >
                <span className="mr-4 h-2 w-2 shrink-0 bg-yellow-400" />
                {material}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER SUPPLIED MATERIAL */}
      <section className="kam-section">
        <div className="kam-container">
          <div className="grid overflow-hidden border border-slate-200 lg:grid-cols-[.8fr_1.2fr]">
            <div className="bg-yellow-400 p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#202d61]">
                Already Have the Material?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
                Customer-supplied material is welcome.
              </h2>
            </div>

            <div className="bg-[#f4f6f8] p-8 sm:p-10 lg:p-12">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                If you already have the sheets or material for your project,
                KAM can fabricate from customer-supplied material at a reduced
                fabrication rate. This can be especially useful when matching
                existing project material, working with specialty finishes or
                coordinating material purchased elsewhere.
              </p>

              <p className="mt-5 text-sm font-bold leading-7 text-[#202d61]">
                Contact us before delivering material so we can confirm the
                material and fabrication requirements for your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Applications</p>

            <h2 className="kam-heading">
              Fabrication for projects large and small.
            </h2>

            <p className="kam-copy mt-6">
              KAM works with contractors across a wide range of architectural
              metal applications, from individual replacement pieces to
              complete project packages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {applications.map((application) => (
              <div
                key={application}
                className="flex min-h-20 items-center bg-white p-5 font-bold text-[#202d61]"
              >
                <span className="mr-4 h-2 w-2 shrink-0 bg-yellow-400" />
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="kam-section">
        <div className="kam-container">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="kam-eyebrow">Ordering</p>

              <h2 className="kam-heading">
                Give us the information. We&apos;ll handle the metal.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Profile / Detail",
                  "Drawing, sketch or dimensions of the piece.",
                ],
                [
                  "02",
                  "Material",
                  "Material type, gauge and color or finish.",
                ],
                [
                  "03",
                  "Lengths & Quantities",
                  "Required lengths and number of each piece.",
                ],
                [
                  "04",
                  "Project Information",
                  "Job name and any scheduling or pickup requirements.",
                ],
              ].map(([number, title, copy]) => (
                <div
                  key={number}
                  className="border border-slate-200 bg-white p-6 sm:p-7"
                >
                  <p className="text-xs font-black tracking-[0.18em] text-yellow-500">
                    {number}
                  </p>

                  <h3 className="mt-4 text-lg font-black text-[#111936]">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="border-y border-slate-200 bg-[#f4f6f8] py-14 sm:py-16">
        <div className="kam-container flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <p className="kam-eyebrow">Not Sure What to Send?</p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
              Talk to our fabrication team.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-500">
              If you have a project detail but aren&apos;t sure what information
              we need, contact KAM and we&apos;ll help you determine the next
              step.
            </p>
          </div>

          <a
            href="tel:9134411208"
            className="shrink-0 border border-[#202d61] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#202d61] transition hover:bg-[#202d61] hover:text-white"
          >
            Call 913-441-1208
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-yellow-400 py-20 sm:py-24">
        <div className="absolute -right-20 top-0 h-full w-1/3 -skew-x-12 bg-white/20" />

        <div className="kam-container relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#202d61]">
              Ready to Fabricate?
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#111936] sm:text-5xl">
              Send us your dimensions, drawing or project detail.
            </h2>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/request-quote"
              className="border border-[#111936] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:bg-white"
            >
              Request a Quote
            </Link>

            <Link
              href="/submit-order"
              className="bg-[#111936] px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#202d61]"
            >
              Submit an Order →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1024] py-12 text-white">
        <div className="kam-container flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={240}
              height={80}
              className="h-auto w-[210px] brightness-0 invert"
            />

            <p className="mt-5 text-sm text-slate-500">
              Architectural Metals. Built by Pros.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link
              href="/products/roof-panels"
              className="transition hover:text-white"
            >
              Roof Panels
            </Link>

            <Link
              href="/products/wall-soffit-panels"
              className="transition hover:text-white"
            >
              Wall & Soffit Panels
            </Link>

            <Link
              href="/submit-order"
              className="transition hover:text-white"
            >
              Submit an Order
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}