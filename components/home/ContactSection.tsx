import { GlowButton } from "@/components/motion/GlowButton";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Get started
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Request a service in Dehradun
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Share a few details about your plumbing issue and our team at Plumbing Master will call
              you back with a quick quote.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-xl border border-white/[0.1] bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full rounded-xl border border-white/[0.1] bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
              <input
                type="text"
                name="service"
                placeholder="Service needed"
                className="w-full rounded-xl border border-white/[0.1] bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full rounded-xl border border-white/[0.1] bg-slate-950/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button
                type="submit"
                className="w-full rounded-full border border-cyan-400/30 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(34,211,238,0.4)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Request a call back
              </button>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="flex flex-col justify-between rounded-3xl border border-white/[0.1] bg-gradient-to-br from-blue-700/35 via-slate-900/90 to-slate-950 p-8 shadow-[0_28px_70px_-28px_rgba(37,99,235,0.35)] backdrop-blur-xl md:p-10">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Need immediate help in Dehradun?
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300">
                Our emergency team is available around the clock for urgent plumbing situations across
                Dehradun and nearby areas.
              </p>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                Call us now
              </p>
              <a
                href="tel:+918859430800"
                className="mt-2 block text-2xl font-bold tracking-tight text-white transition hover:text-cyan-100"
              >
                +91 88594 30800
              </a>
            </div>
            <div className="mt-10">
              <GlowButton href="tel:+918859430800" variant="primary" className="w-full sm:w-auto">
                Call now
              </GlowButton>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                Plumbing Master proudly serves homes, apartments, offices, and shops across Dehradun.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
