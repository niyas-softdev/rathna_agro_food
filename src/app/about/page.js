"use client";

import { useState } from "react";

export default function AboutHighlights() {
  const [play, setPlay] = useState(false);

  const reasons = [
    {
      title: "Heritage Grain Expertise",
      desc: "Deep knowledge in traditional rice and millets sourced from trusted farming regions.",
    },
    {
      title: "Quality-First Process",
      desc: "Multi-stage cleaning, grading and moisture control on every batch.",
    },
    {
      title: "Export Ready Supply",
      desc: "Documentation, packing standards and compliance for global markets.",
    },
    {
      title: "Reliable Partnerships",
      desc: "Long-term relationships with farmers, aggregators and buyers.",
    },
  ];

  const products = [
    {
      name: "Heritage Rice",
      desc: "Karuppu Kavuni, Poongar, Seeraga Samba and other traditional varieties.",
    },
    {
      name: "Millets",
      desc: "Foxtail, Little, Kodo, Barnyard and other nutrient-rich millets.",
    },
    {
      name: "Pulses",
      desc: "Carefully sourced pulses with uniform size and purity.",
    },
    {
      name: "Cereals",
      desc: "Staple grains processed with strict hygiene standards.",
    },
    {
      name: "Whole Spices",
      desc: "Natural spices cleaned and packed to retain aroma and freshness.",
    },
  ];
  const videoUrl = "https://www.youtube.com/embed/ylmDeAxWi_w?rel=0&autoplay=1";  const videos = [
    "https://www.youtube.com/embed/qlv0FVnpICw",
    "https://www.youtube.com/embed/qlv0FVnpICw",
    "https://www.youtube.com/embed/qlv0FVnpICw",
  ];

  return (
    <>
      {/* ABOUT HERO */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Since 2023.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Our company{" "}
                <strong className="text-slate-900">
                  “Rathna Agro Foods”
                </strong>{" "}
                is a trusted agro brand specializing in heritage rice, millets,
                pulses, cereals and whole spices.
              </p>

              <p>
                Through extensive research, we rediscovered the immense health
                benefits of traditional rice and millets.
              </p>

              <p>
                Today, we supply high-quality agro commodities for domestic and
                export markets with strict quality control.
              </p>
            </div>

            <a
              href="/about"
              className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </div>

          {/* RIGHT VIDEO */}
          <div className="flex justify-center lg:justify-center">
      <div
        className="relative 
          w-[260px] h-[460px] 
          lg:w-[300px] lg:h-[530px]
          rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-black"
      >
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Rathna Agro Foods Short"
        />
      </div>
    </div>

        </div>
      </section>

      {/* WHY CHOOSE / PRODUCTS / VIDEOS */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Built on quality, consistency & trust
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-5 text-center space-y-3 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT FOCUS */}
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              Our Product Focus
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Naturally sourced agro products
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-2"
              >
                <h3 className="font-semibold text-slate-800">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href="/blog"
              className="inline-flex rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition"
            >
              Read Our Blogs →
            </a>
          </div>
        </div>

        {/* MANUFACTURING VIDEOS */}
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              Our Manufacturing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              From sourcing to packaging
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((url, index) => (
              <div
                key={index}
                className="aspect-[9/16] rounded-2xl overflow-hidden border border-slate-200 bg-black"
              >
                <iframe
                  src={`${url}?rel=0`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Manufacturing Video ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

              {/* 🌍 International Clients Section */}
<div
  className="mt-14 text-center space-y-6"
  data-aos="fade-up"
  data-aos-delay="200"
>
  <h3 className="text-2xl sm:text-2xl font-semibold text-slate-800">
    International Client's
  </h3>

  <div className="flex justify-center">
    <img
      src="/images/international-flag.png" // ← YOUR SINGLE IMAGE HERE
      alt="International Clients"
      className="w-full max-w-5xl h-auto object-contain drop-shadow-lg"
    />
  </div>
</div>

      </section>
    </>
  );
}
