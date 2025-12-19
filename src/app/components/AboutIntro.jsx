"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6">

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Since 2023.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="800"
              >
                Our company{" "}
                <strong className="text-slate-900">
                  "Rathna Agro Foods"
                </strong>{" "}
                is a trusted agro brand specializing in heritage rice, millets,
                pulses, cereals and whole spices. Founded in 2023, we began with
                a vision to bring back the precious ancient millets and
                traditional rice varieties that our ancestors consumed decades
                ago.
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                Through extensive market research and exploration, we discovered
                the immense health benefits of these traditional grains. Millets
                and traditional rice are very good for health, offering high
                fiber, low glycemic index, and rich nutritional profiles that
                modern diets often lack.
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="800"
              >
                Today, we work closely with farmers and aggregators to source,
                clean, and supply high-quality agro commodities for both domestic
                and export markets. Our commitment to quality, consistency, and
                reliability has made us a trusted partner for wholesalers,
                retailers, and food brands across the region.
              </p>
            </div>

            <Link
              href="/about"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="700"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Read More
            </Link>
          </div>

          {/* ================= RIGHT IMAGES ================= */}
          {/* ================= RIGHT IMAGES – AESTHETIC COLLAGE ================= */}
<div className="relative">
  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">

    {/* BIG HERO IMAGE */}
    <div
      className="col-span-2 relative h-[320px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl group"
      data-aos="fade-up"
    >
      <Image
        src="/images/aboutintro1.jpg"
        alt="Millets and grains"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>

    {/* IMAGE 2 */}
    <div
      className="relative h-[160px] sm:h-[180px] rounded-xl overflow-hidden shadow-lg group"
      data-aos="fade-right"
      data-aos-delay="150"
    >
      <Image
        src="/images/aboutintro2.jpg"
        alt="Pulses"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        unoptimized
      />
    </div>

    {/* IMAGE 3 */}
    <div
      className="relative h-[160px] sm:h-[180px] rounded-xl overflow-hidden shadow-lg group"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <Image
        src="/images/aboutintro3.jpg"
        alt="Cereals"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        unoptimized
      />
    </div>

    {/* IMAGE 4 */}
    <div
      className="relative h-[140px] sm:h-[160px] rounded-xl overflow-hidden shadow-md group"
      data-aos="fade-up"
      data-aos-delay="450"
    >
      <Image
        src="/images/aboutintro4.jpg"
        alt="Groundnut"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        unoptimized
      />
    </div>

    {/* IMAGE 5 */}
    <div
      className="relative h-[140px] sm:h-[160px] rounded-xl overflow-hidden shadow-md group"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <Image
        src="/images/aboutintro5.jpg"
        alt="Heritage rice"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        unoptimized
      />
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
}
