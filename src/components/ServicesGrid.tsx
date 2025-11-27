export default function ServicesGrid() {
  const services = [
    "Smile Design",
    "Scaling & Polishing",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Dental Implants",
    "Aligners & Braces",
    "Kids Dentistry",
  ];

  return (
    <section className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-[#F6E27A] to-[#D7B65F] bg-clip-text text-transparent mb-12">
        Our Premium Dental Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-8 bg-black/40 border border-[#D7B65F]/30 backdrop-blur-md
                       hover:border-[#D7B65F] hover:shadow-[0_0_25px_rgba(215,182,95,0.4)]
                       transition-all duration-400 cursor-pointer"
          >
            <h3 className="text-2xl text-[#F6E27A] font-semibold">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
