"use client";
import { useState } from "react";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-[#F6E27A] to-[#D7B65F] bg-clip-text text-transparent mb-10">
        Before / After Transformations
      </h2>

      <div className="relative w-full max-w-3xl mx-auto h-[450px] rounded-xl overflow-hidden border border-[#D7B65F]/30">

        <img src="/images/before.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <img src="/images/after.jpg" className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: `inset(0 0 0 ${pos}%)` }} />

        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-2/3 accent-[#D7B65F]"
        />
      </div>
    </section>
  );
}
