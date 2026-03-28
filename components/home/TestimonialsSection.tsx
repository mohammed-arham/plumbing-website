"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useMinMd } from "@/components/motion/useMinMd";
import { motion, useReducedMotion } from "framer-motion";

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

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof testimonials)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const md = useMinMd();

  return (
    <Reveal delay={index * 0.07} y={18}>
      <motion.article
        whileHover={
          reduce || !md
            ? undefined
            : {
                y: -4,
                transition: { duration: 0.3 },
              }
        }
        className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 shadow-[0_24px_55px_-30px_rgba(0,0,0,0.75)] backdrop-blur-xl transition-[box-shadow,border-color] duration-300 hover:border-cyan-400/20 hover:shadow-[0_28px_60px_-22px_rgba(34,211,238,0.1)]"
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <p className="relative text-[15px] leading-relaxed text-slate-300">
          <span className="text-cyan-300/90">&ldquo;</span>
          {item.quote}
          <span className="text-cyan-300/90">&rdquo;</span>
        </p>
        <p className="relative mt-6 font-semibold text-white">{item.name}</p>
        <p className="relative text-sm text-slate-500">{item.role}</p>
      </motion.article>
    </Reveal>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 border-y border-white/[0.06] bg-slate-950/50 py-24 backdrop-blur-sm lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Social proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              What clients say
            </h2>
            <p className="mt-4 text-slate-400">
              Real feedback from customers who rely on us for quality plumbing work.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
