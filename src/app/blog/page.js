import Image from "next/image";

const riceBlogs = [
  {
    slug: "karuppu-kavuni-rice",
    title: "Karuppu Kavuni Rice – The Ancient Black Rice of Tamil Nadu",
    image: "/images/banner3.jpg",
    intro:
      "Karuppu Kavuni rice is one of the oldest traditional rice varieties of Tamil Nadu, once reserved for kings and warriors.",

    history:
      "Karuppu Kavuni rice has been cultivated for centuries in Tamil Nadu. In ancient times, it was consumed mainly by royal families because of its high nutritional value and energy-boosting properties.",

    healthBenefits: [
      "Rich in antioxidants (Anthocyanin)",
      "Improves digestion",
      "Controls blood sugar levels",
      "Boosts immunity",
      "Supports heart health",
    ],

    diseases:
      [
        "Diabetes",
        "Heart disease",
        "Anemia",
        "Digestive disorders",
        "Weak immunity",
      ],

    usage:
      "Best consumed as rice, kanji, idli, dosa, sweet pongal and healthy snacks.",
  },

    {
      slug: "mapillai-samba-rice",
      title: "Mapillai Samba Rice – Strength Giving Warrior Rice",
      image: "/images/mapillai-samba-banner.jpg",
      intro:
        "Mapillai Samba rice is a famous traditional rice variety of Tamil Nadu known for improving strength, stamina and overall vitality.",
  
      history:
        "Mapillai Samba rice was traditionally given to grooms before marriage to increase physical strength and endurance. It has been cultivated for centuries in Tamil Nadu and is deeply rooted in Tamil food culture.",
  
      healthBenefits: [
        "Improves muscle strength and stamina",
        "Rich in fiber and complex carbohydrates",
        "Boosts digestion and metabolism",
        "Strengthens nerves and bones",
        "Improves blood circulation",
      ],
  
      diseases: [
        "General weakness",
        "Joint pain",
        "Digestive issues",
        "Low energy levels",
      ],
  
      usage:
        "Best consumed as rice, idli, dosa, adai, kheer and healthy meals for active lifestyles.",
    },
  
    {
      slug: "seeraga-samba-rice",
      title: "Seeraga Samba Rice – Aromatic Rice for Digestion",
      image: "/images/seeraga-samba-banner.jpg",
      intro:
        "Seeraga Samba rice is a small-grained aromatic rice widely used in South Indian cuisine, especially for biryani.",
  
      history:
        "Seeraga Samba has been cultivated in Tamil Nadu for generations and is closely associated with festive cooking and traditional biryanis.",
  
      healthBenefits: [
        "Easy to digest",
        "Improves gut health",
        "Low in fat",
        "Rich in fiber and minerals",
        "Boosts metabolism",
      ],
  
      diseases: [
        "Indigestion",
        "Stomach disorders",
        "Obesity",
        "Weak digestion",
      ],
  
      usage:
        "Ideal for biryani, pulao, lemon rice and daily meals.",
    },
  
  
    {
      slug: "kichili-samba-rice",
      title: "Kichili Samba Rice – Traditional Low GI Rice",
      image: "/images/kichili-Samba-banner.jpg",
      intro:
        "Kichili Samba is a traditional rice variety with a low glycemic index and high nutritional value.",
  
      history:
        "Used by ancient Tamil kings, Kichili Samba rice was valued for its taste, strength-giving properties and long shelf life.",
  
      healthBenefits: [
        "Low glycemic index",
        "Improves digestion",
        "Boosts energy levels",
        "Strengthens bones and muscles",
      ],
  
      diseases: [
        "Diabetes",
        "Weak digestion",
        "Bone weakness",
      ],
  
      usage:
        "Suitable for daily rice meals, idli, dosa and traditional dishes.",
    },
  
    {
      slug: "poongar-rice",
      title: "Poongar Rice – Women’s Health Rice",
      image: "/images/poongar-banner.jpg",
      intro:
        "Poongar rice is especially beneficial for women’s health and hormonal balance.",
  
      history:
        "Traditionally cultivated in drought-prone areas, Poongar rice was used to support maternal health and fertility.",
  
      healthBenefits: [
        "Supports hormonal balance",
        "Improves reproductive health",
        "Low glycemic index",
        "Improves digestion",
      ],
  
      diseases: [
        "PCOS",
        "Hormonal imbalance",
        "Gestational diabetes",
      ],
  
      usage:
        "Recommended as rice, kanji and light meals for women.",
    },
  
    {
      slug: "kattu-yanam-rice",
      title: "Kattu Yanam Rice – Immunity Boosting Rice",
      image: "/images/kattuyanam-banner.jpg",
      intro:
        "Kattu Yanam rice is known for its immunity boosting and detoxifying properties.",
  
      history:
        "This rice variety has been traditionally used for medicinal purposes and strengthening the body.",
  
      healthBenefits: [
        "Improves immunity",
        "Aids digestion",
        "Supports weight management",
        "Anti-aging properties",
      ],
  
      diseases: [
        "Weak immunity",
        "Digestive disorders",
        "Liver problems",
      ],
  
      usage:
        "Consumed as rice, kanji and herbal food preparations.",
    },
  
    {
      slug: "thooyamalli-rice",
      title: "Thooyamalli Rice – Pure White Traditional Rice",
      image: "/images/banner6.jpg",
      intro:
        "Thooyamalli rice is a fragrant white rice variety known for purity and balanced nutrition.",
  
      history:
        "Cultivated in Tamil Nadu for centuries, Thooyamalli rice was used in daily meals and temple offerings.",
  
      healthBenefits: [
        "Good for digestion",
        "Boosts nervous system",
        "Rich in vitamins and minerals",
        "Improves heart health",
      ],
  
      diseases: [
        "Nervous disorders",
        "Digestive problems",
        "Weak metabolism",
      ],
  
      usage:
        "Best for daily rice meals, pongal and traditional dishes.",
    },
  
  ];
  



export const metadata = {
  title: "Traditional Rice Blog | Rathna Agro Foods",
  description:
    "Learn about traditional rice varieties, their history, health benefits and disease prevention.",
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f9faf7]">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-800">
            Traditional Rice Health Blog
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Discover the history, health benefits and medicinal value of ancient
            Tamil Nadu rice varieties.
          </p>
        </div>

        {/* Blog Article */}
        {riceBlogs.map((rice) => (
          <article key={rice.slug} className="space-y-8">
            
            {/* Image */}
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
              <Image
                src={rice.image}
                alt={rice.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
                {rice.title}
              </h2>
              <p className="text-lg text-slate-600">{rice.intro}</p>
            </div>

            {/* History */}
            <section className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-800">
                📜 History & Origin
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {rice.history}
              </p>
            </section>

            {/* Health Benefits */}
            <section className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-800">
                ❤️ Health Benefits
              </h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                {rice.healthBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </section>

            {/* Diseases */}
            <section className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-800">
                🩺 Good for These Diseases
              </h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                {rice.diseases.map((disease) => (
                  <li key={disease}>{disease}</li>
                ))}
              </ul>
            </section>

            {/* Usage */}
            <section className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-800">
                🍽 How to Consume
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {rice.usage}
              </p>
            </section>

            <hr className="border-green-200 pt-6" />
          </article>
        ))}
      </div>
    </div>
  );
}
