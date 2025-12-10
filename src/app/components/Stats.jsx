"use client";

const stats = [
  { label: "Established", value: "2023", sub: "Rooted in trust" },
  { label: "Clients Served", value: "100+", sub: "Growing partnerships" },
  { label: "Awards", value: "15+", sub: "Quality & service wins" },
];

const regions = ["USA", "Europe", "Middle East (Gulf)", "Far East", "Australia"];

export default function Stats() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3" data-aos="fade-up" data-aos-delay="120">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
            Snapshot
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Wholesome. Natural. Tradition in every grain.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85">
            Trusted quality since 2023—earning awards, serving clients worldwide, and exporting to leading markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="180">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass-soft p-5 sm:p-6 border border-white/5 text-center space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#fbbf24]">{item.value}</div>
              <div className="text-sm sm:text-base font-semibold text-white">{item.label}</div>
              <div className="text-xs sm:text-sm text-white/70">{item.sub}</div>
            </div>
          ))}
        </div>

        <div
          className="glass-soft p-5 sm:p-6 border border-white/5 space-y-3"
          data-aos="fade-up"
          data-aos-delay="220"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#fbbf24]">
              Countries we export to
            </span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {regions.map((country) => (
              <span
                key={country}
                className="inline-flex items-center rounded-full bg-white/5 border border-[#fbbf24]/30 px-3 py-1 text-xs sm:text-sm text-white/85"
              >
                <span className="h-2 w-2 rounded-full bg-[#fbbf24] mr-2" />
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


