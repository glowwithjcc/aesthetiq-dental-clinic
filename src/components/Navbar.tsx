"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [glass, setGlass] = useState(false);

  useEffect(() => {
    const s = () => setGlass(window.scrollY > 50);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        glass ? "bg-black/60 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-serif text-gold">AesthetiQ</h1>

        <div className="hidden md:flex gap-10 text-lg">
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#gallery" className="hover:text-gold">Gallery</a>
          <a href="#reviews" className="hover:text-gold">Reviews</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>
      </div>
    </nav>
  );
}
