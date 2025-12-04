"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { products as productCatalog } from "../../data/products";

const PHONE_NUMBER = "+91 90439 43016";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function ProductCard({ product, onSelect }) {
  const [imgError, setImgError] = useState(false);
  
  const safeSrc =
    product.image && typeof product.image === "string" && product.image.trim() !== ""
      ? product.image.replace(/\s+/g, "%20") // URL encode spaces for production
      : "/placeholder.jpg";

  const highlights = product.features?.length
    ? product.features.slice(0, 2)
    : Object.entries(product.nutrition || {})
        .slice(0, 2)
        .map(([key, value]) => `${key}: ${value}`);

  return (
    <article className="glass-soft h-full flex flex-col overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#fbbf24]/50 hover:shadow-xl">
      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1e293b]/50">
          {!imgError ? (
            <Image
              src={safeSrc}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(min-width: 1024px) 320px, 100vw"
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white/40 text-sm">
              Image unavailable
            </div>
          )}
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-3 py-1 text-[11px] font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30">
          {product.category}
        </span>
      </div>

      <div className="flex-1 p-5 space-y-3 text-left">
        <div>
          <h3 className="text-lg font-semibold text-white">{product.title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            {product.description}
          </p>
        </div>

        {highlights?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {highlights.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        )}

        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="w-full rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-4 py-2 text-sm font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            View Details
          </button>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span className="h-px flex-1 bg-white/10" />
            Tap for specs & quote
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="text-sm text-white/90">
      <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function ProductDetailSheet({ product, onClose }) {
  const [imgError, setImgError] = useState(false);
  
  if (!product) return null;

  const nutritionEntries = Object.entries(product.nutrition || {});
  const specificationEntries = Object.entries(product.specification || {});
  
  const safeImageSrc = product.image 
    ? product.image.replace(/\s+/g, "%20") 
    : "/placeholder.jpg";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/80 px-4 py-8">
      <div className="relative max-w-4xl w-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Close details"
        >
          <HiMiniXMark className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0 max-h-[90vh] overflow-y-auto">
        <div className="relative min-h-[320px] bg-[#1e293b]/50">
            {!imgError ? (
              <Image
                src={safeImageSrc}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white/40 text-sm">
                Image unavailable
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                {product.category}
              </span>
              <h3 className="text-2xl font-bold text-white">{product.title}</h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm text-white/85 leading-relaxed">{product.description}</p>

            {product.features?.length ? (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Pill key={feature}>{feature}</Pill>
                  ))}
                </div>
              </div>
            ) : null}

            {specificationEntries.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                  Specification
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {specificationEntries.map(([label, value]) => (
                    <DetailRow key={label} label={label} value={value} />
                  ))}
                </div>
              </div>
            )}

            {nutritionEntries.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                  Nutrition (per 100g)
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {nutritionEntries.map(([label, value]) => (
                    <DetailRow key={label} label={label} value={value} />
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="flex-1 rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-4 py-3 text-center text-sm font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Quote
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, "")}`}
                className="flex-1 rounded-lg border border-[#fbbf24]/60 px-4 py-3 text-center text-sm font-semibold text-[#fbbf24] hover:bg-[#fbbf24]/10 transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products({ limit }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const list = useMemo(() => {
    const base = typeof limit === "number" ? productCatalog.slice(0, limit) : productCatalog;
    if (limit || activeCategory === "All") return base;
    return base.filter((item) => item.category === activeCategory);
  }, [activeCategory, limit]);

  const categories = useMemo(() => {
    if (typeof limit === "number") return [];
    return ["All", ...new Set(productCatalog.map((item) => item.category))];
  }, [limit]);

  return (
    <section id="products" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
            Products
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Our best-selling agro staples
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/90">
            Explore premium grade millets, rice, cereals and commodities curated for retailers,
            wholesalers and export buyers.
          </p>
        </div>

        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0f172a] shadow-lg shadow-[#fbbf24]/30"
                    : "glass-gold text-[#fbbf24]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
          ))}
        </div>
      </div>

      <ProductDetailSheet product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
