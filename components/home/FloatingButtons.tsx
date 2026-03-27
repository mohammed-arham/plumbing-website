export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+918859430800"
        className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
      >
        Call Now
      </a>
      <a
        href="https://wa.me/918859430800"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600"
      >
        WhatsApp
      </a>
    </div>
  );
}
