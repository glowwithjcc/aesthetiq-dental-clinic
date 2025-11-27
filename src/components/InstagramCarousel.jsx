"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InstagramCarouselV2() {
  const images = [
    "/insta/1.jpg",
    "/insta/2.jpg",
    "/insta/3.jpg",
    "/insta/4.jpg",
    "/insta/5.jpg"
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Next + Prev functions
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-xl mx-auto py-10 relative">
      {/* Images */}
      <motion.div
        key={index}
        className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          if (info.offset.x < -70) next();
          else if (info.offset.x > 70) prev();
        }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={images[index]}
          alt="Instagram image"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-bgDark/60 px-2 py-1 rounded-full text-white"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-bgDark/60 px-2 py-1 rounded-full text-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-accentGold" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
