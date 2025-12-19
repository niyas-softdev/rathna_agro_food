import { HiStar } from "react-icons/hi2";
import { testimonials } from "../../data/testimonials";

function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <div className="inline-flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <HiStar
          key={i}
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
            i < full ? "fill-amber-500" : "fill-transparent stroke-amber-300"
          }`}
        />
      ))}
      <span className="text-[11px] sm:text-xs font-medium text-slate-600">
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
    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-orange-300/50">
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
              Customer Voices
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
              Loved by families & retailers
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-slate-600">
              Genuine feedback from people who cook with our products every day – from home
              kitchens to growing food businesses.
            </p>
          </div>

          <div className="glass-gold px-4 py-3 rounded-2xl text-xs sm:text-sm text-slate-700 flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-sm">
              <HiStar className="h-4 w-4 fill-amber-500" />
              4.8/5
            </div>
            <span className="h-4 w-px bg-slate-300" />
            <p>Based on recent customer reviews</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, idx) => (
            <article
              key={item.name + item.date}
              className="relative glass-soft p-5 sm:p-6 flex flex-col gap-4 border border-slate-200/60 hover:border-orange-300/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300"
              data-aos="flip-up"
              data-aos-delay={idx * 120 + 180}
            >
              <div className="flex items-center gap-3">
  <Avatar name={item.name} />

  <div className="space-y-0.5">
    <p className="text-sm font-semibold text-slate-800">{item.name}</p>
    <p className="text-[11px] text-slate-500">{item.date}</p>

    {/* Stars moved BELOW name & date */}
    <div className="pt-1">
      <Stars rating={item.rating} />
    </div>
  </div>
</div>


              <p className="relative text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="absolute -left-1 -top-3 text-3xl text-orange-300/40">"</span>
                <span className="pl-3 block">{item.review}</span>
              </p>

              <div className="pt-1 text-[11px] text-emerald-600 font-medium tracking-wide uppercase">
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
  );
}

