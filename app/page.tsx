import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Architectural Sheet Metal",
    description:
      "Custom flashings, coping, fascia, edge metal, trim and specialty brake-formed profiles.",
    tag: "CUSTOM FABRICATION",
    image: "/images/product-trim-profiles.jpg",
  },
  {
    title: "Roof Panels",
    description:
      "Standing seam, mechanical seam, snap-lock and specialty roofing profiles fabricated for commercial projects.",
    tag: "ROOFING SYSTEMS",
    image: "/images/project-commercial-facade.jpg",
  },
  {
    title: "Wall Panels",
    description:
      "Architectural wall and soffit panel systems in multiple profiles, gauges and finishes.",
    tag: "WALL SYSTEMS",
    image: "/images/project-basehor-city-hall.jpg",
  },
  {
    title: "ACM",
    description:
      "Precision-routed aluminum composite material panels, custom shapes and architectural assemblies.",
    tag: "ACM FABRICATION",
    image: "/images/hero-commercial.jpg",
  },
  {
    title: "Gutters & Downspouts",
    description:
      "Custom and seamless gutter systems, downspouts, collector heads, hangers and related components.",
    tag: "DRAINAGE",
    image: "/images/product-custom-components.jpg",
  },
  {
    title: "Custom Fabrication",
    description:
      "Have a drawing, sketch or unusual detail? Send it to us and let our fabrication team take it from there.",
    tag: "BUILT TO ORDER",
    image: "/images/product-custom-welded.jpg",
  },
];

const reasons = [
  ["Fast Turnaround", "Built around keeping your projects moving."],
  ["Precision Fabrication", "Experienced fabricators and professional equipment."],
  ["Three Kansas Locations", "Wichita, Shawnee and Topeka."],
  ["Decades of Experience", "Industry knowledge across architectural metal systems."],
];

const capabilities = [
  "10' Shears",
  "10' Press Brakes",
  "ACM Routing",
  "Roof & Wall Panel Rollforming",
  "Seamless Gutters",
  "Coil Slitting",
  "Perforation",
  "Pittsburgh Machines",
  "Decoiling & Recoiling",
  "Specialty Soldering",
];

