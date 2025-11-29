"use client";

import { motion } from "framer-motion";
import {
  FaCrown,
  FaSpa,
  FaStar,
  FaTooth
} from "react-icons/fa";
import {
  LuHeartPulse,
  LuSparkles,
  LuSmilePlus,
  LuStethoscope
} from "react-icons/lu";

import BeforeAfter from "@/components/BeforeAfter";
import InstagramShowcase from "@/components/InstagramShowcase";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.85, delay },
});

export default function Home() {
  const experiences = [
    {
      icon: <FaSpa className="text-3xl text-[#E3C770]" />,
      title: "Lounge-Like Comfort",
      description:
        "Aromatherapy suites, curated playlists, and warm towels for a spa-inspired visit.",
    },
    {
      icon: <LuSparkles className="text-3xl text-[#E3C770]" />,
      title: "Digital Smile Preview",
      description:
        "See your bespoke smile design with 3D simulations before treatment begins.",
    },
    {
      icon: <LuHeartPulse className="text-3xl text-[#E3C770]" />,
      title: "Gentle, Precise Care",
      description:
        "Microscopic dentistry, pain-minimised protocols, and premium materials only.",
    },
  ];

  const services = [
    {
      icon: <FaTooth className="text-xl" />,
      title: "Smile Design Studio",
      description:
        "Porcelain veneers, laser gum sculpting, and facially driven smile makeovers.",
    },
    {
      icon: <LuStethoscope className="text-xl" />,
      title: "Preventive & Wellness",
      description:
        "Comprehensive hygiene, gum therapy, and bi-yearly luxury maintenance plans.",
    },
    {
      icon: <LuSmilePlus className="text-xl" />,
      title: "Aligners & Orthodontics",
      description:
        "Clear aligners, invisible braces, and bite balancing for lasting harmony.",
    },
    {
      icon: <FaCrown className="text-xl" />,
      title: "Implants & Full Mouth Rehab",
      description:
        "Zirconia crowns, guided implants, and functional rehabilitation.",
    },
    {
      icon: <LuSparkles className="text-xl" />,
      title: "Teeth Whitening",
      description:
        "In-clinic whitening protocols with minimal sensitivity.",
    },
    {
      icon: <FaSpa className="text-xl" />,
      title: "Kids & Family Dentistry",
      description:
        "Comfort-first visits, sealants, and gentle care for children.",
    },
  ];

  const testimonials = [
    {
      name: "Shreya Narayan",
      title: "Bridal Smile Makeover",
      quote:
        "Every step felt concierge-level. I saw my new smile in 3D before veneers — the result is flawless.",
    },
    {
      name: "Vikram S.",
      title: "Full Mouth Rehab",
      quote:
        "They rebuilt my bite with such precision — zero pain, luxe ambience, and complete transparency.",
    },
    {
      name: "Ishaan Rao",
      title: "Aligner Journey",
      quote:
        "My aligner journey stayed smooth throughout — subtle, fast, and monitored perfectly.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* HERO BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="/videos/bg-hero.mp4" type="video/mp4" />
      </video>

      {/* MARBLE OVERLAY */}
      <div className="absolute inset-0 bg-[url('/backgrounds/marble-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

      {/* GOLD GLOWS */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#E3C770]/30 blur-3xl" />
      <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-[#E3C770]/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div {...fadeUp(0)} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E3C770]">
                  Aesthetic + Precision
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[var(--font-playfair)]">
                Luxury dentistry crafted for{" "}
                <span className="text-[#E3C770]">statement smiles</span>
              </h1>

              <p className="text-lg text-gray-200 max-w-2xl">
                AesthetiQ Dental Studio blends spa-like serenity with
                world-class clinical technology. Concierge appointments,
                digital smile previews, and handcrafted restorations.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_24px_rgba(227,199,112,0.35)] hover:shadow-[0_0_40px_rgba(227,199,112,0.5)] transition"
                >
                  Book a Private Consultation
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 rounded-full border border-[#E3C770]/60 text-[#E3C770] hover:bg-white/5 backdrop-blur"
                >
                  Explore Treatments
                </a>
              </div>

              {/* MINI BADGES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {["4.9⭐ Google Rated", "Pain-minimised Dentistry", "Laser & Digital Suite"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DOCTOR CARD */}
            <motion.div
              {...fadeUp(0.15)}
              className="relative rounded-3xl border border-[#E3C770]/30 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E3C770]/10 via-transparent to-[#C4A958]/20" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <FaCrown className="text-3xl text-[#E3C770]" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
                      Lead Aesthetic Dentist
                    </p>
                    <p className="text-2xl font-semibold">Dr. Praveena Devi </p>
                  </div>
                </div>
                <p className="text-gray-200">
                  Implantologist and Cosmetic Dentist. Known for balancing
                  facial harmony with biofunctional precision.
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Smile Designs", value: "1200+" },
                    { label: "Years", value: "12" },
                    { label: "Awards", value: "08" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center"
                    >
                      <p className="text-lg font-bold text-[#E3C770]">
                        {s.value}
                      </p>
                      <p className="text-xs uppercase tracking-[0.16em] text-gray-300">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* SIGNATURE */}
                <div className="rounded-2xl border border-[#E3C770]/40 bg-gradient-to-r from-black to-[#1c1a17] p-4 flex items-center gap-4">
                  <FaStar className="text-[#E3C770]" />
                  <div>
                    <p className="text-sm text-gray-300">Signature Experience</p>
                    <p className="text-lg font-semibold">
                      Dedicated Smile Concierge For Every Appointment
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE HIGHLIGHTS */}
        <section className="pb-14 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp(index * 0.1)}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_10px_45px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/50 border border-[#E3C770]/40">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E3C770]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              {...fadeUp(0)}
              className="text-center mb-12 space-y-3"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#E3C770]">
                Signature Treatments
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)]">
                Luxury dentistry with clinical excellence
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Every protocol is personalised, minimally invasive, and designed to feel indulgent.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...fadeUp(index * 0.08)}
                  className="group rounded-3xl border border-[#E3C770]/25 bg-gradient-to-br from-[#0f0d0a] to-[#1a1712] p-6 shadow-[0_0_35px_rgba(0,0,0,0.35)] hover:border-[#E3C770]/60 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#E3C770] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mt-3">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[#E3C770] text-sm opacity-0 group-hover:opacity-100 transition">
                    Learn more →
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMATIONS */}
        <section
          id="gallery"
          className="py-16 px-6 bg-gradient-to-b from-black via-[#0b0a07] to-black"
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp(0)} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#E3C770]">
                Smile Transformations
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)]">
                Preview the artistry before you commit
              </h2>
              <p className="text-gray-300">
                Explore real patient work. Every transformation is guided by balance, proportion, and translucency.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-200">
                <span className="rounded-full border border-white/15 px-3 py-1">
                  Digital Smile Design
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1">
                  Laser Contouring
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1">
                  Bioesthetic Occlusion
                </span>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="w-full">
              <BeforeAfter />
            </motion.div>
          </div>

          <div className="pt-12">
            <InstagramShowcase />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              {...fadeUp(0)}
              className="text-center mb-12 space-y-3"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#E3C770]">
                Patient Love
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)]">
                Whispers from our private lounge
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Every guest receives bespoke planning, gentle care, and spa-grade comfort.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  {...fadeUp(index * 0.08)}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#E3C770] to-[#C4A958]" />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-300">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-200">“{t.quote}”</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="pb-20 px-6">
          <motion.div
            {...fadeUp(0)}
            className="max-w-5xl mx-auto rounded-[32px] border border-[#E3C770]/40 bg-gradient-to-r from-[#1c1813] via-[#0f0c08] to-[#1c1813] p-10 shadow-[0_0_45px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#E3C770]">
                  Concierge Booking
                </p>
                <h3 className="text-3xl font-semibold mt-2 font-[var(--font-playfair)]">
                  Reserve your luxe smile consultation
                </h3>
                <p className="text-gray-300 mt-2 max-w-2xl">
                  Share your goals and our concierge will arrange a private slot and a customised roadmap.
                </p>
              </div>

              <a
                href="https://wa.me/919445739688"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_24px_rgba(227,199,112,0.35)] hover:shadow-[0_0_40px_rgba(227,199,112,0.5)] transition"
              >
                Chat with our Concierge
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
