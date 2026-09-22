import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gutters & Downspouts",
  description:
    "Seamless and custom fabricated gutters, downspouts, leader heads and drainage components from Kansas Architectural Metals, including 6-inch K-style and 7-inch D-style gutter.",
  alternates: {
    canonical:
      "https://www.kansasarchmetals.com/products/gutters-downspouts",
  },
  openGraph: {
    title: "Gutters & Downspouts | Kansas Architectural Metals",
    description:
      "6-inch K-style, 7-inch D-style, custom gutters, downspouts, leader heads and project-specific drainage components.",
    url: "https://www.kansasarchmetals.com/products/gutters-downspouts",
    type: "website",
  },
};

const materials = [
  {
    title: "24 Gauge Steel",
    copy: "A common choice for durable architectural gutter and drainage applications.",
  },
  {
    title: "22 Gauge Steel",
    copy: "Heavier-gauge steel available when the project calls for additional material thickness.",
  },
  {
    title: ".032 Aluminum",
    copy: "Lightweight aluminum option available for seamless gutter production.",
  },
  {
    title: ".040 Aluminum",
    copy: "Heavier aluminum option for projects requiring additional material thickness.",
  },
];

const customComponents = [
  "Custom Gutters",
  "Downspouts",
  "Leader Heads",
  "Elbows",
  "Offsets",
  "End Caps",
  "Outlet Components",
  "Project-Specific Drainage Details",
];

