import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Metal Fabrication",
  description:
    "Custom architectural metal fabrication from Kansas Architectural Metals, including one-off components, curved and radius work, specialty copper fabrication, custom profiles and project-specific metalwork.",
  alternates: {
    canonical: "https://www.kansasarchmetals.com/products/custom-fabrication",
  },
  openGraph: {
    title: "Custom Metal Fabrication | Kansas Architectural Metals",
    description:
      "Custom architectural metalwork built from drawings, dimensions and project requirements.",
    url: "https://www.kansasarchmetals.com/products/custom-fabrication",
    type: "website",
  },
};

const capabilities = [
  {
    title: "One-Off Components",
    copy: "Project-specific pieces fabricated when an off-the-shelf product simply does not exist.",
  },
  {
    title: "Curved & Radius Work",
    copy: "Custom metalwork for curved, tapered and unusual architectural conditions.",
  },
  {
    title: "Specialty Copper",
    copy: "Detailed copper fabrication for architectural features, caps, enclosures and custom assemblies.",
  },
  {
    title: "Custom Profiles",
    copy: "Brake-formed profiles built around project dimensions, drawings and field conditions.",
  },
  {
    title: "Architectural Details",
    copy: "Specialty trim, flashing, covers, caps and components designed to finish complicated conditions.",
  },
  {
    title: "Project-Specific Fabrication",
    copy: "Bring us the plans, sketch, dimensions or idea and we'll determine the best way to build it.",
  },
];

const startingInfo = [
  ["Drawing or Sketch", "Plans, details, shop drawings or even a clear sketch help define the piece."],
  ["Dimensions", "Provide the dimensions that control the finished component whenever possible."],
  ["Material", "Let us know the desired metal, thickness or gauge and finish."],
  ["Quantity", "From one-off pieces to repeated project-specific components."],
  ["Application", "Tell us where the piece goes and what it needs to accomplish."],
  ["Photos", "Field photos can be extremely helpful for unusual existing conditions."],
];

