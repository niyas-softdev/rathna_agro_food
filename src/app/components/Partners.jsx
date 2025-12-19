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
    "from-orange-500 to-amber-500",
    "from-emerald-500 to-green-500",
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-violet-500",
    "from-pink-500 to-rose-500",
    "from-orange-600 to-amber-600",
  ];
  const gradient = colors[index % colors.length];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  return (
    <div className="glass-soft border border-slate-200/60 px-4 py-3 flex items-center gap-3 hover:border-orange-300/80 hover:shadow-lg transition-all">
      <div
        className={`h-10 w-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}
      >
        {initials}
      </div>
      <span className="text-sm sm:text-base font-semibold text-slate-700">{name}</span>
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              Trusted by leading marketplaces
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Partners & clients</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
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


