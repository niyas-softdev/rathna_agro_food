"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  "/images/millet-hero.png",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
  "/images/flakes-hero.png",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* HEIGHT FIX */}
      <div className="relative w-full h-[280px] sm:h-[60vh] lg:h-[85vh]">

        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Gradient Overlay for Premium Look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* ARROWS (smaller on mobile) */}
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}