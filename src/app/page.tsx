"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfter from "@/components/BeforeAfter";
import InstagramShowcase from "@/components/InstagramShowcase";



export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">

      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/bg-hero.mp4" type="video/mp4" />
      </video>
<Navbar />
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/images/black-marble.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      {/* Dark gradient for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#F6E27A] via-[#D7B65F] to-[#F6E27A] bg-clip-text text-transparent"
        >
          AesthetiQ Dental Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          Premium Smile Transformations • Chennai
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a 
            href="/contact"
            className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-[#E3C770] to-[#B89045] text-black shadow-[0_0_20px_#d1a23d70] hover:shadow-[0_0_35px_#d1a23d90] transition-all duration-300"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
      
      {/* your luxury hero already added */}
      <ServicesGrid />
      <BeforeAfter />
      <InstagramShowcase />
    </main>
  );
}
