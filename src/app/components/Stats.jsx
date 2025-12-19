"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Established", value: 2023, suffix: "", sub: "Rooted in trust" },
  { label: "Clients Served", value: 100, suffix: "+", sub: "Growing partnerships" },
  { label: "Awards", value: 15, suffix: "+", sub: "Quality & service wins" },
];

const regions = ["USA", "Europe", "Middle East (Gulf)", "Far East", "Australia"];

/* 🔢 COUNT UP COMPONENT */
function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 1400; // ms
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
  className="
    relative
    min-h-[70vh] sm:min-h-[85vh]
    flex items-center
    overflow-hidden
    pb-10 sm:pb-0
  "
  data-aos="fade-up"
>

      {/* 🌾 BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contentbg.jpg')" }}
      />

      {/* 🌫 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pt-16 sm:pt-0">
        <div className="max-w-3xl space-y-8 sm:space-y-10">

          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-orange-400">
              Snapshot
            </p>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Wholesome. Natural. <br className="hidden sm:block" />
              Tradition in every grain.
            </h2>

            <p className="text-xs sm:text-base text-slate-200 max-w-xl">
              Trusted quality since 2023—earning awards, serving clients worldwide,
              and exporting to leading global markets.
            </p>
          </div>

          {/* 🔢 STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  backdrop-blur-md bg-white/10
                  border border-white/20
                  rounded-xl p-4 sm:p-5
                  text-center space-y-1.5
                "
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-400">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>

                <div className="text-sm font-semibold text-white">
                  {item.label}
                </div>

                <div className="text-[11px] sm:text-xs text-slate-300">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          {/* 🌍 REGIONS */}
          <div className="space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">
              Countries we export to
            </span>

            <div className="flex flex-wrap gap-2">
              {regions.map((country) => (
                <span
                  key={country}
                  className="
                    inline-flex items-center rounded-full
                    bg-white/10 backdrop-blur
                    border border-white/20
                    px-3 sm:px-4 py-1
                    text-[11px] sm:text-xs text-slate-100
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400 mr-2" />
                  {country}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
