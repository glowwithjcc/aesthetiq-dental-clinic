"use client";

import { useState } from "react";

export default function BeforeAfter() {
  const [pos, setPos] = useState(52);

  return (
    <div className="relative w-full rounded-[32px] overflow-hidden border border-[#D7B65F]/30 bg-black/40 backdrop-blur-xl shadow-[0_0_45px_rgba(0,0,0,0.45)]">
      {/* Subtle gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3C770]/10 via-transparent to-[#B89045]/20 pointer-events-none" />

      <div className="relative w-full h-[420px]">
        {/* BEFORE IMAGE */}
        <img
          src="/gallery/before.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Before"
        />

        {/* AFTER IMAGE (clipped) */}
        <img
          src="/gallery/after.jpg"
          className="absolute inset-0 w-full h-full object-cover transition-all"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          alt="After"
        />

        {/* TOP LABELS */}
        <div className="absolute top-4 left-4 flex gap-2 text-xs uppercase tracking-[0.25em] z-20">
          <span className="rounded-full bg-black/70 px-3 py-1 border border-white/15 text-white">
            Before
          </span>
          <span className="rounded-full bg-[#D7B65F]/85 px-3 py-1 text-black">
            After
          </span>
        </div>

        {/* SLIDER */}
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Slide to reveal transformation"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-2/3 accent-[#D7B65F] cursor-pointer"
        />

        {/* GOLD HANDLE DOT */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border border-[#E3C770] bg-black/70 shadow-[0_0_10px_rgba(227,199,112,0.8)] pointer-events-none"
          style={{ left: `${pos}%` }}
        />
      </div>
    </div>
  );
}
