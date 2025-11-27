"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServiceGrid() {
  const services = [
    {
      name: "Smile Design",
      link: "/smile design",
      img: "/services/smile.jpg",
    },
    {
      name: "Dental Implants",
      link: "/dental implants",
      img: "/services/implants.jpg",
    },
    {
      name: "Endodontics (Root Canal)",
      link: "/endodontics",
      img: "/services/endodontics.jpg",
    },
    {
      name: "Periodontics (Gum Care)",
      link: "/periodontics",
      img: "/services/periodontics.jpg",
    },
    {
      name: "Pedodontics (Kids Dentistry)",
      link: "/pedodontics",
      img: "/services/pedodontics.jpg",
    },
    {
      name: "Prosthodontics",
      link: "/prosthodontics",
      img: "/services/prosthodontics.jpg",
    },
    {
      name: "Restorations",
      link: "/restorations",
      img: "/services/restorations.jpg",
    },
    {
      name: "Orthodontics",
      link: "/orthodontics",
      img: "/services/orthodontics.jpg",
    },
    {
      name: "Extractions",
      link: "/extractions",
      img: "/services/extractions.jpg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-textPrimary text-center mb-10">
        Our Dental Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className="bg-cardDark/60 border border-white/10 rounded-xl overflow-hidden shadow-card hover:scale-[1.03] hover:border-accentGold/40 transition-all cursor-pointer">
              
              {/* IMAGE */}
              <div className="relative w-full h-[160px] md:h-[180px] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="p-5">
                <div className="font-semibold text-textPrimary mb-1">
                  {service.name}
                </div>
                <div className="text-textSecondary text-sm">
                  Learn more →
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
