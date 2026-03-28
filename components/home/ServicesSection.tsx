"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useMinMd } from "@/components/motion/useMinMd";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: "🏠",
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
    icon: "🏢",
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
    icon: "🔧",
    title: "Pipe Installation & Repair",
    description: "Strong and long-lasting pipeline work for new and old constructions.",
    bullets: [
      "New internal and external pipe layouts",
      "Replacement of old, rusted pipelines",
      "Repair of concealed pipe leakages",
      "Boring, suction and water line connection checks",
    ],
  },
  {
    icon: "🚨",
    title: "Emergency Services",
    description: "Rapid 24/7 support for unexpected plumbing issues at your doorstep.",
    bullets: [
      "Burst pipe and heavy leakage control",
      "Severe blockage in bathrooms and kitchens",
      "Overflowing water tanks or sumps",
      "Same day service across most of Dehradun",
    ],
    featured: true,
  },
] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const md = useMinMd();
  const isFeatured = "featured" in service && service.featured;

  return (
    <Reveal delay={index * 0.06} y={20}>
      <motion.article
        whileHover={
          reduce || !md
            ? undefined
            : {
                y: -6,
                transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] },
              }
        }
        className={`flex h-full flex-col rounded-2xl border p-7 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] transition-shadow duration-300 hover:shadow-[0_28px_70px_-24px_rgba(59,130,246,0.22)] ${
          isFeatured
            ? "border-orange-400/35 bg-gradient-to-br from-blue-600/25 via-indigo-950/50 to-slate-950/80 backdrop-blur-xl"
            : "border-white/[0.08] bg-white/[0.04] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <motion.span
              className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl shadow-inner ${
                isFeatured
                  ? "border-orange-300/25 bg-black/20"
                  : "border-white/10 bg-white/5"
              }`}
              whileHover={reduce || !md ? undefined : { scale: 1.08, rotate: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span aria-hidden>{service.icon}</span>
            </motion.span>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {service.title}
            </h3>
          </div>
          {isFeatured ? (
            <span className="shrink-0 rounded-full border border-orange-300/30 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-orange-100">
              Emergency 24/7
            </span>
          ) : null}
        </div>
        <p
          className={`mt-3 text-sm leading-relaxed md:text-base ${
            isFeatured ? "text-blue-100/90" : "text-slate-400"
          }`}
        >
          {service.description}
        </p>
        <ul
          className={`mt-4 flex flex-1 list-none flex-col gap-2 text-sm ${
            isFeatured ? "text-slate-200" : "text-slate-300"
          }`}
        >
          {service.bullets.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-semibold ${
              isFeatured
                ? "border-white/10 bg-black/20 text-orange-100"
                : "border-white/10 bg-white/5 text-cyan-100"
            }`}
          >
            ⚡ Same day service in most areas
          </span>
          <a
            href="tel:+918859430800"
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold transition ${
              isFeatured
                ? "bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-[0_8px_24px_-6px_rgba(251,191,36,0.5)] hover:brightness-110"
                : "border border-cyan-400/35 bg-cyan-500/15 text-cyan-50 hover:border-cyan-300/50 hover:bg-cyan-500/25"
            }`}
          >
            Call for this service
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Plumbing services for every need
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                From small leakages to full pipeline work, Plumbing Master provides quick, honest
                service at your doorstep in Dehradun.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-sm text-slate-300 md:items-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 font-medium text-emerald-100/95 shadow-[0_8px_28px_-12px_rgba(16,185,129,0.35)] backdrop-blur-md">
                ⭐ <span>4.8/5</span> from local customers
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Trusted by 100+ families and businesses
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
