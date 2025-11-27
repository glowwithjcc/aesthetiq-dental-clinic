"use client";

import Image from "next/image";

const items = [
  { src: "/gallery/insta-1.jpg", alt: "Smile makeover" },
  { src: "/gallery/insta-2.jpg", alt: "Implant placement" },
  { src: "/gallery/insta-3.jpg", alt: "Gum laser care" },
  { src: "/gallery/insta-4.jpg", alt: "Whitening session" },
  { src: "/gallery/insta-5.jpg", alt: "Veneers close-up" },
];

export default function InstagramCarousel() {
  return (
    <div className="w-full">
      {/* Title row (optional) */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Latest posts</h2>
        <span className="text-textSecondary text-sm">Swipe →</span>
      </div>

      {/* Scroll-snap carousel */}
      <div
        className="flex gap-4 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scroll-smooth
                   [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* hide scrollbar on webkit */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {items.map((it, idx) => (
          <div
            key={idx}
            className="snap-start shrink-0 w-[240px] h-[300px] bg-cardDark/60 border border-white/10 rounded-xl overflow-hidden shadow-card hover:border-accentGold/40 transition-all"
          >
            <div className="relative w-full h-[220px]">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div className="p-3 text-sm text-textSecondary">{it.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
