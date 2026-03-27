const points = [
  {
    title: "On-time service",
    description:
      "We respect your time and try our best to reach on schedule. Most common issues are fixed in a single visit.",
    badge: "Quick doorstep support",
  },
  {
    title: "Verified professionals",
    description:
      "Experienced, trained plumbers who regularly work in apartments, independent houses and commercial spaces in Dehradun.",
    badge: "Trusted local team",
  },
  {
    title: "Transparent pricing",
    description:
      "Clear explanation of work and charges before starting. No hidden costs or surprise extras at the end.",
    badge: "Fair and honest quotes",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-blue-900 md:text-4xl">
              Why Customers Trust Us
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Plumbing Master has been helping families and businesses in Dehradun for over a decade
              with reliable, neat and long-lasting work.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-2xl bg-white px-5 py-4 text-sm shadow-md md:items-end">
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <span className="font-semibold text-slate-900">Rated 4.8/5 overall</span>
            </div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              10+ Years Experience · Same Day Service Available
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {points.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50/60 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600 md:text-base">{item.description}</p>
              <span className="mt-4 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                {item.badge}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
