"use client";
import Marquee from "react-fast-marquee";

export default function Reviews() {
  const reviews = [
    "“The most premium dental experience in Chennai.”",
    "“Dr. Praveena’s smile design is world-class.”",
    "“My gum depigmentation was painless and perfect.”",
    "“Clinic looks like a luxury spa — 10/10.”",
  ];

  return (
    <section id="reviews" className="py-20 fade-in">
      
      <div className="gold-line mb-6"></div>

      <Marquee gradient={false} speed={45}>
        {reviews.map((r, i) => (
          <p
            key={i}
            className="text-2xl font-serif text-gold mx-16"
          >
            {r}
          </p>
        ))}
      </Marquee>

      <div className="gold-line mt-6"></div>

    </section>
  );
}