const locations = [
  {
    city: "Wichita",
    address: "3121 W Pawnee St, Wichita, KS 67213",
    specialty: "Custom sheet metal, trims, caps and ACM fabrication",
  },
  {
    city: "Shawnee",
    address: "6423 Vista Dr, Shawnee, KS 66218",
    specialty: "Roof and wall panels, gutters, coil processing and perforation",
  },
  {
    city: "Topeka",
    address: "417 SE 10th Ave, Topeka, KS 66607",
    specialty: "ACM routing, fabrication and architectural installation expertise",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15">
        <div className="kam-container flex h-24 items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/logos/kam-logo-horizontal.png"
              alt="Kansas Architectural Metals"
              width={250}
              height={80}
              priority
              className="h-auto w-[180px] object-contain brightness-0 invert sm:w-[230px]"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-white lg:flex">
            <a className="transition hover:text-yellow-300" href="#services">
              Products
            </a>

            <a className="transition hover:text-yellow-300" href="#projects">
              Projects
            </a>

            <a className="transition hover:text-yellow-300" href="#capabilities">
              Capabilities
            </a>

            <a className="transition hover:text-yellow-300" href="#locations">
              Locations
            </a>

            <a className="transition hover:text-yellow-300" href="#contact">
              Contact
            </a>
          </nav>

          <Link
            href="/submit-order"
            className="rounded-md bg-yellow-400 px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Submit an Order
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-[#101733] pt-24 text-white">
        <Image
          src="/images/hero-commercial.jpg"
          alt="Kansas Architectural Metals commercial architectural metal project"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#0c1230]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1027]/82 via-[#0b1027]/45 to-[#0b1027]/10" />

        <div className="kam-container relative z-10 py-28">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.32em] text-yellow-400">
              Kansas Architectural Metals
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Architectural Metals.
              <span className="block text-white/95">Built by Pros.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Precision architectural sheet metal fabrication with the
              experience, capabilities and turnaround contractors need to keep
              projects moving.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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

      {/* QUICK CAPABILITY STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="kam-container grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {[
            "Custom Fabrication",
            "Roof Panels",
            "Wall Panels",
            "ACM",
            "Flashings",
            "Fast Turnaround",
          ].map((item) => (
            <div
              key={item}
              className="flex min-h-28 items-center justify-center px-4 text-center text-xs font-black uppercase tracking-[0.12em] text-[#202d61]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="kam-section">
        <div className="kam-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="kam-eyebrow">Built for the trades</p>

            <h2 className="kam-heading">
              Fast when it matters. Precise always.
            </h2>
          </div>

          <div className="self-end">
            <p className="kam-copy max-w-3xl text-lg">
              Kansas Architectural Metals combines decades of architectural
              sheet metal experience with modern fabrication capabilities
              across three Kansas locations. Whether you need a simple flashing,
              hundreds of roof panels or a custom architectural component, our
              goal is straightforward: make it correctly and keep your project
              moving.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="kam-section bg-[#f4f6f8]">
        <div className="kam-container">
          <p className="kam-eyebrow">Products & Services</p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="kam-heading max-w-2xl">
              From everyday trim to one-of-a-kind fabrication.
            </h2>

            <Link
              href="/submit-order"
              className="text-sm font-black uppercase tracking-[0.12em] text-[#202d61]"
            >
              Send Us Your Drawing →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <span className="absolute bottom-4 left-5 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                    {service.tag}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-[#111936]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <p className="mt-7 text-xs font-black uppercase tracking-[0.12em] text-[#202d61]">
                    Learn More →
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KAM */}
      <section className="kam-section bg-[#202d61] text-white">
        <div className="kam-container">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
            Why Contractors Choose KAM
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">
            Professional fabrication without the typical wait.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, copy]) => (
              <div key={title} className="min-h-56 bg-[#202d61] p-7">
                <div className="h-1 w-12 bg-yellow-400" />

                <h3 className="mt-8 text-xl font-black">{title}</h3>

                <p className="mt-4 leading-7 text-blue-100/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="kam-section">
        <div className="kam-container">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="kam-eyebrow">Featured Work</p>

              <h2 className="kam-heading">
                Made here. Built into projects everywhere.
              </h2>
            </div>

            <p className="kam-copy max-w-lg">
              Real KAM work, from individual fabricated components to complete
              commercial architectural metal systems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_.7fr]">
            <div className="group relative min-h-[540px] overflow-hidden">
              <Image
                src="/images/project-basehor-city-hall.jpg"
                alt="Basehor City Hall architectural metal project"
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Featured Project
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Basehor City Hall
                </h3>

                <p className="mt-3 text-sm text-white/80">
                  Architectural panels and commercial metal detailing
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="group relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/project-commercial-facade.jpg"
                  alt="Commercial architectural metal facade"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <p className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[0.18em] text-white">
                  ACM / Wall Systems
                </p>
              </div>

              <div className="group relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/product-custom-welded.jpg"
                  alt="Custom fabricated sheet metal component"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <p className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[0.18em] text-white">
                  Custom Fabrication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="kam-section bg-[#111936] text-white"
      >
        <div className="kam-container grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
              Shop Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
              Equipment built around the work our customers need.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              From custom brake work and ACM routing to panel rollforming and
              seamless gutters, KAM&apos;s three locations combine complementary
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/15">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex min-h-28 items-center bg-[#111936] p-5 font-bold"
              >
                <span className="mr-4 h-2 w-2 bg-yellow-400" />
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="kam-section">
        <div className="kam-container">
          <p className="kam-eyebrow">Three Kansas Locations</p>

          <h2 className="kam-heading max-w-3xl">
            Specialized capabilities. One fabrication partner.
          </h2>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {locations.map((location) => (
              <article
                key={location.city}
                className="border-t-4 border-[#202d61] bg-[#f4f6f8] p-8"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Kansas
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#111936]">
                  {location.city}
                </h3>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  {location.address}
                </p>

                <div className="my-6 h-px bg-slate-300" />

                <p className="font-bold leading-7 text-[#202d61]">
                  {location.specialty}
                </p>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Customer Pickup Available
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-slate-200 bg-[#f8f9fa] py-14">
        <div className="kam-container">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Materials • Quality • Industry Relationships
          </p>

          <div className="mt-8 grid gap-6 text-center text-lg font-black text-[#202d61] sm:grid-cols-2 lg:grid-cols-4">
            <div>PAC-CLAD</div>
            <div>DREXEL</div>
            <div>PACCA</div>
            <div>KEYSTONE QA</div>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section
        id="order"
        className="relative overflow-hidden bg-yellow-400 py-24"
      >
        <div className="absolute -right-20 top-0 h-full w-1/3 -skew-x-12 bg-white/20" />

        <div className="kam-container relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#202d61]">
              Have a drawing?
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[#111936] sm:text-5xl">
              Send us what you have. We&apos;ll help take it from there.
            </h2>
          </div>

          <Link
            href="/submit-order"
            className="shrink-0 rounded-md bg-[#111936] px-8 py-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1"
          >
            Submit an Order →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0b1024] py-16 text-white">
        <div className="kam-container">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
            <div>
              <Image
                src="/logos/kam-logo-horizontal.png"
                alt="Kansas Architectural Metals"
                width={260}
                height={90}
                className="h-auto w-[240px] brightness-0 invert"
              />

              <p className="mt-7 max-w-md leading-7 text-slate-400">
                Architectural Metals. Built by Pros.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                Contact
              </p>

              <p className="mt-6 font-bold">913-441-1208</p>

              <p className="mt-3 text-sm text-slate-400">
                fabricate@kansasarchmetals.com
              </p>

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

          <div className="mt-14 border-t border-white/10 pt-7 text-xs text-slate-600">
            © 2026 Kansas Architectural Metals. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}