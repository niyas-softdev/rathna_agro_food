"use client";

const partners = [
  "Meesho",
  "Flipkart",
  "Amazon.com",
  "Amazon.in",
  "Jiomart",
  "BigBasket",
];

function LogoBadge({ name, index }) {
  const colors = [
    "from-[#fbbf24] to-[#f59e0b]",
    "from-[#86efac] to-[#22c55e]",
    "from-[#60a5fa] to-[#3b82f6]",
    "from-[#c084fc] to-[#a855f7]",
    "from-[#f472b6] to-[#ec4899]",
    "from-[#f97316] to-[#fb923c]",
  ];
  const gradient = colors[index % colors.length];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  return (
    <div className="glass-soft border border-white/5 px-4 py-3 flex items-center gap-3">
      <div
        className={`h-10 w-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-sm font-bold text-[#0f172a] shadow-lg`}
      >
        {initials}
      </div>
      <span className="text-sm sm:text-base font-semibold text-white/90">{name}</span>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" data-aos="fade-up" data-aos-delay="120">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
              Trusted by leading marketplaces
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Partners & clients</h2>
          </div>
          <p className="text-xs sm:text-sm text-white/75 max-w-md">
            Brands and marketplaces that rely on Rathna Agro Foods for consistent quality and timely supply.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="180">
          {partners.map((name, idx) => (
            <LogoBadge key={name} name={name} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


