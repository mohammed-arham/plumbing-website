"use client";

import { filesToGalleryItems, type GalleryItem } from "@/lib/gallery-utils";
import { useEffect, useState } from "react";

import { GalleryGrid } from "@/components/home/GalleryGrid";

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
    <section id="gallery" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-blue-900 md:text-4xl">Our Work Gallery</h2>
          <p className="mt-3 text-slate-600 md:text-lg">
            A look at recent plumbing jobs completed by Plumbing Master across Dehradun and nearby
            areas.
          </p>
        </div>
        <a
          href="tel:+918859430800"
          className="inline-flex w-fit rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-400"
        >
          Call Now for Instant Service
        </a>
      </div>

      {status === "loading" ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
          <p className="font-medium text-blue-900">Loading gallery…</p>
        </div>
      ) : status === "ready" ? (
        <GalleryGrid items={items} />
      ) : (
        <div className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-center shadow-sm">
          <p className="font-semibold text-blue-900">
            No images found in the gallery folder yet.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Add 6–8 photos to{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
              public/plumbingimages/
            </code>{" "}
            inside your Next.js project (same folder as{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">app</code> and{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">public</code>), then refresh
            the page. Supported: JPG, PNG, WEBP, AVIF, GIF.
          </p>
        </div>
      )}
    </section>
  );
}
