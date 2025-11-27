"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-500 
        ${scrolled ? 
          "bg-black/70 backdrop-blur-md border-b border-[#D7B65F]/40 shadow-[0_4px_20px_rgba(215,182,95,0.25)]" 
          : 
          "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#F6E27A] to-[#D7B65F] bg-clip-text text-transparent">
            AesthetiQ Dental
          </span>
        </Link>

        <div className="flex gap-8 text-gray-300 text-lg">
          <Link href="/services" className="hover:text-[#F6E27A] transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#F6E27A] transition">Before/After</Link>
          <Link href="/contact" className="hover:text-[#F6E27A] transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
