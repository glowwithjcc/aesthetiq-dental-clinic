export default function InstagramShowcase() {
  const posts = [
    "/insta/1.jpg",
    "/insta/2.jpg",
    "/insta/3.jpg",
    "/insta/4.jpg",
    "/insta/5.jpg",
    "/insta/6.jpg",
  ];

  return (
    <section className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-[#F6E27A] to-[#D7B65F] bg-clip-text text-transparent mb-12">
        Instagram Showcase
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-6 max-w-7xl mx-auto">
        {posts.map((p, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-[#D7B65F]/40 shadow-[0_0_20px_rgba(215,182,95,0.2)]"
          >
            <img src={p} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
