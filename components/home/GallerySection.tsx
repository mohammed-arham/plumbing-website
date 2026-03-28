"use client";

import { Reveal } from "@/components/motion/Reveal";
import { GlowButton } from "@/components/motion/GlowButton";
import { filesToGalleryItems, type GalleryItem } from "@/lib/gallery-utils";
import { GalleryGrid } from "@/components/home/GalleryGrid";
import { useEffect, useState } from "react";

export function GallerySection() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "empty">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" });
        if (!res.ok) throw new Error("bad response");
        const data = (await res.json()) as { images?: string[] };
        const files = Array.isArray(data.images) ? data.images : [];
        const mapped = filesToGalleryItems(files, 8);

        if (!cancelled) {
          setItems(mapped);
          setStatus(mapped.length > 0 ? "ready" : "empty");
        }
      } catch {
        if (!cancelled) {
          setItems([]);
          setStatus("empty");
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="gallery" className="scroll-mt-24 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Our work gallery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                A look at recent plumbing jobs completed by Plumbing Master across Dehradun and
                nearby areas.
              </p>
            </div>
            <GlowButton href="tel:+918859430800" variant="primary" className="h-fit shrink-0">
              Call now for instant service
            </GlowButton>
          </div>
        </Reveal>

        {status === "loading" ? (
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-12 text-center shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <p className="font-medium text-slate-200">Loading gallery…</p>
          </div>
        ) : status === "ready" ? (
          <GalleryGrid items={items} />
        ) : (
          <div className="rounded-2xl border border-dashed border-cyan-400/25 bg-white/[0.03] p-10 text-center backdrop-blur-md">
            <p className="font-semibold text-white">No images found in the gallery folder yet.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Add 6–8 photos to{" "}
              <code className="rounded-md border border-white/10 bg-black/30 px-1.5 py-0.5 text-xs text-cyan-200">
                public/plumbingimages/
              </code>{" "}
              inside your Next.js project (same folder as{" "}
              <code className="rounded-md border border-white/10 bg-black/30 px-1.5 py-0.5 text-xs text-cyan-200">
                app
              </code>{" "}
              and{" "}
              <code className="rounded-md border border-white/10 bg-black/30 px-1.5 py-0.5 text-xs text-cyan-200">
                public
              </code>
              ), then refresh the page. Supported: JPG, PNG, WEBP, AVIF, GIF.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
