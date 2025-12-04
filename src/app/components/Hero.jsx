"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/millets.jpg",
    title: "Millets",
    desc: "Nutritious & high-fibre grains.",
  },
  {
    src: "/images/pulses.png",
    title: "Pulses",
    desc: "Protein-rich lentils & dals.",
  },
  {
    src: "/images/cereals.png",
    title: "Cereals & Spices",
    desc: "Staples with authentic flavour.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((newIndex) => {
    if (newIndex === index) return;
    setIndex(newIndex);
  }, [index]);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 relative"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#334155]/50 via-[#475569]/30 to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="space-y-7" data-aos="fade-up" data-aos-delay="120">
          <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-medium text-[#fbbf24] shadow-lg shadow-[#fbbf24]/20 border border-[#fbbf24]/30">
            <span className="h-2 w-2 rounded-full bg-[#fbbf24] animate-pulse" />
            Premium Agro Products
          </span>

          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                RATHNA
              </span>
              <span className="block text-[#86efac] text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                AGRO FOODS
              </span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-white tracking-wide uppercase">
              Millets • Pulses • Cereals • Whole Spices
            </p>

            <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
              Delivering carefully sourced, hygienically processed and
              consistently graded agro commodities, trusted by wholesalers,
              retailers and food brands across the region.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5" data-aos="zoom-in" data-aos-delay="200">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] px-7 sm:px-8 py-3 text-sm font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30 hover:shadow-xl hover:shadow-[#fbbf24]/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Products
              <span className="ml-2 text-xs">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#fbbf24] glass px-7 sm:px-8 py-3 text-sm font-semibold text-[#fbbf24] hover:border-[#fbbf24] hover:bg-[#fbbf24]/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>

            <Link
              href="/products"
              className="text-xs sm:text-sm font-medium text-white/90 underline-offset-4 hover:text-[#fbbf24] hover:underline transition-colors"
            >
              View all categories →
            </Link>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md pt-4 sm:pt-5" data-aos="fade-up" data-aos-delay="260">
            {[
              { label: "100% Genuine", sub: "Farm-sourced" },
              { label: "Consistent", sub: "Quality & grading" },
              { label: "On-time", sub: "Reliable supply" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-gold px-3 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm"
              >
                <div className="font-semibold text-[#fbbf24]">{item.label}</div>
                <div className="text-[11px] sm:text-xs text-white/90">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — PREMIUM CAROUSEL */}
        <div 
          className="relative"
          data-aos="fade-left"
          data-aos-delay="200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-[#fbbf24]/20 via-[#f59e0b]/10 to-transparent rounded-[2.5rem] blur-2xl -z-10"></div>

          <div className="glass-soft p-4 sm:p-5 lg:p-6 rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#fbbf24]/30 blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[#86efac]/20 blur-3xl"></div>

            {/* CAROUSEL IMAGE CONTAINER */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#fbbf24]/30 shadow-2xl shadow-[#fbbf24]/20 group">
              {slides.map((slide, i) => {
                const safeSrc = slide.src && slide.src.trim() !== "" 
                  ? slide.src.replace(/\s+/g, "%20")
                  : "/placeholder.jpg";
                return (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={safeSrc}
                      alt={slide.title || "Product image"}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 460px, 100vw"
                      priority={i === 0}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/50 via-transparent to-transparent"></div>
                  </div>
                );
              })}
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#1e293b]/80 backdrop-blur-sm border border-[#fbbf24]/30 text-[#fbbf24] hover:bg-[#fbbf24]/10 hover:border-[#fbbf24] transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => nextSlide()}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#1e293b]/80 backdrop-blur-sm border border-[#fbbf24]/30 text-[#fbbf24] hover:bg-[#fbbf24]/10 hover:border-[#fbbf24] transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Navigation Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-[#fbbf24] shadow-lg shadow-[#fbbf24]/50"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* INTERACTIVE LABELS BELOW */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs sm:text-sm">
              {slides.map((item, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`glass-gold px-3 py-2 transition-all duration-500 text-left cursor-pointer hover:scale-105 ${
                    i === index
                      ? "scale-105 shadow-lg shadow-[#fbbf24]/30 border-2 border-[#fbbf24]/50"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="font-semibold text-[#fbbf24]">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-white/90">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
