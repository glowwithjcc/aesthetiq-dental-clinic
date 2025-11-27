export default function About() {
  return (
    <section id="about" className="py-28 px-6 fade-in">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/images/praveena.jpg"
          className="rounded-3xl border border-gold/40 shadow-gold"
        />

        <div className="backdrop-blur-sm bg-black/30 p-10 rounded-3xl border border-gold/30 shadow-softGold">
          <h2 className="text-4xl font-serif text-gold mb-6">
            Dr. Praveena Devi
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            MDS Periodontist · Smile Designer · Aesthetic Gum Specialist with
            12+ years of clinical excellence. Known for artistic precision and
            painless dentistry.
          </p>
        </div>

      </div>
    </section>
  );
}
