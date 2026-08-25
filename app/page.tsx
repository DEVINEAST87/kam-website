export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Kansas Architectural Metals
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Architectural Metals.
            <span className="block">Built by Pros.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Precision architectural sheet metal fabrication for contractors,
            project managers, architects, and commercial construction
            professionals across Kansas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#order"
              className="rounded-md bg-yellow-400 px-7 py-4 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-yellow-300"
            >
              Submit an Order
            </a>

            <a
              href="#quote"
              className="rounded-md border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-950"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}