export default function CustomFabricationPage() {
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
          src="/images/custom2.jpg"
          alt="Custom copper architectural fabrication by Kansas Architectural Metals"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#101b46]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1027]/95 via-[#111936]/70 to-[#202d61]/20" />

        <div className="kam-container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/#services"
              className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300"
            >
              Products & Services
            </Link>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-slate-300">
              Custom Fabrication
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              If it doesn&apos;t come
              <span className="block text-yellow-400">out of a catalog.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Some projects need more than a standard panel, trim profile or
              off-the-shelf component. KAM fabricates project-specific
              architectural metalwork for the details that require something
              different.
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

      {/* INTRO */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Built for the Project</p>

            <h2 className="kam-heading">
              Bring us the detail nobody else has on the shelf.
            </h2>
          </div>

          <div>
            <p className="kam-copy text-base sm:text-lg">
              Architectural metal projects regularly create conditions that
              don&apos;t fit neatly into a standard product category. A curved
              transition. An unusual roof feature. A specialty enclosure. A
              one-off piece of trim. A detail that exists on the plans but
              nowhere in a manufacturer&apos;s catalog.
            </p>

            <p className="kam-copy mt-5 text-base sm:text-lg">
              That&apos;s where custom fabrication comes in. KAM can work from
              drawings, dimensions, sketches and field information to turn
              unusual architectural details into finished metal components.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">Capabilities</p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="kam-heading max-w-3xl">
              Custom means the project sets the rules.
            </h2>

            <p className="max-w-md leading-7 text-slate-500">
              Every custom piece is different. Material, geometry, quantity and
              fabrication requirements are reviewed around the actual project.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article key={capability.title} className="bg-white p-7 sm:p-8">
                <div className="h-1 w-12 bg-yellow-400" />

                <h3 className="mt-6 text-xl font-black tracking-[-0.025em] text-[#111936]">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {capability.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COPPER SHOP FABRICATION */}
      <section className="kam-section bg-[#111936] text-white">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="flex items-center justify-center overflow-hidden bg-white/5 p-3 sm:p-5">
            <Image
              src="/images/custom2.jpg"
              alt="Custom copper architectural assembly fabricated in the KAM shop"
              width={1600}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Specialty Fabrication
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              More than straight bends.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Complex architectural metalwork can require curved surfaces,
              transitions, seams, formed details and multiple fabricated
              components working together as one finished assembly.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              KAM&apos;s custom work extends beyond everyday brake-formed trim,
              giving contractors and installers a fabrication resource when a
              project calls for something genuinely unusual.
            </p>
          </div>
        </div>
      </section>

      {/* FIELD / RADIUS WORK */}
      <section className="kam-section">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Curved & Radius Work</p>

            <h2 className="kam-heading">
              Complicated geometry is part of the job.
            </h2>

            <p className="kam-copy mt-6">
              Curved openings, roof transitions and other non-standard
              conditions often require individual pieces to be shaped and
              fitted around the architecture rather than pulled from a standard
              detail.
            </p>

            <p className="kam-copy mt-5">
              Custom fabrication allows the metalwork to follow the project
              instead of forcing the project to fit a stock component.
            </p>

            <div className="mt-7 border-l-4 border-yellow-400 bg-[#f4f6f8] p-6">
              <p className="font-black text-[#111936]">
                Have an unusual condition?
              </p>
              <p className="mt-2 leading-7 text-slate-500">
                Send us the plans, dimensions, photos or sketch. We&apos;ll
                review what you&apos;re trying to build.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center overflow-hidden bg-[#f4f6f8] p-3 sm:p-5">
            <Image
              src="/images/custom3.jpg"
              alt="Custom copper radius fabrication around an architectural roof opening"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto max-h-[760px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* FINISHED APPLICATIONS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <div className="max-w-3xl">
            <p className="kam-eyebrow">From Shop to Project</p>

            <h2 className="kam-heading">
              Built to become part of the architecture.
            </h2>

            <p className="kam-copy mt-6">
              Custom fabrication is ultimately about solving a specific
              condition on a real project. From specialty roof features to
              detailed copper work, the finished component has to fit the
              architecture around it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* CUSTOM 1 */}
            <article className="overflow-hidden bg-white">
              <div className="relative min-h-[500px] overflow-hidden sm:min-h-[620px]">
                <Image
                  src="/images/custom1.jpg"
                  alt="Finished custom architectural metal roof feature"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
                  Architectural Detail
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#111936]">
                  Custom work for unusual conditions.
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  Project-specific geometry can require fabrication that goes
                  well beyond a standard straight profile.
                </p>
              </div>
            </article>

            {/* CUSTOM 4 */}
            <article className="overflow-hidden bg-white">
              <div className="relative min-h-[500px] overflow-hidden sm:min-h-[620px]">
                <Image
                  src="/images/custom4.jpg"
                  alt="Finished custom copper chimney cap"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="scale-[1.28] object-cover object-[50%_32%]"
                />
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
                  Finished Fabrication
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#111936]">
                  Details that stand out.
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  Specialty metalwork can become an architectural feature in
                  its own right while still serving the needs of the project.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STARTING INFORMATION */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Getting Started</p>

            <h2 className="kam-heading">
              You don&apos;t need a perfect drawing to start the conversation.
            </h2>

            <p className="kam-copy mt-6">
              The more information you have, the better—but unusual fabrication
              often starts with a problem that still needs to be worked through.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {startingInfo.map(([title, copy]) => (
              <div key={title} className="bg-[#f4f6f8] p-6 sm:p-7">
                <p className="font-black text-[#111936]">{title}</p>
                <p className="mt-2 leading-7 text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEA STRIP */}
      <section className="bg-[#202d61] py-16 text-white sm:py-20">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Have Something Different?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Ask us if we can make it.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-blue-100/80">
              If your detail doesn&apos;t fit one of our standard product
              categories, that doesn&apos;t mean it&apos;s outside our
              capabilities. Send us what you have and let our fabrication team
              take a look.
            </p>

            <Link
              href="/request-quote"
              className="mt-8 inline-flex bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-[#111936] transition hover:bg-yellow-300"
            >
              Send Us Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED CAPABILITIES */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">Related Capabilities</p>

          <h2 className="kam-heading max-w-3xl">
            Looking for one of our standard product lines?
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Architectural Sheet Metal",
                "/products/architectural-sheet-metal",
              ],
              ["Roof Panels", "/products/roof-panels"],
              ["Wall & Soffit Panels", "/products/wall-soffit-panels"],
              ["Gutters & Downspouts", "/products/gutters-downspouts"],
            ].map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="group flex min-h-32 items-end justify-between bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="max-w-[80%] font-black text-[#111936]">
                  {title}
                </span>

                <span className="text-xl font-black text-yellow-500 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-yellow-400 py-20 sm:py-24">
        <div className="absolute -right-20 top-0 h-full w-1/3 -skew-x-12 bg-white/20" />

        <div className="kam-container relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#202d61]">
              Custom Project?
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#111936] sm:text-5xl">
              Show us what you&apos;re trying to build.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#202d61]">
              Send us your plans, sketch, dimensions or photos and our team can
              review the fabrication requirements.
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
              href="/products/gutters-downspouts"
              className="transition hover:text-white"
            >
              Gutters & Downspouts
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}