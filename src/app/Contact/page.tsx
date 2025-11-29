"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export default function ContactPage() {
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
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)]">
            Designed for comfort.{" "}
            <span className="text-[#E3C770]">Dedicated to precision.</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Our smile concierge is here to assist with appointments, treatment inquiries, and personalised care.
          </p>
        </motion.div>
      </section>

      {/* CONTACT + FORM GRID */}
      <section className="px-6 pt-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT: CONTACT DETAILS */}
          <motion.div
            {...fadeUp(0)}
            className="space-y-8 rounded-3xl border border-[#E3C770]/25 bg-[#0f0d0a] p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
          >
            <h2 className="text-2xl font-[var(--font-playfair)] font-semibold mb-4">
              Get in touch
            </h2>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-[#E3C770] text-xl" />
              <div>
                <p className="text-sm text-gray-300">Call Us</p>
                <p className="text-lg font-semibold">+91 94457 39688</p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#E3C770] text-xl" />
              <div>
                <p className="text-sm text-gray-300">Studio Address</p>
                <p className="text-lg font-semibold">
                  AesthetiQ Dental Clinic,<br />
                  141/73, Pillaiyar Koil Street, Jafferkhanpet, Chennai – 600083.
                </p>
              </div>
            </div>

            {/* TIMINGS */}
            <div className="flex items-start gap-4">
              <FaClock className="text-[#E3C770] text-xl" />
              <div>
                <p className="text-sm text-gray-300">Timings</p>
                <p className="text-lg font-semibold">
                  Mon – Sat : 10 AM – 1 PM 4 PM - 9 PM <br />
                  Sun : By Appointment
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/918667087095"
              className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_24px_rgba(227,199,112,0.35)] hover:shadow-[0_0_40px_rgba(227,199,112,0.5)] transition"
            >
              Chat with Smile Concierge
            </a>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-3xl border border-[#E3C770]/25 bg-[#0f0d0a] p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
          >
            <h2 className="text-2xl font-[var(--font-playfair)] font-semibold mb-6">
              Book an appointment
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-400 focus:border-[#E3C770]/40 outline-none"
                  placeholder="Aesthetiq Dental Clinic"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-400 focus:border-[#E3C770]/40 outline-none"
                  placeholder="+91 8667087095"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Treatment of Interest
                </label>
                <select
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-[#E3C770]/40 outline-none"
                >
                  <option>Smile Design</option>
                  <option>Dental Cleaning</option>
                  <option>Aligners</option>
                  <option>Whitening</option>
                  <option>Implants</option>
                  <option>Kids Dentistry</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-400 focus:border-[#E3C770]/40 outline-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="button"
                className="w-full mt-3 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_24px_rgba(227,199,112,0.35)] hover:shadow-[0_0_35px_rgba(227,199,112,0.55)] transition"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pt-20">
        <motion.div
          {...fadeUp(0)}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#E3C770]/30 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9328098155087!2d80.205!3d13.023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677bda9f2b0f%3A0x76b5ccbd2f468f30!2sJafferkhanpet%2C%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-[380px]"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
}
