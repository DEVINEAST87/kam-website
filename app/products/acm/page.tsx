import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACM Panel Fabrication",
  description:
    "Complete ACM rainscreen panel packages from Kansas Architectural Metals, including shop drawings, AXYZ CNC routing, panel fabrication, SAF aluminum extrusions and jobsite installation guidance.",
  alternates: {
    canonical: "https://www.kansasarchmetals.com/products/acm",
  },
  openGraph: {
    title: "ACM Panel Fabrication | Kansas Architectural Metals",
    description:
      "Complete fabricated ACM rainscreen panel packages from shop drawings through jobsite-ready panels.",
    url: "https://www.kansasarchmetals.com/products/acm",
    type: "website",
  },
};

const quickSpecs = [
  ["Typical Panel Material", "4mm ACM"],
  ["Typical Sheet Size", '62" × 196"'],
  ["System Type", "Rainscreen"],
  ["Fabrication Locations", "Wichita + Topeka"],
];

const process = [
  {
    number: "01",
    title: "Project Information",
    copy: "Plans, elevations, dimensions and project requirements give our team the information needed to begin the panel package.",
  },
  {
    number: "02",
    title: "Shop Drawings",
    copy: "KAM develops project-specific panel layouts and shop drawings that serve as a fabrication plan and jobsite installation guide.",
  },
  {
    number: "03",
    title: "Material",
    copy: "ACM sheets and the required SAF aluminum extrusion components are coordinated for the panel system.",
  },
  {
    number: "04",
    title: "CNC Routing",
    copy: "Panel geometry is precisely routed on our AXYZ CNC equipment according to the approved project layout.",
  },
  {
    number: "05",
    title: "Panel Fabrication",
    copy: "Routed sheets are formed and assembled into finished panels using the project-specific rainscreen details.",
  },
  {
    number: "06",
    title: "Jobsite Package",
    copy: "Finished panels and installation information are organized for the project so the field team can follow the intended layout.",
  },
];

const applications = [
  "Commercial Facades",
  "Building Entrances",
  "Canopies",
  "Column Covers",
  "Soffits",
  "Accent Walls",
  "Architectural Features",
  "Rainscreen Cladding",
];

