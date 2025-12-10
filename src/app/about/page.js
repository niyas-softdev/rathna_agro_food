export default function AboutPage() {
  const stats = [
    { label: "Completed Shipments", value: "10k+", sub: "Millets & heritage rice" },
    { label: "Active Customers", value: "15k", sub: "Retailers & brands" },
    { label: "Years in Mastery", value: "10k+", sub: "Process discipline" },
    { label: "Workshops Hosted", value: "45+", sub: "Quality & sourcing" },
  ];

  const badges = [
    "Heritage rice experts",
    "Export-ready documentation",
    "Clean-label sourcing",
    "Timely logistics",
  ];

  const pillars = [
    { title: "Quality at source", desc: "Grower and aggregator partnerships, aligned to seasonality and soil." },
    { title: "Process discipline", desc: "Multistage cleaning, grading, moisture checks and lot traceability." },
    { title: "Export readiness", desc: "Docs, fumigation, packing specs and compliance tailored per destination." },
    { title: "Customer-first", desc: "Transparent timelines, responsive coordination, issue resolution." },
  ];

  const process = [
    { step: "01", title: "Curate origins", desc: "Select heritage rice, millets and staples suited to your spec and market." },
    { step: "02", title: "Clean & grade", desc: "Destoning, dehusking, grading, color sorting; moisture aligned to spec." },
    { step: "03", title: "Pack & protect", desc: "Food-safe materials, tamper-evident seals, private label and retail-ready." },
    { step: "04", title: "Ship on time", desc: "Export docs, labeling, and dispatch windows synced to your launch dates." },
  ];

  const assurance = [
    "Moisture, broken %, FM checks on every lot",
    "Food-safe packing & tamper evidence",
    "Color sorting and visual uniformity",
    "Custom labeling for retail / marketplace",
    "Compliance for USA, EU, Gulf, Far East, AU",
    "Responsive support 24/7",
  ];

  const channels = [
    "Modern trade & marketplaces (Amazon, Flipkart, Jiomart, BigBasket, Meesho)",
    "Private label for D2C and retail brands",
    "HoReCa supply for consistent kitchen outcomes",
    "Industrial & institutional buyers needing predictable spec",
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.1),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(134,239,172,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0f172a]/70 to-[#0b1220]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">Our vision, your growth</h1>
          <p className="text-sm sm:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
            Your vision, our expertise. We help your products get noticed by delivering consistent,
            export-ready grains that make your brand stand out.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs sm:text-sm text-white/85"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] mr-2" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-center">
          <div className="glass-soft p-6 sm:p-7 lg:p-8 border border-white/10 space-y-4" data-aos="fade-right">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Your success gets noticed. Your leads dominate.
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We are a 2023-founded agro brand specializing in heritage rice, millets, staples and
              clean-label sourcing. Our process discipline, grading accuracy and export-ready packing
              help retailers, brands and marketplaces scale confidently.
            </p>
            <div className="space-y-3 text-sm sm:text-base text-white/80 leading-relaxed">
              <p>
                Rathna Agro Foods specialises in sourcing, cleaning and supplying high-quality millets,
                pulses, cereals and whole spices for the domestic and export markets. We work closely
                with farmers, aggregators and accredited processors to ensure every lot we dispatch
                meets stringent requirements for hygiene and grading.
              </p>
              <p>
                Our strength lies in consistency — in quality, documentation and service. Whether you are
                a wholesaler, retailer, food manufacturer or institutional buyer, we focus on building
                long-term relationships based on transparency and reliability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-sm text-white/80">
                <div className="text-lg font-bold text-[#fbbf24]">24/7</div>
                Support & coordination across sourcing and dispatch.
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-sm text-white/80">
                <div className="text-lg font-bold text-[#86efac]">Multi-origin</div>
                Heritage grains, millets, staples—curated, cleaned, graded.
              </div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-5 py-2.5 text-sm font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30 hover:-translate-y-0.5 transition-all"
              >
                Talk to us
              </a>
              <a
                href="/products"
                className="text-sm font-semibold text-white/85 hover:text-[#fbbf24] transition-colors"
              >
                View products →
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4" data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3]">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(251,191,36,0.15),rgba(134,239,172,0.12))]" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3]">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(96,165,250,0.12),rgba(251,191,36,0.15))]" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] sm:col-span-2">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(134,239,172,0.12),rgba(15,23,42,0.8))]" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" data-aos="fade-up" data-aos-delay="120">
          {stats.map((item) => (
            <div key={item.label} className="glass-soft p-5 sm:p-6 border border-white/5 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-[#fbbf24]">{item.value}</div>
              <div className="text-sm sm:text-base font-semibold text-white">{item.label}</div>
              <div className="text-xs sm:text-sm text-white/70">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="glass-soft p-6 sm:p-7 lg:p-8 border border-white/10 space-y-4" data-aos="fade-up" data-aos-delay="160">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">What we stand for</p>
              <h2 className="text-xl sm:text-2xl font-semibold">Principles that protect your brand</h2>
            </div>
            <span className="text-xs sm:text-sm text-white/70">Consistency, compliance, and clean-label sourcing.</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-sm font-semibold text-[#fbbf24]">{p.title}</div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="glass-soft p-6 sm:p-7 lg:p-8 border border-white/10 space-y-5" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">Process</p>
              <h2 className="text-xl sm:text-2xl font-semibold">How we deliver on-time, every time</h2>
            </div>
            <a
              href="/products"
              className="text-sm font-semibold text-[#fbbf24] hover:text-white transition-colors"
            >
              View product specs →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {process.map((s) => (
              <div key={s.step} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#fbbf24] font-semibold text-sm">
                  <span className="h-7 w-7 rounded-full bg-[#fbbf24]/15 border border-[#fbbf24]/30 flex items-center justify-center text-xs text-[#fbbf24]">
                    {s.step}
                  </span>
                  {s.title}
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Assurance & Channels */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="glass-soft p-6 sm:p-7 lg:p-8 border border-white/10 space-y-4" data-aos="fade-up" data-aos-delay="220">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">Quality assurance</p>
            <h2 className="text-xl sm:text-2xl font-semibold">Checks that de-risk your purchase</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {assurance.map((item) => (
                <div key={item} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed">
                  <span className="text-[#fbbf24] mr-2">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-soft p-6 sm:p-7 lg:p-8 border border-white/10 space-y-4" data-aos="fade-up" data-aos-delay="240">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">Channel fit</p>
            <h2 className="text-xl sm:text-2xl font-semibold">Where we help you win</h2>
            <div className="space-y-3">
              {channels.map((c) => (
                <div key={c} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed">
                  <span className="text-[#86efac] mr-2">•</span>
                  {c}
                </div>
              ))}
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-5 py-2.5 text-sm font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30 hover:-translate-y-0.5 transition-all"
              >
                Plan a rollout
              </a>
              <a
                href="/products"
                className="text-sm font-semibold text-white/85 hover:text-[#fbbf24] transition-colors"
              >
                See assortments →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
