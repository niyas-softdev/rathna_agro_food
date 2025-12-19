import { LuLeaf, LuStar, LuIndianRupee, LuBike } from "react-icons/lu";

const featuresData = [
  {
    title: "100% Natural",
    desc: "As they say, nothing beats nature. Natural products are healthier, fresher and more flavorful.",
    Icon: LuLeaf,
  },
  {
    title: "High Quality",
    desc: "As they say, nothing beats nature. Natural products are healthier, fresher and more flavorful.",
    Icon: LuStar,
  },
  {
    title: "Affordable Price",
    desc: "As they say, nothing beats nature. Natural products are healthier, fresher and more flavorful.",
    Icon: LuIndianRupee,
  },
  {
    title: "On-time Delivery",
    desc: "As they say, nothing beats nature. Natural products are healthier, fresher and more flavorful.",
    Icon: LuBike,
  },
];

export default function Features() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4" data-aos="zoom-in" data-aos-delay="120">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Our Special Features
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            The motto of this start-up is to serve better with best product quality.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {featuresData.map(({ title, desc, Icon }, idx) => (
            <article
              key={title}
              className="glass-soft p-6 sm:p-7 flex flex-col gap-4 border border-slate-200/60 hover:border-orange-300/80 transition-colors duration-300 hover:shadow-xl hover:shadow-orange-100/50"
              data-aos="flip-left"
              data-aos-delay={idx * 100 + 150}
            >
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 text-white shadow-lg shadow-orange-300/50">
                <div className="absolute inset-0 rounded-full border border-white/30" />
                <Icon className="relative text-2xl" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
