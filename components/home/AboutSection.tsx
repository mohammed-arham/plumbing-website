export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 rounded-3xl bg-blue-900 p-10 text-white lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">About Plumbing Master</h2>
          <p className="mt-4 text-blue-100">
            Plumbing Master is a locally trusted plumbing company based in Dehradun, India. Our team
            of experienced, licensed plumbers handles everything from small leaks and blocked drains
            to full bathroom renovations and commercial fit-outs.
          </p>
          <p className="mt-4 text-blue-100">
            We believe in clear communication, fair pricing, and workmanship that stands the test of
            time. Every job is completed neatly, safely, and in line with modern plumbing standards
            so your home or business runs smoothly.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-widest text-blue-100">Serving the Community</p>
          <p className="mt-3 text-4xl font-bold">10+ Years</p>
          <p className="mt-3 text-blue-100">
            Trusted by homeowners, landlords, and businesses across Dehradun for prompt, reliable
            plumbing support whenever it is needed.
          </p>
        </div>
      </div>
    </section>
  );
}
