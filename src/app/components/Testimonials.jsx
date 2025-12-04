import { HiStar } from "react-icons/hi2";
import { testimonials } from "../../data/testimonials";

function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <div className="inline-flex items-center gap-1 text-[#facc15]">
      {Array.from({ length: 5 }).map((_, i) => (
        <HiStar
          key={i}
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
            i < full ? "fill-[#facc15]" : "fill-transparent stroke-[#facc15]/40"
          }`}
        />
      ))}
      <span className="text-[11px] sm:text-xs font-medium text-white/80">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f97316] flex items-center justify-center text-xs font-bold text-[#0f172a] shadow-lg shadow-[#f97316]/40">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div
          className="flex flex-col items-start sm:flex-row sm:items-end sm:justify-between gap-4"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
              Customer Voices
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Loved by families & retailers
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-white/85">
              Genuine feedback from people who cook with our products every day – from home
              kitchens to growing food businesses.
            </p>
          </div>

          <div className="glass-gold px-4 py-3 rounded-2xl text-xs sm:text-sm text-white/90 flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#facc15] font-semibold text-sm">
              <HiStar className="h-4 w-4 fill-[#facc15]" />
              4.8/5
            </div>
            <span className="h-4 w-px bg-white/20" />
            <p>Based on recent customer reviews</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, idx) => (
            <article
              key={item.name + item.date}
              className="relative glass-soft p-5 sm:p-6 flex flex-col gap-4 border border-white/5 hover:border-[#fbbf24]/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              data-aos="flip-up"
              data-aos-delay={idx * 120 + 180}
            >
              <div className="flex items-center gap-3">
  <Avatar name={item.name} />

  <div className="space-y-0.5">
    <p className="text-sm font-semibold text-white">{item.name}</p>
    <p className="text-[11px] text-white/60">{item.date}</p>

    {/* Stars moved BELOW name & date */}
    <div className="pt-1">
      <Stars rating={item.rating} />
    </div>
  </div>
</div>


              <p className="relative text-xs sm:text-sm text-white/90 leading-relaxed">
                <span className="absolute -left-1 -top-3 text-3xl text-[#fbbf24]/25">“</span>
                <span className="pl-3 block">{item.review}</span>
              </p>

              <div className="pt-1 text-[11px] text-[#86efac]/90 font-medium tracking-wide uppercase">
                Verified purchase
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🌍 International Clients Section */}
<div
  className="mt-14 text-center space-y-6"
  data-aos="fade-up"
  data-aos-delay="200"
>
  <h3 className="text-2xl sm:text-2xl font-semibold text-white">
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
  );
}

