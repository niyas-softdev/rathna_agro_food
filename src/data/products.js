export const products = [
  // I. TRADITIONAL RICE (Heritage & Health Varieties)
  {
    id: 1,
    category: "Traditional Rice",
    title: "Karuppu Kavuni Rice (Black Rice)",
    image: "/images/karuppu-kavuni-rice.jpg",
    description:
      'Often called "Emperor\'s Rice," this black rice is a nutritional powerhouse loaded with anthocyanins.',
    features: ["Antioxidant powerhouse", "Low GI for diabetes", "Supports heart health"],
    nutrition: { Calories: "356 kcal", Protein: "9 g", Fiber: "4.5 g", Iron: "2.4 mg" },
  },
  {
    id: 2,
    category: "Traditional Rice",
    title: "Mapillai Samba Red Rice",
    image: "/images/mappilai-samba-rice.jpg",
    description:
      '"Bridegroom Rice" traditionally used to build strength and stamina.',
    features: ["Stamina booster", "Rich in Mg & B6", "Low GI"],
    nutrition: { Calories: "359 kcal", Protein: "7.8 g", Fiber: "3.0 g", Iron: "5.4 mg" },
  },
  {
    id: 3,
    category: "Traditional Rice",
    title: "Poongar Red Rice",
    image: "/images/poongar-rice.jpg",
    description:
      '"Women\'s Rice" resilient to drought/flood; supportive for hormonal balance.',
    features: ["Hormonal balance", "Maternal health", "Low GI"],
    nutrition: { Calories: "348 kcal", Protein: "8.0 g", Fiber: "3.2 g", "Vitamin B1": "0.4 mg" },
  },
  {
    id: 4,
    category: "Traditional Rice",
    title: "Seeraga Samba Raw Rice",
    image: "/images/seeraga-samba-rice.jpg",
    description:
      'The aromatic "Prince of Rice," essential for authentic South Indian biryani.',
    features: ["Highly digestible", "Anti-bloating", "Selenium for immunity"],
    nutrition: { Calories: "356 kcal", Carbs: "80 g", Protein: "7.5 g" },
  },
  {
    id: 5,
    category: "Traditional Rice",
    title: "Kattuyanam Rice",
    image: "/images/kattu-yanam-rice.jpg",
    description:
      'A "wild elephant" rice famed for metabolic health and very low GI.',
    features: ["Diabetes friendly", "Heart supportive", "Rich in folic acid"],
    nutrition: { Calories: "360 kcal", Protein: "7.5 g", Fiber: "4.0 g", "Folic Acid": "High" },
  },
  {
    id: 6,
    category: "Traditional Rice",
    title: "Moongil Rice (Bamboo Rice)",
    image: "/images/Moongil-Rice.png",
    description:
      "Rare bamboo seed grain, prized for relieving joint and back pain.",
    features: ["Joint support", "Mineral rich", "Rare harvest"],
    nutrition: { Protein: "8.9 g", Calcium: "20 mg", Phosphorus: "200 mg" },
  },
  {
    id: 7,
    category: "Traditional Rice",
    title: "Illuppai Poo Samba Rice",
    image: "/images/illuppai-poo-samba-rice.jpg",
    description:
      "Mildly fragrant, medicinal rice named after the Bassia flower.",
    features: ["Supports joints", "Aids breathing", "Gentle aroma"],
    nutrition: { Calories: "359 kcal", Protein: "7 g", Fat: "1 g" },
  },
  {
    id: 8,
    category: "Traditional Rice",
    title: "Thanga Samba Rice",
    image: "/images/thanga-samba-rice.jpg",
    description:
      '"Gold Rice" celebrated for skin glow, stamina, and anti-aging benefits.',
    features: ["Anti-aging", "Stamina support", "Vitamin & mineral rich"],
    nutrition: { Calories: "355 kcal", Protein: "7.2 g", Notes: "Rich in vitamins & minerals" },
  },
  {
    id: 9,
    category: "Traditional Rice",
    title: "Nava Rice (Navara)",
    image: "/images/navara-rice.jpg",
    description:
      "Ayurvedic red rice used for immunity, healing, and muscle mass.",
    features: ["Heals internal wounds", "Immunity boost", "Muscle support"],
    nutrition: { Protein: "9.6 g", Zinc: "14.8 mg", Iron: "0.88 mg" },
  },

  // II. DAILY STAPLES (Parboiled & White Rice)
  {
    id: 10,
    category: "Daily Staples",
    title: "Sona Masuri Rice",
    image: "/images/Sona-Masuri-Rice.png",
    description:
      "Lightweight, aromatic grain ideal for daily meals and easy digestion.",
    features: ["Lower calories", "Daily table rice", "Soft texture"],
    nutrition: { Calories: "350 kcal", Protein: "8.5 g", Fiber: "1-2 g" },
  },
  {
    id: 11,
    category: "Daily Staples",
    title: "Ponni Boiled Rice",
    image: "/images/Ponni-Boiled-Rice.png",
    description:
      "Firm textured parboiled rice that retains more nutrients than raw rice.",
    features: ["Lower GI", "Calcium & B vitamins", "Firm grains"],
    nutrition: { Calories: "345 kcal", Protein: "7.5 g", Calcium: "10 mg" },
  },
  {
    id: 12,
    category: "Daily Staples",
    title: "IR64 Parboiled Rice",
    image: "/images/IR64-Parboiled-Rice.png",
    description:
      "Long, non-sticky grains perfect for variety rice and catering.",
    features: ["Grains stay separate", "High energy", "Catering friendly"],
    nutrition: { Calories: "360 kcal", Protein: "7.0 g", Iron: "1.0 mg" },
  },
  {
    id: 13,
    category: "Traditional Rice",
    title: "Thooyamalli Boiled White Rice",
    image: "/images/thooyamalli-rice.jpg",
    description:
      '"Pure Jasmine" rice with pest resistance that supports the nervous system.',
    features: ["Nervous system support", "Immune boost", "Fragrant grain"],
    nutrition: { Calories: "345 kcal", Protein: "9.16 g", Zinc: "0.23 mg" },
  },
  {
    id: 14,
    category: "Traditional Rice",
    title: "Kichilli Samba Boiled White Rice",
    image: "/images/kichili-samba-rice.jpg",
    description:
      "Fine-grained, flavorful rice historically preferred by royalty.",
    features: ["Skin health", "Muscle strength", "Delicate flavor"],
    nutrition: { Calories: "349 kcal", Protein: "8.5 g", Calcium: "22 mg" },
  },
  {
    id: 15,
    category: "Daily Staples",
    title: "Idly Rice",
    image: "/images/Idly-Rice.png",
    description:
      "Short-grain parboiled rice processed for soft, fluffy idlis.",
    features: ["Soft idlis", "Better B-vitamin retention", "Sustained energy"],
    nutrition: { Calories: "356 kcal", Protein: "8.0 g", Calcium: "10 mg" },
  },

  // III. MILLETS (Nutri-Cereals)
  {
    id: 16,
    category: "Millets",
    title: "Foxtail Millet (Thinnai)",
    image: "/images/foxtail-millet.jpg",
    description:
      "Cardio-supportive millet with good protein and calcium.",
    features: ["Heart supportive", "Low GI", "Mineral rich"],
    nutrition: { Protein: "12.3 g", Calcium: "31 mg" },
  },
  {
    id: 17,
    category: "Millets",
    title: "Little Millet (Samai)",
    image: "/images/little-millet.jpg",
    description:
      "Excellent for reproductive health with notable iron and fibre.",
    features: ["Reproductive health", "High iron", "Good fibre"],
    nutrition: { Iron: "9.3 mg", Fiber: "7.6 g", Energy: "329 kcal" },
  },
  {
    id: 18,
    category: "Millets",
    title: "Kodo Millet (Varagu)",
    image: "/images/kodo-millet.jpg",
    description:
      "Blood-purifying millet that supports kidney function.",
    features: ["Kidney support", "Blood purifier", "Gluten-free"],
    nutrition: { Calcium: "27 mg", Fiber: "9 g" },
  },
  {
    id: 19,
    category: "Millets",
    title: "Pearl Millet (Kambu/Bajra)",
    image: "/images/Pearl-Millet.png",
    description:
      "Cooling millet traditionally used to ease acidity.",
    features: ["Body cooling", "Treats acidity", "Iron rich"],
    nutrition: { Iron: "8 mg (very high)", Notes: "Good fiber" },
  },
  {
    id: 20,
    category: "Millets",
    title: "Finger Millet (Ragi)",
    image: "/images/Finger-Millet.png",
    description:
      "Top calcium source for bone density and strength.",
    features: ["Highest calcium", "Bone health", "Gluten-free"],
    nutrition: { Calcium: "344 mg (highest)", Protein: "7 g (approx)" },
  },
  {
    id: 21,
    category: "Millets",
    title: "Barnyard Millet (Kudhiraivali)",
    image: "/images/barnyard-millet.jpg",
    description:
      "High-fibre millet valued for weight management.",
    features: ["Weight management", "High fibre", "Good iron"],
    nutrition: { Fiber: "13.6 g", Iron: "18.6 mg", Energy: "307 kcal" },
  },
  {
    id: 22,
    category: "Millets",
    title: "White Sorghum (Vella Solam)",
    image: "/images/White-Sorghum.png",
    description:
      "Gluten-free wheat alternative rich in magnesium.",
    features: ["Gluten-free", "Wheat alternative", "Magnesium rich"],
    nutrition: { Magnesium: "165 mg", Protein: "10 g (approx)" },
  },

  // IV. FLAKES / AVAL (Ready-to-Cook)
  {
    id: 23,
    category: "Flakes",
    title: "Karuppu Kavuni Flakes",
    image: "/images/flakes/black-rice-flakes.png",
    description:
      "Heart-healthy antioxidant flakes made from black rice.",
    features: ["Antioxidant rich", "Heart supportive", "Ready-to-cook"],
    nutrition: { Notes: "Retains black rice anthocyanins" },
  },
  {
    id: 24,
    category: "Flakes",
    title: "Mapillai Samba Flakes",
    image: "/images/flakes/mappillai-samba-rice-flakes.png",
    description:
      '"Energy Flakes" delivering instant stamina from heritage rice.',
    features: ["Energy boosting", "Mineral rich", "Quick prep"],
    nutrition: { Notes: "Mineral rich; ready in minutes" },
  },
  {
    id: 25,
    category: "Flakes",
    title: "Red Rice Flakes",
    image: "/images/flakes/poongar-rice-flakes.png",
    description:
      "Flakes from Poongar/Kattuyanam to support hormonal balance and diabetes control.",
    features: ["Hormonal support", "Diabetic friendly", "Wholegrain flakes"],
    nutrition: { Notes: "Fibre rich; low GI" },
  },
  {
    id: 26,
    category: "Flakes",
    title: "Little Millet Flakes (Assorted)",
    image: "/images/flakes/millet-flakes.png",
    description:
      "Assorted millet flakes in Ragi, Pearl Millet, and Kodo variants.",
    features: ["Calcium rich (Ragi)", "Cooling (Pearl)", "Detox (Kodo)"],
    nutrition: { Notes: "Whole millet goodness; quick cook" },
  },
  {
    id: 38,
    category: "Flakes",
    title: "Ragi Flakes",
    image: "/images/flakes/ragi-millet-flakes.png",
    description: "Calcium-rich finger millet flakes ideal for porridge, upma and snacks.",
    features: ["High calcium", "Bone support", "Quick cooking"],
    nutrition: { Notes: "Made from whole ragi (finger millet)" },
  },
  {
    id: 39,
    category: "Flakes",
    title: "Pearl Millet Flakes",
    image: "/images/flakes/pearl-millet-flakes.png",
    description: "Cooling pearl millet flakes traditionally used in summer porridges.",
    features: ["Body cooling", "Good fibre", "Ready-to-cook"],
    nutrition: { Notes: "Made from whole pearl millet (kambu/bajra)" },
  },
  {
    id: 40,
    category: "Flakes",
    title: "Kodo Millet Flakes",
    image: "/images/flakes/kodo-millet-flakes.png",
    description: "Detox-friendly kodo millet flakes for light, wholesome meals.",
    features: ["Detox support", "Gluten free", "Light on digestion"],
    nutrition: { Notes: "Made from whole kodo millet (varagu)" },
  },
  {
    id: 41,
    category: "Flakes",
    title: "Barnyard Millet Flakes",
    image: "/images/flakes/barnyard-millet-flakes.png",
    description: "High-fibre barnyard millet flakes for weight management recipes.",
    features: ["High fibre", "Weight management", "Low GI"],
    nutrition: { Notes: "Made from barnyard millet (kudhiraivali)" },
  },
  {
    id: 42,
    category: "Flakes",
    title: "Foxtail Millet Flakes",
    image: "/images/flakes/foxtail-millet-flakes.png",
    description: "Heart-supportive foxtail millet flakes for savoury and sweet dishes.",
    features: ["Heart supportive", "Good protein", "Versatile use"],
    nutrition: { Notes: "Made from foxtail millet (thinai)" },
  },
  {
    id: 43,
    category: "Flakes",
    title: "Thooyamalli Flakes",
    image: "/images/flakes/thooyamalli-rice-flakes.png",
    description: "Fragrant thooyamalli rice flakes with soft texture and gentle aroma.",
    features: ["Fragrant", "Soft texture", "Traditional rice flakes"],
    nutrition: { Notes: "Made from thooyamalli traditional rice" },
  },
  {
    id: 44,
    category: "Flakes",
    title: "Poongar Flakes",
    image: "/images/flakes/poongar-rice-flakes.png",
    description: "Nutritious poongar red rice flakes associated with women’s health.",
    features: ["Supports women’s health", "Wholegrain", "Low GI"],
    nutrition: { Notes: "Made from poongar traditional rice" },
  },
  {
    id: 45,
    category: "Flakes",
    title: "Kattuyanam Flakes",
    image: "/images/flakes/kattuyanam-rice-flakes.png",
    description: "Metabolism-friendly kattuyanam rice flakes for everyday breakfasts.",
    features: ["Metabolic support", "Diabetic friendly", "Wholegrain flakes"],
    nutrition: { Notes: "Made from kattuyanam traditional rice" },
  },
  {
    id: 46,
    category: "Flakes",
    title: "Karunkuravai Flakes",
    image: "/images/flakes/karunkuravai-flakes.png",
    description: "Iron-rich karunkuravai traditional rice flakes for hearty meals.",
    features: ["Iron support", "Traditional variety", "Wholesome flakes"],
    nutrition: { Notes: "Made from karunkuravai traditional black rice" },
  },
  {
    id: 47,
    category: "Flakes",
    title: "Wheat Flakes",
    image: "/images/flakes/wheat-flakes.png",
    description: "Classic wheat flakes ideal for breakfast bowls and snack mixes.",
    features: ["Energy rich", "Familiar taste", "Quick breakfast option"],
    nutrition: { Notes: "Made from whole wheat" },
  },

  // V. PULSES & PROTEINS
  {
    id: 27,
    category: "Pulses",
    title: "Raw Groundnut (Peanut)",
    image: "/images/groundnut.jpg",
    description:
      "Rich in monounsaturated fats for heart health and protein for muscle repair.",
    features: ["Heart healthy fats", "Protein rich", "Great snacks/oil"],
    nutrition: { Protein: "25.8 g", Fat: "49 g" },
  },
  {
    id: 28,
    category: "Pulses",
    title: "White Urad Dal (Ullundu)",
    image: "/images/whiteurddal.webp",
    description:
      "Strengthens hips and back; improves digestion.",
    features: ["Bone & joint support", "Digestive aid", "Protein dense"],
    nutrition: { Protein: "24 g", Calcium: "154 mg" },
  },
  {
    id: 29,
    category: "Pulses",
    title: "Black Urad Dal (Whole)",
    image: "/images/blackurddal.webp",
    description:
      "Whole black urad with skin for superior fibre and vitality.",
    features: ["High fibre", "Boosts vitality", "Iron rich"],
    nutrition: { Protein: "25.2 g", Fiber: "18 g", Iron: "7.5 mg" },
  },

  // VI. FRESH PRODUCE (Onions)
  {
    id: 30,
    category: "Fresh Produce",
    title: "Red Onion",
    image: "/images/red-onion.jpg",
    description:
      "Rich in quercetin and anthocyanins; strong immunity support.",
    features: ["High antioxidants", "Vitamin C rich", "Bold flavor"],
    nutrition: { Notes: "High water content; immunity support" },
  },
  {
    id: 31,
    category: "Fresh Produce",
    title: "Pink Onion (Rose Onion)",
    image: "/images/pink-onion.jpg",
    description:
      "Sweeter onion with cooling effect and higher natural sugars.",
    features: ["Cooling", "Sweeter profile", "Hydrating"],
    nutrition: { Water: "~89%", Notes: "Natural sugars; soothing" },
  },

  // VII. GROCERY & GOURMET
  {
    id: 32,
    category: "Gourmet",
    title: "Palm Sugar",
    image: "/images/palm-sugar.jpg",
    description:
      "Low GI natural sweetener rich in iron and zinc.",
    features: ["Low GI (~35)", "Iron & zinc", "Natural energy"],
    nutrition: { Notes: "Mineral-rich sweetener" },
  },
  {
    id: 33,
    category: "Gourmet",
    title: "Palm Candy (Panakkarkandu)",
    image: "/images/palm-candy.jpg",
    description:
      "Traditional throat soother with minerals.",
    features: ["Soothes throat", "Mineral rich", "Traditional sweet"],
    nutrition: { Notes: "Natural throat comfort" },
  },
  {
    id: 34,
    category: "Gourmet",
    title: "Coconut Sugar",
    image: "/images/coconut-sugar.jpg",
    description:
      "Sustainable sweetener containing inulin fibre.",
    features: ["Inulin fibre", "Sustainable", "Low-refine"],
    nutrition: { Notes: "Lower GI vs refined sugar" },
  },
  {
    id: 35,
    category: "Gourmet",
    title: "Jaggery (Cane)",
    image: "/images/jaggery-powder.jpg",
    description:
      "Digestive aid that helps cleanse the liver.",
    features: ["Digestive support", "Liver cleanse aid", "Mineral sweetener"],
    nutrition: { Notes: "Unrefined cane jaggery" },
  },
  {
    id: 36,
    category: "Gourmet",
    title: "Dry Fruits Assortment",
    image: "/images/dry-fruits-assortment.jpg",
    description:
      "Premium mix for instant energy and bone health.",
    features: ["Instant energy", "Bone health", "Rich micronutrients"],
    nutrition: { Notes: "Assorted nuts & fruits" },
  },
  
];

