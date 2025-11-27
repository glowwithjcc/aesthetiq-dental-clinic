"use client";

import { motion } from "framer-motion";

export default function ReviewMarquee() {
  const reviews = [
    {
      name: "Aathira",
      text: "Super calm doctor. Explained every step. No pain at all.",
    },
    {
      name: "Gopi",
      text: "Best dental experience I've ever had. Smile fully changed.",
    },
    {
      name: "Meena",
      text: "Implant was perfect. I can chew normally after years.",
    },
    {
      name: "Kavya",
      text: "Very gentle. Zero judgement. Whole staff is amazing.",
    },
    {
      name: "Rahul",
      text: "Laser gum treatment worked beautifully. No bleeding now.",
    },
  ];

  return (
    <div className="overflow-hidden w-full py-10 bg-bgDark">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-cardDark/60 border border-white/10 shadow-card py-5 px-4 rounded-xl"
          >
            <div className="text-textPrimary font-semibold text-sm">
              {review.name}
            </div>
            <div className="text-textSecondary text-xs mt-1">
              {review.text}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
