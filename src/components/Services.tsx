const services = [
  { title: "Smile Design", desc: "Digital artistry for perfect natural smiles." },
  { title: "Gum Depigmentation", desc: "Laser correction of dark gums." },
  { title: "Dental Implants", desc: "Single, multiple & full-mouth implants." },
  { title: "Painless RCT", desc: "Single-visit, advanced rotary RCT." },
  { title: "Braces & Aligners", desc: "Invisalign-style clear aligners." },
  { title: "Teeth Whitening", desc: "Instant results, long-lasting shine." },
  { title: "Cleaning & Polishing", desc: "Gentle ultrasonic stain removal." },
  { title: "Kids Dentistry", desc: "Comfort-first approach for children." },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 px-6 fade-in">
      <h2 className="text-center text-4xl font-bold text-gold">Our Services</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mt-14">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-black/40 border border-gold rounded-xl hover:scale-105 transition shadow-gold">
            <h3 className="text-xl text-gold font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
