"use client";

import { motion } from "framer-motion";
import {
  FaTooth,
  FaCrown,
  FaSmileBeam,
  FaChild,
  FaTeethOpen,
} from "react-icons/fa";
import {
  LuSparkles,
  LuStethoscope,
  LuAlignJustify,
  LuSmilePlus,
} from "react-icons/lu";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export default function ServicesPage() {
  const services = [
    {
      icon: <FaSmileBeam className="text-3xl text-[#E3C770]" />,
      title: "Digital Smile Design",
      description:
        "3D-planned smile transformations with facial harmony mapping and translucent ceramic veneers.",
    },
    {
      icon: <LuStethoscope className="text-3xl text-[#E3C770]" />,
      title: "Premium Dental Cleaning",
      description:
        "Pain-free ultrasonic polishing, gum detox and Luxe hygiene sessions.",
    },
    {
      icon: <LuAlignJustify className="text-3xl text-[#E3C770]" />,
      title: "Clear Aligners",
      description:
        "Invisible aligners for discreet teeth straightening with monthly digital monitoring.",
    },
    {
      icon: <FaCrown className="text-3xl text-[#E3C770]" />,
      title: "Zirconia Crowns & Bridges",
      description:
        "Ultra-strong, natural-looking crowns crafted for longevity and aesthetics.",
    },
    {
      icon: <FaTooth className="text-3xl text-[#E3C770]" />,
      title: "Dental Implants",
      description:
        "Guided implant surgery for missing teeth — fast, safe and precise.",
    },
    {
      icon: <LuSparkles className="text-3xl text-[#E3C770]" />,
      title: "Laser Teeth Whitening",
      description:
        "Instant brightening with minimal sensitivity using premium whitening systems.",
    },
        {
          icon: <FaChild className="text-3xl text-[#E3C770]" />,
          title: "Kids Dentistry",
          description:
            "Gentle, fear-free dental visits with protective sealants and cavity prevention.",
        },
      ];
    
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Services
            </h1>
            <p className="text-center text-gray-400 mb-16">
              Premium dental solutions crafted for your smile
            </p>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  {...fadeUp(index * 0.1)}
                  className="bg-[#0f3460] p-8 rounded-lg hover:bg-[#16213e] transition-colors"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }
