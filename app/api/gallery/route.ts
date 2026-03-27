import { readdir } from "node:fs/promises";
import path from "node:path";

import { isImageFileName } from "@/lib/gallery-utils";
import { NextResponse } from "next/server";

/**
 * Reads `public/plumbingimages` at request time so new images appear without rebuilding.
 */
export async function GET() {
  const galleryDir = path.join(process.cwd(), "public", "plumbingimages");

  try {
    const files = await readdir(galleryDir);
    const images = files.filter((file) => {
      if (file.startsWith(".")) return false;
      return isImageFileName(file);
    });

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] as string[] });
  }
}
