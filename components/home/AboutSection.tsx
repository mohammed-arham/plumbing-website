import { Reveal } from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-600/20 via-slate-950/80 to-slate-950 p-10 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl lg:grid-cols-2 lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                Our story
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                About Plumbing Master
              </h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                Plumbing Master is a locally trusted plumbing company based in Dehradun, India. Our
                team of experienced, licensed plumbers handles everything from small leaks and blocked
                drains to full bathroom renovations and commercial fit-outs.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                We believe in clear communication, fair pricing, and workmanship that stands the test
                of time. Every job is completed neatly, safely, and in line with modern plumbing
                standards so your home or business runs smoothly.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-8 shadow-inner backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                Serving the community
              </p>
              <p className="mt-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                10+ years
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Trusted by homeowners, landlords, and businesses across Dehradun for prompt, reliable
                plumbing support whenever it is needed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