export default function ACMPage() {
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
          src="/images/acm-project-kice.jpg"
          alt="Completed ACM rainscreen entrance fabricated by Kansas Architectural Metals"
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
              ACM Panel Systems
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Complete ACM packages.
              <span className="block text-yellow-400">
                From drawing to jobsite.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Kansas Architectural Metals provides complete fabricated ACM
              rainscreen panel packages, combining project-specific shop
              drawings, CNC routing, panel fabrication, SAF aluminum extrusions
              and installation guidance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-quote"
                className="bg-yellow-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Request an ACM Quote
              </Link>

              <Link
                href="/submit-order"
                className="border border-white/35 bg-black/10 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111936]"
              >
                Submit Project Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SPECS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid grid-cols-2 divide-x divide-y divide-slate-200 lg:grid-cols-4 lg:divide-y-0">
          {quickSpecs.map(([label, value]) => (
            <div
              key={label}
              className="flex min-h-32 flex-col justify-center px-5 py-6 sm:px-7"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                {label}
              </p>

              <p className="mt-3 text-lg font-black text-[#111936] sm:text-xl">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE PACKAGE */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Complete Panel Packages</p>

            <h2 className="kam-heading">
              More than routed sheets.
            </h2>
          </div>

          <div className="self-end">
            <p className="kam-copy text-base sm:text-lg">
              KAM approaches ACM as a complete panel system. Our scope begins
              with the project information and continues through shop drawings,
              material coordination, CNC routing, fabrication and jobsite
              installation guidance.
            </p>

            <p className="kam-copy mt-5 text-base sm:text-lg">
              That means the panels, layout and attachment components are
              developed together as a project package instead of treating
              routing as a stand-alone service.
            </p>

            <div className="mt-8 border-l-4 border-yellow-400 bg-[#f4f6f8] p-6 sm:p-7">
              <p className="font-black text-[#111936]">
                Complete fabrication only.
              </p>

              <p className="mt-2 leading-7 text-slate-500">
                KAM does not offer routing-only ACM services or fabrication from
                customer-supplied ACM sheets. Our ACM work is provided as a
                complete fabricated panel package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">From Plans to Panels</p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="kam-heading max-w-3xl">
              One process from project layout through fabrication.
            </h2>

            <p className="max-w-md leading-7 text-slate-500">
              The goal is a coordinated package that makes sense in the shop
              and gives the field team clear information when the panels reach
              the jobsite.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <article key={step.number} className="bg-white p-7 sm:p-8">
                <p className="text-xs font-black tracking-[0.18em] text-yellow-500">
                  {step.number}
                </p>

                <h3 className="mt-5 text-xl font-black tracking-[-0.025em] text-[#111936]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AXYZ CNC */}
      <section className="kam-section">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="grid gap-4">
            <div className="relative min-h-[360px] overflow-hidden bg-slate-100 sm:min-h-[470px]">
              <Image
                src="/images/acm-axyz-routing.jpg"
                alt="ACM sheet being CNC routed on the Kansas Architectural Metals AXYZ machine"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative min-h-[190px] overflow-hidden bg-slate-100 sm:min-h-[230px]">
                <Image
                  src="/images/acm-axyz-routing-detail.jpg"
                  alt="Close-up of precision ACM routing on an AXYZ CNC machine"
                  fill
                  sizes="(max-width: 1024px) 50vw, 27vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="relative min-h-[190px] overflow-hidden bg-slate-100 sm:min-h-[230px]">
                <Image
                  src="/images/acm-routed-sheet.jpg"
                  alt="Routed ACM sheet showing multiple panel layouts"
                  fill
                  sizes="(max-width: 1024px) 50vw, 27vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="kam-eyebrow">CNC Fabrication</p>

            <h2 className="kam-heading">
              Precision routing on our AXYZ equipment.
            </h2>

            <p className="kam-copy mt-6">
              Project panel layouts are transferred into the fabrication
              process and routed on KAM&apos;s AXYZ CNC equipment. The machine
              allows complex panel geometry and rout-and-return details to be
              produced consistently across the project.
            </p>

            <p className="kam-copy mt-5">
              Our typical ACM material is 4mm, with sheets commonly measuring
              62 inches by 196 inches. Panel dimensions and layouts are
              developed around the requirements of each project.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200">
              <div className="bg-[#f4f6f8] p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Typical Material
                </p>

                <p className="mt-2 text-xl font-black text-[#111936]">
                  4mm ACM
                </p>
              </div>

              <div className="bg-[#f4f6f8] p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Typical Sheet
                </p>

                <p className="mt-2 text-xl font-black text-[#111936]">
                  62&quot; × 196&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MACHINE */}
      <section className="bg-[#111936] py-16 text-white sm:py-20">
        <div className="kam-container grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
              In-House Capability
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Built around full-size ACM fabrication.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              Our ACM fabrication capability allows KAM to manage panel routing
              and fabrication as part of the same coordinated project package.
              ACM fabrication is handled through our Wichita and Topeka
              locations.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden bg-white/5 p-3">
            <Image
              src="/images/acm-axyz-machine.jpg"
              alt="AXYZ CNC machine used for ACM fabrication at Kansas Architectural Metals"
              width={1600}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* MATERIAL / ALPOLIC */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">ACM Material</p>

            <h2 className="kam-heading">
              Finish options for the design in front of you.
            </h2>
          </div>

          <div>
            <p className="kam-copy text-base sm:text-lg">
              KAM works primarily with ALPOLIC ACM sheets and has also
              fabricated projects using Citadel and ALUCOBOND materials.
              Material selection, finish and availability are coordinated
              around the requirements of each project.
            </p>

            <p className="kam-copy mt-5">
              ALPOLIC offers an extensive selection of architectural finishes.
              Use their current finish catalog to explore available colors,
              textures and visual options, then contact KAM to confirm material
              availability for your project.
            </p>

            <a
              href="https://alpolic-americas.com/products/finishes/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex bg-[#202d61] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#111936]"
            >
              Explore ALPOLIC Finishes →
            </a>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              Color and material availability may vary. Contact KAM to confirm
              current availability and project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SAF EXTRUSIONS */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[.82fr_1.18fr]">
            <div className="bg-[#202d61] p-8 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                Panel Attachment System
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                Exclusively SAF aluminum extrusions.
              </h2>

              <p className="mt-6 leading-8 text-blue-100/75">
                KAM exclusively uses SAF aluminum extrusions for our ACM panel
                systems, giving the fabricated panels and attachment system a
                consistent foundation.
              </p>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-lg leading-8 text-slate-600">
                Our ACM work is centered around rainscreen construction. SAF
                offers dedicated ACM rainscreen extrusion components designed
                for panel attachment, reveals and related system conditions.
              </p>

              <p className="mt-5 leading-7 text-slate-500">
                Customers, designers and installers who want to understand the
                extrusion components in greater detail can review SAF&apos;s
                current panel extrusion information directly.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.saf.com/aluminum-extrusions/aluminum-panel-extrusions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:bg-yellow-300"
                >
                  View SAF Extrusions →
                </a>

                <a
                  href="https://www.saf.com/aluminum-extrusions/aluminum-panel-extrusions/c-4000-4200-4500-rainscreen-panel-extrusions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#202d61] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#202d61] transition hover:bg-[#202d61] hover:text-white"
                >
                  Rainscreen Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP DRAWINGS */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Shop Drawings</p>

            <h2 className="kam-heading">
              Fabrication information that follows the panels to the field.
            </h2>
          </div>

          <div>
            <p className="kam-copy text-base sm:text-lg">
              KAM develops shop drawings for the ACM package so panel sizes,
              locations and project-specific details are established before
              fabrication begins.
            </p>

            <p className="kam-copy mt-5">
              Those drawings also provide the jobsite team with a practical
              reference for panel layout and installation. The result is a
              package built around the project rather than a stack of
              unidentified fabricated pieces arriving in the field.
            </p>

            <div className="mt-8 border-l-4 border-yellow-400 bg-[#f4f6f8] p-6 sm:p-7">
              <p className="font-black text-[#111936]">
                Drawn. Routed. Fabricated. Organized.
              </p>

              <p className="mt-2 leading-7 text-slate-500">
                The shop drawing and fabrication process are coordinated so the
                panel package reflects the intended project layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINISHED WORK */}
      <section className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">Finished ACM Work</p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="kam-heading max-w-3xl">
              From flat sheets to finished architectural features.
            </h2>

            <p className="max-w-md leading-7 text-slate-500">
              ACM can be used across entrances, canopies, facades, soffits,
              columns and other architectural conditions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[1.15fr_.85fr]">
            <div className="group relative min-h-[500px] overflow-hidden bg-slate-200 sm:min-h-[650px]">
              <Image
                src="/images/acm-project-kice.jpg"
                alt="Finished black ACM entrance and canopy"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Completed ACM
                </p>

                <p className="mt-2 text-xl font-black">
                  Entrance / Canopy / Wall Cladding
                </p>
              </div>
            </div>

            <div className="group relative min-h-[500px] overflow-hidden bg-slate-200 sm:min-h-[650px]">
              <Image
                src="/images/acm-project-wtp.jpg"
                alt="Finished ACM canopy and architectural cladding detail"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Fabricated Detail
                </p>

                <p className="mt-2 text-xl font-black">
                  Canopy / Soffit / Column Cladding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="kam-section">
        <div className="kam-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="kam-eyebrow">Applications</p>

            <h2 className="kam-heading">
              One material. A lot of architectural possibilities.
            </h2>

            <p className="kam-copy mt-6">
              Project geometry and design intent determine the final panel
              layout, but ACM can serve a wide range of exterior architectural
              conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {applications.map((application) => (
              <div
                key={application}
                className="flex min-h-20 items-center bg-[#f4f6f8] p-5 font-bold text-[#202d61]"
              >
                <span className="mr-4 h-2 w-2 shrink-0 bg-yellow-400" />
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#202d61] py-16 text-white sm:py-20">
        <div className="kam-container flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              ACM Fabrication Locations
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Wichita + Topeka
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-blue-100/70">
              KAM&apos;s ACM fabrication capabilities are based at our Wichita
              and Topeka locations. Contact our team to coordinate your project
              requirements and fabrication schedule.
            </p>
          </div>

          <Link
            href="/request-quote"
            className="shrink-0 bg-yellow-400 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-[#111936] transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Request an ACM Quote
          </Link>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="border-b border-slate-200 bg-[#f4f6f8] py-14 sm:py-16">
        <div className="kam-container flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <p className="kam-eyebrow">Planning an ACM Project?</p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111936] sm:text-4xl">
              Talk to our fabrication team.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-500">
              Send us the plans or project information you have and we can
              review what is needed to begin developing the ACM package.
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
              Send us your ACM project.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#202d61]">
              Plans, elevations and project information are a good place to
              start. Our team can review the project and help determine the next
              step.
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
              Submit Project →
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