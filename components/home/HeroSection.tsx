"use client";

import { GlowButton } from "@/components/motion/GlowButton";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const reduce = useReducedMotion();
  const delay = (n: number) => (reduce ? 0 : n);

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      {/* Light scrim so live backdrop + particles read through; keeps headline contrast */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/18 via-transparent to-slate-950/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_72%_at_50%_-18%,rgba(59,130,246,0.2),transparent_52%),radial-gradient(ellipse_50%_42%_at_92%_18%,rgba(34,211,238,0.08),transparent_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-28 lg:px-8 lg:py-36">
        <motion.span
          className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100/95 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.9)] backdrop-blur-md"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(0.05), ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute hidden h-full w-full rounded-full bg-emerald-400/70 opacity-40 motion-reduce:animate-none md:inline-flex md:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          </span>
          Available 24/7 · Quick service at your doorstep
        </motion.span>

        <motion.h1
          className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_48px_rgba(2,6,23,0.65)] md:text-5xl lg:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay(0.12), ease: [0.22, 0.61, 0.36, 1] }}
        >
          Reliable plumbing services you can trust with{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
            Plumbing Master
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay(0.18), ease: [0.22, 0.61, 0.36, 1] }}
        >
          From urgent leaks to new bathroom fittings, Plumbing Master provides affordable and
          reliable plumbing solutions for homes and businesses across Dehradun and nearby areas.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4 text-sm text-slate-300"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay(0.24), ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span aria-hidden>⭐</span>
            <span className="font-semibold text-white">4.8/5 rating</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
            <span aria-hidden>✅</span>
            Trusted by 100+ happy customers in Dehradun
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay(0.3), ease: [0.22, 0.61, 0.36, 1] }}
        >
          <GlowButton href="#contact" variant="primary">
            Book your plumbing service today
          </GlowButton>
          <GlowButton href="tel:+918859430800" variant="secondary">
            Call now for instant service
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
