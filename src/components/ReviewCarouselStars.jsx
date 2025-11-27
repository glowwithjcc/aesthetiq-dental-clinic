"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReviewCarouselStars() {
  const reviews = [
    {
      name: "Aathira",
      stars: 5,
      text: "Super calm doctor. Zero pain, fully explained treatment.",
    },
    {
      name: "Vignesh",
      stars: 5,
      text: "Best gum treatment ever. Bad breath gone in 1 week.",
    },
    {
      name: "Kavya",
      stars: 5,
      text: "Smile makeover changed my entire face. Very natural.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <div className="max-w-xl mx-auto py-10 relative">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cardDark/60 p-6 rounded-xl border border-white/10 shadow-card"
      >
        <div className="text-textPrimary font-semibold">
          {reviews[index].name}
        </div>

        <div className="text-yellow-400 text-sm mt-1">
          {"★".repeat(reviews[index].stars)}
        </div>

        <div className="text-textSecondary text-sm mt-2">
          {reviews[index].text}
        </div>
      </motion.div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white/60"
        onClick={prev}
      >
        ‹
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60"
        onClick={next}
      >
        ›
      </button>
    </div>
  );
}
