"use client";

import { motion } from "framer-motion";
import { FaCrown, FaStar } from "react-icons/fa";
import { LuSparkles, LuHeart, LuUserCheck } from "react-icons/lu";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export default function AboutPage() {
  const values = [
    {
      icon: <LuSparkles className="text-3xl text-[#E3C770]" />,
      title: "Aesthetic Precision",
      description:
        "Every treatment is designed to blend with your natural features — from translucency to facial line angles.",
    },
    {
      icon: <LuHeart className="text-3xl text-[#E3C770]" />,
      title: "Comfort First",
      description:
        "Aromatherapy suites, warm lighting, spa-grade ambience, and gentle protocols for a calming visit.",
    },
    {
      icon: <LuUserCheck className="text-3xl text-[#E3C770]" />,
      title: "Transparent Care",
      description:
        "Clear explanations, treatment previews, and consent-first dentistry with personalised planning.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white pb-20">
      {/* GOLD GLOWS */}
      <div className="absolute left-[-10%] top-32 h-96 w-96 bg-[#E3C770]/20 blur-[140px] rounded-full"></div>
      <div className="absolute right-[-15%] bottom-10 h-[420px] w-[420px] bg-[#E3C770]/15 blur-[150px] rounded-full"></div>

      {/* HEADER SECTION */}
      <section className="pt-32 pb-14 px-6">
        <motion.div
          {...fadeUp(0)}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          <p className="text-xs tracking-[0.25em] text-[#E3C770] uppercase">
            Our Philosophy
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)]">
            Dentistry reimagined as{" "}
            <span className="text-[#E3C770]">a luxury experience</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            AesthetiQ Dental brings together high-end ambience, digital
            technology, and handcrafted precision to create smiles that feel
            natural, confident, and beautifully balanced.
          </p>
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative rounded-3xl overflow-hidden border border-[#E3C770]/25 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
          >
            <img
              src="/images/about/dental-studio.jpg"
              alt="AesthetiQ Dental Studio"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-[var(--font-playfair)] mb-4">
              Where beauty meets precision
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our studio is built on a simple idea: dentistry should feel
              pampering, personalised, and deeply transformative — not clinical
              or stressful.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              From the aroma profile of the lobby to the translucency grade of
              your veneers, every detail is intentionally crafted.
            </p>
            <p className="text-gray-300">
              The result? A dental experience that feels indulgent, calming,
              and profoundly confidence-boosting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div {...fadeUp(0)}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#E3C770] mb-2">
              Lead Aesthetic Dentist
            </p>

            <h2 className="text-3xl font-[var(--font-playfair)]">
              Dr. Praveena Devi 
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              With a fellowship in cosmetic dentistry and Implantology , Dr. Praveena Devi 
              specialises in smile design, translucency layering, and
              bioesthetic bite balancing.
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Her approach blends digital technology with artisanal precision —
              each veneer, each contour, and each shade is customised to your
              facial structure.
            </p>

            {/* Signature Badge */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#1c1813] via-[#0f0c08] to-[#1c1813] border border-[#E3C770]/30 backdrop-blur">
              <div className="flex items-center gap-3">
                <FaStar className="text-[#E3C770]" />
                <div>
                  <p className="text-sm text-gray-300">
                    Signature Philosophy
                  </p>
                  <p className="text-lg font-semibold">
                    Natural, subtle, and radiantly balanced smiles
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative rounded-3xl overflow-hidden border border-[#E3C770]/25 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
          >
            <img
              src="/images/about/doctor.jpg"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-16">
        <motion.div
          {...fadeUp(0)}
          className="text-center space-y-4 max-w-4xl mx-auto mb-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#E3C770]">
            Our Values
          </p>

          <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-semibold">
            The soul of AesthetiQ Dental
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp(index * 0.1)}
              className="rounded-3xl p-6 bg-gradient-to-br from-[#0f0d0a] to-[#1a1712] border border-[#E3C770]/25 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl text-[#E3C770] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-10">
        <motion.div
          {...fadeUp(0)}
          className="max-w-5xl mx-auto rounded-3xl border border-[#E3C770]/40 p-10 bg-gradient-to-r from-[#1c1813] via-[#0f0c08] to-[#1c1813] shadow-[0_0_45px_rgba(0,0,0,0.4)] text-center"
        >
          <h3 className="text-3xl font-[var(--font-playfair)] font-semibold">
            Ready to experience luxury dentistry?
          </h3>

          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Our smile concierge will help you schedule a private session and
            design a personalised treatment plan.
          </p>

          <a
            href="https://wa.me/919445739688"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_24px_rgba(227,199,112,0.35)] hover:shadow-[0_0_40px_rgba(227,199,112,0.5)] transition"
          >
            Chat with our Concierge
          </a>
        </motion.div>
      </section>
    </main>
  );
}
