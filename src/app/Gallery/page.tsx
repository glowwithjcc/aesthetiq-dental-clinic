"use client";

import { motion } from "framer-motion";
import BeforeAfter from "@/components/BeforeAfter";
import InstagramShowcase from "@/components/InstagramShowcase";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export default function GalleryPage() {
  const transformations = [
    {
      before: "/images/gallery/before1.jpg",
      after: "/images/gallery/after1.jpg",
      label: "Smile Design",
    },
    {
      before: "/images/gallery/before2.jpg",
      after: "/images/gallery/after2.jpg",
      label: "Gum Contouring",
    },
    {
      before: "/images/gallery/before3.jpg",
      after: "/images/gallery/after3.jpg",
      label: "Porcelain Veneers",
    },
    {
      before: "/images/gallery/before4.jpg",
      after: "/images/gallery/after4.jpg",
      label: "Aligner Journey",
    },
  ];

  return (
    <main className="relative bg-black text-white pb-20 overflow-hidden">
      {/* GOLD GLOWS */}
      <div className="absolute left-[-12%] top-32 h-96 w-96 bg-[#E3C770]/20 blur-[140px] rounded-full"></div>
      <div className="absolute right-[-10%] bottom-10 h-[420px] w-[420px] bg-[#E3C770]/15 blur-[150px] rounded-full"></div>

      {/* HEADER */}
      <section className="pt-32 pb-14 px-6">
        <motion.div
          {...fadeUp(0)}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-[#E3C770] uppercase">
            Smile Gallery
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)]">
            Real transformations crafted with{" "}
            <span className="text-[#E3C770]">precision & artistry</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore real patient results — each transformation designed using
            digital planning, translucency mapping, and bioesthetic balance.
          </p>
        </motion.div>
      </section>

      {/* BEFORE / AFTER GRID */}
      <section className="px-6 pt-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className="rounded-3xl border border-[#E3C770]/25 bg-[#0f0d0a] p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >
              <p className="text-[#E3C770] text-sm mb-3 tracking-wide uppercase">
                {item.label}
              </p>

              <BeforeAfter
                before={item.before}
                after={item.after}
                height={350}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM SHOWCASE */}
      <section className="px-6 pt-16">
        <motion.div
          {...fadeUp(0)}
          className="max-w-4xl mx-auto text-center mb-8 space-y-2"
        >
          <p className="text-xs tracking-[0.25em] text-[#E3C770] uppercase">
            Video Showcase
          </p>
          <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)]">
            Watch our smile stories
          </h2>
        </motion.div>

        <InstagramShowcase />
      </section>

      {/* CTA */}
      <section className="px-6 pt-20">
        <motion.div
          {...fadeUp(0)}
          className="max-w-5xl mx-auto rounded-3xl border border-[#E3C770]/40 p-10 bg-gradient-to-r from-[#1c1813] via-[#0f0c08] to-[#1c1813] shadow-[0_0_45px_rgba(0,0,0,0.4)] text-center"
        >
          <h3 className="text-3xl font-[var(--font-playfair)] font-semibold">
            Start your smile transformation journey
          </h3>

          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Book a private consultation with our smile concierge and explore a
            personalised treatment plan.
          </p>

          <a
            href="https://wa.me/918667087095"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_24px_rgba(227,199,112,0.35)] hover:shadow-[0_0_40px_rgba(227,199,112,0.5)] transition"
          >
            Chat with our Concierge
          </a>
        </motion.div>
      </section>
    </main>
  );
}
