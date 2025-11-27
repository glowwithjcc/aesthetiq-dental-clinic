export default function Testimonials() {
  const list = [
    "Very gentle doctor, explained everything clearly.",
    "My gum treatment was completely painless!",
    "Best smile design experience ever.",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Patients Say</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {list.map((t, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow">
              <p className="text-gray-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
