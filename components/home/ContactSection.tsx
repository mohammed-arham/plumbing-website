export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-bold text-blue-900">Request a Service in Dehradun</h2>
          <p className="mt-3 text-slate-600">
            Share a few details about your plumbing issue and our team at Plumbing Master will call
            you back with a quick quote.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Needed"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Request a Call Back
            </button>
          </form>
        </div>

        <aside className="rounded-3xl bg-blue-900 p-8 text-white">
          <h3 className="text-2xl font-bold">Need Immediate Help in Dehradun?</h3>
          <p className="mt-4 text-blue-100">
            Our emergency team is available around the clock for urgent plumbing situations across
            Dehradun and nearby areas.
          </p>
          <p className="mt-8 text-sm uppercase tracking-wide text-blue-200">Call us now</p>
          <a href="tel:+918859430800" className="mt-2 block text-2xl font-bold">
            +91 88594 30800
          </a>
          <a
            href="tel:+918859430800"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            Call Now
          </a>
          <p className="mt-6 text-sm text-blue-100">
            Plumbing Master proudly serves homes, apartments, offices, and shops across Dehradun.
          </p>
        </aside>
      </div>
    </section>
  );
}