export default function GuttersDownspoutsPage() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15">
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
              className="hidden border border-white/30 bg-black/10 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111936] sm:inline-flex"
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
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#111936] pt-20 text-white sm:pt-24">
        <Image
          src="/images/gutter1.jpg"
          alt="6-inch K-style seamless gutter and downspout"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#101b46]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1027]/95 via-[#111936]/72 to-[#202d61]/25" />

        <div className="kam-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/#services"
              className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300"
            >
              Products & Services
            </Link>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-slate-300">
              Gutters & Downspouts
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Seamless when it works.
              <span className="block text-yellow-400">
                Custom when it doesn&apos;t.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              From 6-inch K-style and 7-inch D-style seamless gutter to
              custom-fabricated gutters, downspouts, leader heads and drainage
              components, KAM can build the system the project requires.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-quote"
                className="bg-yellow-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Request a Quote
              </Link>

              <Link
                href="/submit-order"
                className="border border-white/35 bg-black/10 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111936]"
              >
                Submit an Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SPECS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid grid-cols-2 divide-x divide-y divide-slate-200 lg:grid-cols-4 lg:divide-y-0">
          <div className="flex min-h-32 flex-col justify-center px-5 py-6 sm:px-7">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Seamless Profiles
            </p>
            <p className="mt-3 text-lg font-black text-[#111936] sm:text-xl">
              6&quot; + 7&quot;
            </p>
          </div>

          <div className="flex min-h-32 flex-col justify-center px-5 py-6 sm:px-7">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Steel
            </p>
            <p className="mt-3 text-lg font-black text-[#111936] sm:text-xl">
              24 ga + 22 ga
            </p>
          </div>

          <div className="flex min-h-32 flex-col justify-center px-5 py-6 sm:px-7">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Aluminum
            </p>
            <p className="mt-3 text-lg font-black text-[#111936] sm:text-xl">
              .032 + .040
            </p>
          </div>

          <div className="flex min-h-32 flex-col justify-center px-5 py-6 sm:px-7">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Shipped Lengths
            </p>
            <p className="mt-3 text-lg font-black text-[#111936] sm:text-xl">
              Up to 40&apos;
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Drainage Fabrication</p>

            <h2 className="kam-heading">
              Standard profiles and custom solutions.
            </h2>
          </div>

          <div>
            <p className="kam-copy text-base sm:text-lg">
              KAM combines seamless gutter production with in-house sheet metal
              fabrication, giving customers options beyond a single standard
              profile. We can produce long continuous runs when a seamless
              profile fits the project or fabricate custom gutter and drainage
              components when it doesn&apos;t.
            </p>

            <p className="kam-copy mt-5 text-base sm:text-lg">
              Gutters can be produced in the shop for shipment or rolled on site
              when the project requires lengths beyond what can practically be
              transported.
            </p>
          </div>
        </div>
      </section>

      {/* 6" K-STYLE */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="relative min-h-[560px] overflow-hidden bg-slate-200 sm:min-h-[680px]">
            <Image
              src="/images/gutter1.jpg"
              alt="Installed 6-inch K-style seamless gutter"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="kam-eyebrow">Seamless Gutter</p>

            <h2 className="kam-heading">6&quot; K-Style</h2>

            <p className="kam-copy mt-6">
              KAM produces 6-inch K-style seamless gutter for projects requiring
              a traditional profile with the benefit of long continuous runs.
              It is available in both steel and aluminum material options.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200">
              <div className="bg-white p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Steel
                </p>
                <p className="mt-2 text-xl font-black text-[#111936]">
                  24 ga / 22 ga
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Aluminum
                </p>
                <p className="mt-2 text-xl font-black text-[#111936]">
                  .032 / .040
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-4 border-yellow-400 bg-white p-6">
              <p className="font-black text-[#111936]">
                Seamless lengths up to 40&apos; for shipping.
              </p>
              <p className="mt-2 leading-7 text-slate-500">
                When longer continuous runs are required, KAM can roll the
                gutter on site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7" D-STYLE */}
      <section className="kam-section">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <div className="lg:order-2">
            <div className="relative min-h-[500px] overflow-hidden bg-slate-200 sm:min-h-[620px]">
              <Image
                src="/images/gutter3.jpg"
                alt="Installed 7-inch D-style seamless box gutter and downspout"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:order-1">
            <p className="kam-eyebrow">Commercial Seamless Gutter</p>

            <h2 className="kam-heading">7&quot; D-Style</h2>

            <p className="kam-copy mt-6">
              Our 7-inch D-style profile provides a larger seamless gutter
              option for commercial and architectural applications where
              additional gutter capacity or a box-style appearance is desired.
            </p>

            <p className="kam-copy mt-5">
              Like our 6-inch K-style gutter, D-style can be produced in long
              continuous lengths and paired with fabricated downspouts and
              related drainage components.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200">
              <div className="bg-[#f4f6f8] p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Steel
                </p>
                <p className="mt-2 text-xl font-black text-[#111936]">
                  24 ga / 22 ga
                </p>
              </div>

              <div className="bg-[#f4f6f8] p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Aluminum
                </p>
                <p className="mt-2 text-xl font-black text-[#111936]">
                  .032 / .040
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-4 border-yellow-400 bg-[#f4f6f8] p-6">
              <p className="font-black text-[#111936]">
                Up to 40&apos; for shipping. Longer on site.
              </p>
              <p className="mt-2 leading-7 text-slate-500">
                On-site rollforming is available when the project requires
                continuous lengths beyond normal shipping limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM GUTTER */}
      <section className="kam-section bg-[#111936] text-white">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="flex items-center justify-center overflow-hidden bg-white/5 p-3 sm:p-5">
            <Image
              src="/images/gutter2.jpg"
              alt="Custom fabricated architectural gutter"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto max-h-[720px] w-full object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Custom Fabrication
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              When a standard gutter isn&apos;t the answer.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Not every roof edge or drainage condition fits a machine-run
              profile. KAM can fabricate custom gutters around the dimensions,
              material and geometry required for the project.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Custom fabrication gives architects, contractors and installers
              another option for conditions where standard K-style or D-style
              gutter does not match the design or existing construction.
            </p>

            <Link
              href="/request-quote"
              className="mt-8 inline-flex bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Request Custom Gutter Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* DOWNSPOUTS + LEADER HEADS */}
      <section className="kam-section">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Beyond the Gutter</p>

            <h2 className="kam-heading">
              Downspouts, leader heads & custom components.
            </h2>

            <p className="kam-copy mt-6">
              The gutter is only part of the drainage system. KAM also
              fabricates the components needed to move water from the roof to
              its intended discharge point.
            </p>

            <p className="kam-copy mt-5">
              From straightforward downspouts to fabricated leader heads,
              offsets and project-specific details, components can be produced
              to coordinate with the gutter system and architectural finish.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {customComponents.map((component) => (
                <div
                  key={component}
                  className="flex min-h-16 items-center bg-[#f4f6f8] p-4 font-bold text-[#202d61]"
                >
                  <span className="mr-3 h-2 w-2 shrink-0 bg-yellow-400" />
                  {component}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center overflow-hidden bg-[#f4f6f8] p-3 sm:p-5">
            <Image
              src="/images/product-custom-components.jpg"
              alt="Custom fabricated white downspouts and leader heads"
              width={1600}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">Material Options</p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="kam-heading max-w-3xl">
              Steel and aluminum options for the project at hand.
            </h2>

            <p className="max-w-md leading-7 text-slate-500">
              Material and finish availability can vary by project. Contact KAM
              to confirm the appropriate material for your gutter or drainage
              package.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <article key={material.title} className="bg-white p-7">
                <div className="h-1 w-12 bg-yellow-400" />

                <h3 className="mt-6 text-xl font-black tracking-[-0.025em] text-[#111936]">
                  {material.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {material.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LENGTHS / ON-SITE */}
      <section className="bg-[#202d61] py-16 text-white sm:py-20">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Long-Length Capability
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Need more than 40 feet?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-blue-100/80">
              KAM can produce seamless gutter in lengths up to 40 feet for
              shipment. When a project calls for longer continuous runs, our
              gutter equipment can be taken to the jobsite and the material
              rolled to the required length on site.
            </p>

            <p className="mt-5 leading-7 text-blue-100/65">
              Travel and per-diem charges may apply to on-site rollforming.
              Contact KAM with the project location and required lengths for
              pricing and scheduling.
            </p>

            <Link
              href="/request-quote"
              className="mt-8 inline-flex bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:bg-yellow-300"
            >
              Ask About On-Site Rollforming →
            </Link>
          </div>
        </div>
      </section>

      {/* ORDERING INFO */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Ordering Information</p>

            <h2 className="kam-heading">
              What we need to get started.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {[
              ["Profile", '6" K-style, 7" D-style or custom'],
              ["Material", "Gauge / thickness and finish"],
              ["Lengths", "Required lengths and quantities"],
              ["Downspouts", "Size, quantity and configuration"],
              ["Accessories", "Leader heads, elbows, offsets or other details"],
              ["Project", "Location, plans and relevant dimensions"],
            ].map(([title, copy]) => (
              <div key={title} className="bg-[#f4f6f8] p-6 sm:p-7">
                <p className="font-black text-[#111936]">{title}</p>
                <p className="mt-2 leading-7 text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="border-y border-slate-200 bg-[#f4f6f8] py-14 sm:py-16">
        <div className="kam-container flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <p className="kam-eyebrow">Not Sure What You Need?</p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
              Send us the project information.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-500">
              Plans, dimensions, photos or an existing gutter profile can help
              our team determine whether a seamless profile or custom
              fabrication is the better fit.
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
              Ready to Start?
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#111936] sm:text-5xl">
              Let&apos;s build the drainage package.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#202d61]">
              Send us your gutter profile, material, lengths and project
              information and our team can take it from there.
            </p>
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
              href="/products/architectural-sheet-metal"
              className="transition hover:text-white"
            >
              Architectural Sheet Metal
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

            <Link href="/products/acm" className="transition hover:text-white">
              ACM
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