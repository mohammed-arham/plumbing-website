export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 text-white"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-orange-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-6 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-24 lg:px-8 lg:py-32">
        <span className="flex w-fit items-center gap-2 rounded-full border border-orange-300/60 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-100 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available 24/7 · Quick service at your doorstep
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Reliable Plumbing Services You Can Trust with Plumbing Master
        </h1>
        <p className="max-w-2xl text-lg text-blue-100 md:text-xl">
          From urgent leaks to new bathroom fittings, Plumbing Master provides affordable and
          reliable plumbing solutions for homes and businesses across Dehradun and nearby areas.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2">
            ⭐ <span className="font-semibold">4.8/5 rating</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/10 px-4 py-2">
            ✅ Trusted by 100+ happy customers in Dehradun
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-orange-400 px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/40 transition hover:bg-orange-300"
          >
            Book Your Plumbing Service Today
          </a>
          <a
            href="tel:+918859430800"
            className="rounded-full border border-white/80 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-white/15"
          >
            Call Now for Instant Service
          </a>
        </div>
      </div>
    </section>
  );
}
