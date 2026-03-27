const testimonials = [
  {
    quote:
      "They fixed a major leak in our bathroom within an hour and explained the issue clearly. Very professional and polite team.",
    name: "Neha Verma",
    role: "Homeowner",
  },
  {
    quote:
      "Our café in Rajpur Road had an urgent drain problem. Plumbing Master responded quickly and resolved it before opening time.",
    name: "Rohit Sharma",
    role: "Business Owner",
  },
  {
    quote:
      "From the initial quote to final inspection, the team was transparent and punctual. The new pipeline for our building in Dehradun was installed very neatly.",
    name: "Anita Joshi",
    role: "Property Manager",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">What Clients Say</h2>
          <p className="mt-4 text-slate-600">
            Real feedback from customers who rely on us for quality plumbing work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <p className="text-slate-700">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-6 font-semibold text-blue-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
