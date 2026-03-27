const services = [
  {
    title: "Residential Plumbing",
    description:
      "Quick help for common issues at home like tap leakage, low water pressure, and bathroom problems.",
    bullets: [
      "Leakage repair in bathrooms, kitchens and balconies",
      "New tap, shower and mixer fittings",
      "Geyser and water filter connections",
      "Water tank and overhead pipeline checks",
    ],
  },
  {
    title: "Commercial Plumbing",
    description:
      "Reliable plumbing solutions for shops, cafés, offices and small businesses in Dehradun.",
    bullets: [
      "Washroom and pantry plumbing for offices",
      "Drain and grease trap cleaning for cafés & restaurants",
      "Regular maintenance contracts for buildings",
      "Quick response for leaks and blockages",
    ],
  },
  {
    title: "Pipe Installation & Repair",
    description:
      "Strong and long-lasting pipeline work for new and old constructions.",
    bullets: [
      "New internal and external pipe layouts",
      "Replacement of old, rusted pipelines",
      "Repair of concealed pipe leakages",
      "Boring, suction and water line connection checks",
    ],
  },
  {
    title: "Emergency Services",
    description:
      "Rapid 24/7 support for unexpected plumbing issues at your doorstep.",
    bullets: [
      "Burst pipe and heavy leakage control",
      "Severe blockage in bathrooms and kitchens",
      "Overflowing water tanks or sumps",
      "Same day service across most of Dehradun",
    ],
    featured: true,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-blue-900 md:text-4xl">
            Plumbing Services for Every Need
          </h2>
          <p className="mt-3 text-slate-600 md:text-lg">
            From small leakages to full pipeline work, Plumbing Master provides quick, honest service
            at your doorstep in Dehradun.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm text-slate-700 md:items-end">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-700 shadow-sm">
            ⭐ <span className="font-semibold">4.8/5</span> from local customers
          </span>
          <span className="text-xs uppercase tracking-wide text-slate-500">
            Trusted by 100+ families and businesses in Dehradun
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className={`flex h-full flex-col rounded-2xl border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
              service.featured
                ? "border-orange-300 bg-gradient-to-br from-blue-800 via-blue-700 to-orange-500 text-white"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold">{service.title}</h3>
              {service.featured ? (
                <span className="rounded-full bg-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  Emergency 24/7
                </span>
              ) : null}
            </div>
            <p className={`mt-3 text-sm md:text-base ${service.featured ? "text-blue-100" : "text-slate-600"}`}>
              {service.description}
            </p>
            <ul
              className={`mt-4 flex flex-1 list-disc flex-col gap-1 pl-4 text-sm ${
                service.featured ? "text-blue-50" : "text-slate-700"
              }`}
            >
              {service.bullets?.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold ${
                  service.featured
                    ? "bg-black/20 text-orange-100"
                    : "bg-blue-50 text-blue-800"
                }`}
              >
                ⚡ Same day service in most areas
              </span>
              <a
                href="tel:+918859430800"
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold shadow-sm ${
                  service.featured
                    ? "bg-orange-400 text-slate-900 hover:bg-orange-300"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                Call Now for This Service
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
