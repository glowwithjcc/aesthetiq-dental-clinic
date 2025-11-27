export default function ValueGrid() {
  return (
    <section className="py-20 px-6 fade-in">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="p-8 bg-black/40 border border-gold rounded-2xl shadow-gold">
          <h3 className="text-2xl text-gold font-bold">Premium Dental Care</h3>
          <p className="mt-3 text-gray-300">
            Smile design, implants, gum therapy & full-mouth rehab.
          </p>
        </div>

        <div className="p-8 bg-black/40 border border-gold rounded-2xl shadow-gold">
          <h3 className="text-2xl text-gold font-bold">12+ Years Expertise</h3>
          <p className="mt-3 text-gray-300">
            MDS Periodontist known for precision & gentle care.
          </p>
        </div>

        <div className="p-8 bg-black/40 border border-gold rounded-2xl shadow-gold">
          <h3 className="text-2xl text-gold font-bold">Painless Dentistry</h3>
          <p className="mt-3 text-gray-300">
            Modern tech + compassionate approach.
          </p>
        </div>

      </div>
    </section>
  );
}
