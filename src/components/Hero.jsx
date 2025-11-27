export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center text-center px-6 fade-in">
      <div className="backdrop-blur-sm bg-black/40 p-12 rounded-3xl border border-gold/30 shadow-softGold">
        
        <h1 className="text-5xl md:text-7xl font-serif text-gold-glow tracking-wide">
          AESTHETIQ DENTAL
        </h1>

        <div className="gold-line mt-6 mb-6"></div>

        <p className="text-xl md:text-2xl font-light text-gray-200">
          Luxe Smile Design · Gum Aesthetics · Premium Dental Care
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block px-10 py-3 border border-gold text-gold rounded-full backdrop-blur-sm bg-black/20 hover:bg-gold hover:text-black transition shadow-gold"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
