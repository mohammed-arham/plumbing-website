"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  src: string;
  caption: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-blue-900">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-12 right-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900"
            >
              Close
            </button>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
              <Image
                src={items[activeIndex].src}
                alt={items[activeIndex].caption}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-white">
              {items[activeIndex].caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

