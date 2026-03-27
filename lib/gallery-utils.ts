export const captionPool = [
  "Pipe Repair",
  "Bathroom Fitting",
  "Kitchen Leakage Fix",
  "Water Tank Issue Repair",
  "Drain Cleaning Service",
  "Geyser Connection Setup",
  "Commercial Plumbing Work",
  "Emergency Plumbing Visit",
];

export const validImageExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
]);

function fileExtension(fileName: string): string {
  const i = fileName.lastIndexOf(".");
  return i >= 0 ? fileName.slice(i).toLowerCase() : "";
}

export function isImageFileName(fileName: string): boolean {
  return validImageExtensions.has(fileExtension(fileName));
}

export function toTitleCaseFromFileName(fileName: string) {
  const base = fileName.replace(/\.[^.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export type GalleryItem = {
  src: string;
  caption: string;
};

export function filesToGalleryItems(files: string[], max = 8): GalleryItem[] {
  const sorted = [...files].sort((a, b) => a.localeCompare(b)).slice(0, max);

  return sorted.map((file, index) => {
    const generatedCaption = toTitleCaseFromFileName(file);
    const caption =
      generatedCaption.length > 2 ? generatedCaption : captionPool[index];

    return {
      src: `/plumbingimages/${encodeURIComponent(file)}`,
      caption: caption || captionPool[index] || "Plumbing Service",
    };
  });
}
