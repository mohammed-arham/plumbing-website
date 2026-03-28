"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useMinMd } from "@/components/motion/useMinMd";
import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    title: "On-time service",
    description:
      "We respect your time and try our best to reach on schedule. Most common issues are fixed in a single visit.",
    badge: "Quick doorstep support",
    icon: "⏱️",
  },
  {
    title: "Verified professionals",
    description:
      "Experienced, trained plumbers who regularly work in apartments, independent houses and commercial spaces in Dehradun.",
    badge: "Trusted local team",
    icon: "✓",
  },
  {
    title: "Transparent pricing",
    description:
      "Clear explanation of work and charges before starting. No hidden costs or surprise extras at the end.",
    badge: "Fair and honest quotes",
    icon: "💎",
  },
];

export function WhyChooseUsSection() {
  const reduce = useReducedMotion();
  const md = useMinMd();

  return (
    <section id="why-us" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                Why us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Why customers trust us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                Plumbing Master has been helping families and businesses in Dehradun for over a decade
                with reliable, neat and long-lasting work.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-xl md:items-end">
              <div className="flex items-center gap-2">
                <span className="text-lg" aria-hidden>
                  ⭐
                </span>
                <span className="font-semibold text-white">Rated 4.8/5 overall</span>
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                10+ years experience · Same day service available
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {points.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} y={18}>
              <motion.article
                whileHover={
                  reduce || !md
                    ? undefined
                    : { y: -5, transition: { duration: 0.28 } }
                }
                className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 shadow-[0_24px_55px_-30px_rgba(0,0,0,0.72)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/25 hover:shadow-[0_26px_60px_-24px_rgba(34,211,238,0.12)]"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-transparent text-lg"
                  aria-hidden
                >
                  {item.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-[15px]">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {item.badge}
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
