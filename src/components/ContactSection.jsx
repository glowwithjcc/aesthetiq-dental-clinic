export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 fade-in">
      <h2 className="text-center text-5xl font-serif text-gold mb-16">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Info card */}
        <div className="backdrop-blur-md bg-black/30 p-10 rounded-3xl border border-gold/30 shadow-softGold">

          <h3 className="text-3xl font-serif text-gold mb-4">AesthetiQ Dental Clinic </h3>

          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            141/73,pillaiyar Koil street, Jafferkhanpet, Chennai, Tamil Nadu  
            <br />
            Smile Design · Gum Therapy · Implants
          </p>

          <p className="text-gray-200 text-lg mb-2">
            📞 Phone: +91 8667087095
          </p>
          <p className="text-gray-200 text-lg mb-2">
            💬 WhatsApp: +91 8667087095
          </p>

        </div>

        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-96 rounded-3xl border border-gold/40 shadow-softGold"
        />
      </div>
    </section>
  );
}
