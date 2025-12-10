const posts = [
  {
    title: "How heritage rice varieties boost everyday health",
    date: "Jan 12, 2025",
    tag: "Heritage Rice",
    summary:
      "From Karuppu Kavuni to Poongar, discover how traditional rices deliver antioxidants, steady energy and mineral-rich nutrition.",
  },
  {
    title: "Millets: the gluten-free super grains for modern diets",
    date: "Jan 05, 2025",
    tag: "Millets",
    summary:
      "Foxtail, Little, Kodo and Barnyard millet offer heart health, protein and fibre in one clean label ingredient.",
  },
  {
    title: "Exporting quality grains across continents",
    date: "Dec 22, 2024",
    tag: "Exports",
    summary:
      "How Rathna Agro Foods meets global specs for USA, Europe, Middle East, Far East and Australia with consistent grading and packaging.",
  },
  {
    title: "How to choose the right rice for biryani",
    date: "Dec 10, 2024",
    tag: "Kitchen Tips",
    summary:
      "Seeraga Samba vs. Basmati vs. Thooyamalli—when to pick each for aroma, grain length, and plate presentation.",
  },
  {
    title: "Clean label sourcing: what buyers should demand",
    date: "Nov 28, 2024",
    tag: "Quality",
    summary:
      "Moisture control, grading, food-safe packing and documentation checklists for importers and modern trade buyers.",
  },
  {
    title: "Why low-GI staples matter for wellness menus",
    date: "Nov 14, 2024",
    tag: "Wellness",
    summary:
      "Low GI millets and heritage rices help reduce insulin spikes, sustain energy and keep menus diabetic-friendly.",
  },
  {
    title: "Building reliable agri supply chains for marketplaces",
    date: "Oct 30, 2024",
    tag: "B2B",
    summary:
      "How we align SKUs, pack sizes, and SLAs for marketplaces like Amazon, Flipkart, Jiomart, and BigBasket.",
  },
  {
    title: "Certifications that matter for export buyers",
    date: "Oct 18, 2024",
    tag: "Compliance",
    summary:
      "Key checks—moisture, heavy metals, pesticide residues, packaging specs—and how we document them for customs clearance.",
  },
  {
    title: "Private label: launching heritage and millet SKUs fast",
    date: "Oct 02, 2024",
    tag: "Private Label",
    summary:
      "Fast artwork to shelf: choosing variants, MRP architecture, and carton labeling to get your brand live quickly.",
  },
];

export const metadata = {
  title: "Blog | Rathna Agro Foods",
  description: "Insights on heritage grains, millets, exports and quality from Rathna Agro Foods.",
};

export default function BlogPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 lg:pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Insights & stories</h1>
          <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
            Learn how heritage grains, millets and carefully sourced staples can power healthier kitchens and reliable supply chains.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <article
              key={post.title}
              className="glass-soft h-full p-5 sm:p-6 border border-white/5 hover:border-[#fbbf24]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                <span className="font-semibold text-[#fbbf24]">{post.tag}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-sm text-white/80 leading-relaxed mb-4">{post.summary}</p>
              <div className="text-sm font-semibold text-[#fbbf24]">Read more →</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


