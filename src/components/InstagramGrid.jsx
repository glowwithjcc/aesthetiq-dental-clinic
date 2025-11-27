"use client";

import Image from "next/image";

export default function InstagramGrid() {
  const images = [
    "/insta/1.jpg",
    "/insta/2.jpg",
    "/insta/3.jpg",
    "/insta/4.jpg",
    "/insta/5.jpg",
    "/insta/6.jpg",
    "/insta/7.jpg",
    "/insta/8.jpg",
    "/insta/9.jpg"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-xl font-semibold mb-6 text-textPrimary">
        Latest from Instagram
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-square">
            <Image
              src={src}
              alt="Instagram post"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
