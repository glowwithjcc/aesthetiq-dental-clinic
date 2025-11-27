export default function Gallery() {
  const images = [
    "/gallery/case1.jpg",
    "/gallery/case2.jpg",
    "/gallery/case3.jpg",
    "/gallery/case4.jpg",
    "/gallery/case5.jpg",
    "/gallery/case6.jpg",
  ];

  return (
    <section id="gallery" className="py-28 px-6 fade-in">
      <h2 className="text-center text-5xl font-serif text-gold mb-16">
        Gallery
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {images.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img}
              className="
                w-full h-72 object-cover rounded-xl 
                border border-gold/40 
                shadow-softGold 
                transition 
                group-hover:shadow-gold
                group-hover:scale-[1.03]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
