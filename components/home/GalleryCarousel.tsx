"use client";

import { Reveal } from "@/components/motion/Reveal";
import { useMinMd } from "@/components/motion/useMinMd";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type GalleryItem = {
  src: string;
  caption: string;
};

type GalleryCarouselProps = {
  items: GalleryItem[];
};

export function GalleryCarousel({ items }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduce = useReducedMotion();
  const md = useMinMd();

  function scrollByAmount(amount: number) {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  function handlePrev() {
    setCurrentSlide((s) => {
      const next = (s - 1 + items.length) % items.length;
      return next;
    });
  }

  function handleNext() {
    setCurrentSlide((s) => (s + 1) % items.length);
  }

  function scrollToIndex(index: number) {
    const el = containerRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  useEffect(() => {
    if (items.length === 0) return;
    scrollToIndex(currentSlide);
  }, [currentSlide, items.length]);

  useEffect(() => {
    if (items.length <= 1) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      setCurrentSlide((s) => (s + 1) % items.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, [isPaused, items.length]);

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          ref={containerRef}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto gap-6 px-2 py-2"
        >
          {items.map((item, index) => (
            <Reveal key={`${item.src}-${index}`} delay={index * 0.03} y={16}>
              <motion.button
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={reduce || !md ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="group relative min-w-[68%] sm:min-w-[44%] md:min-w-[33%] lg:min-w-[24%] snap-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] text-left shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] outline-none transition-[box-shadow] duration-300 hover:border-cyan-400/25 hover:shadow-[0_28px_60px_-20px_rgba(34,211,238,0.12)] focus-visible:ring-2 focus-visible:ring-cyan-400/50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition duration-500 ease-out motion-reduce:transition-none md:group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                    aria-hidden
                  />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                    View
                  </span>
                </div>
                <div className="border-t border-white/[0.06] px-4 py-3.5 backdrop-blur-md">
                  <p className="text-sm font-medium text-slate-100">{item.caption}</p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-3">
          {items.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentSlide}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 w-2 rounded-full transition-transform duration-200 ${
                idx === currentSlide ? "bg-cyan-400 scale-125" : "bg-white/30 hover:scale-110"
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="pointer-events-auto">
            <button
              type="button"
              aria-label="Previous"
              onClick={handlePrev}
              className="hidden rounded-full border border-white/10 bg-black/20 p-2 text-white backdrop-blur-md transition hover:bg-black/30 md:inline"
            >
              ‹
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <div className="pointer-events-auto">
            <button
              type="button"
              aria-label="Next"
              onClick={handleNext}
              className="hidden rounded-full border border-white/10 bg-black/20 p-2 text-white backdrop-blur-md transition hover:bg-black/30 md:inline"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {activeIndex !== null ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveIndex(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-12 right-0 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Close
            </button>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.85)]">
              <Image
                src={items[activeIndex].src}
                alt={items[activeIndex].caption}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-slate-200">
              {items[activeIndex].caption}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}
