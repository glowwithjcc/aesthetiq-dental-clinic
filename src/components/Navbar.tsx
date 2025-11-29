"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-[var(--font-playfair)] text-2xl font-semibold tracking-wide">
          <span className="text-[#E3C770]">AesthetiQ</span>{" "}
          <span className="text-white">Dental</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-[#E3C770] transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-4/5 h-full bg-black/95 backdrop-blur-xl border-l border-[#E3C770]/30 p-8 z-50"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
              >
                <HiX />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <div className="mt-12 flex flex-col gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-xl text-gray-200 hover:text-[#E3C770] transition font-medium border-b border-white/10 pb-3"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* WHATSAPP */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
              <a
                href="https://wa.me/919445739688"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E3C770] to-[#C4A958] text-black font-semibold shadow-[0_0_20px_rgba(227,199,112,0.35)] hover:shadow-[0_0_30px_rgba(227,199,112,0.5)] transition"
              >
                WhatsApp Concierge
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
