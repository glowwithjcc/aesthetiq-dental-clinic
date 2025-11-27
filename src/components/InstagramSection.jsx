import React from "react";

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-28 px-6 fade-in">
      <h2 className="text-center text-5xl font-serif text-gold mb-16">
        Instagram Highlights
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="backdrop-blur-md bg-black/30 p-4 rounded-2xl border border-gold/20 shadow-softGold">
          <iframe 
            src="https://www.instagram.com/p/XXXXXXXX/embed"
            className="w-full h-[500px] rounded-xl border border-gold/30"
          />
        </div>

        <div className="backdrop-blur-md bg-black/30 p-4 rounded-2xl border border-gold/20 shadow-softGold">
          <iframe 
            src="https://www.instagram.com/p/XXXXXXXX/embed"
            className="w-full h-[500px] rounded-xl border border-gold/30"
          />
        </div>

        <div className="backdrop-blur-md bg-black/30 p-4 rounded-2xl border border-gold/20 shadow-softGold">
          <iframe 
            src="https://www.instagram.com/p/XXXXXXXX/embed"
            className="w-full h-[500px] rounded-xl border border-gold/30"
          />
        </div>

      </div>
    </section>
  );
}
