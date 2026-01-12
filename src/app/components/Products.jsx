"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { HiMiniXMark } from "react-icons/hi2";
import { products as productCatalog } from "../../data/products";

const PHONE_NUMBER = "+91 90439 43016";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300/60 bg-slate-100/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 backdrop-blur">
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

  const hasPrice = typeof product.price === "number";
  const priceLabel = hasPrice ? `₹${product.price.toLocaleString("en-IN")}` : "Contact for price";
  const brandLabel = product.brand || product.category || "Rathna Agro Foods";

  return (
    <article className="glass-soft h-full flex flex-col overflow-hidden border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/80 hover:shadow-xl hover:shadow-orange-100/50">
      {/* IMAGE AREA – smaller card, full image (no crop) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white px-4 pt-4">
        {!imgError ? (
          <Image
            src={safeSrc}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 320px, 100vw"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400 text-sm">
            Image unavailable
          </div>
        )}

        {/* Category pill */}
        <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[11px] font-semibold text-white shadow-lg shadow-orange-300/50">
          {product.category}
        </span>
      </div>

      {/* CONTENT AREA – title, brand, rating, price, actions */}
      <div className="flex-1 p-4 space-y-3 text-left">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-800 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{brandLabel}</p>
        </div>

        {/* Static rating row for now */}
        <div className="flex items-center gap-1 text-amber-400 text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="ml-1 text-[11px] text-slate-500">(0 reviews)</span>
        </div>

        {highlights?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {highlights.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        )}

        {/* Price + view details */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm sm:text-base font-semibold text-slate-900">
            {priceLabel}
          </span>
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="text-xs font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2"
          >
            View details
          </button>
        </div>

        {/* Helper text instead of cart controls */}
        <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
          Click <span className="font-semibold">View details</span> for pack sizes, specs and quote.
        </p>
      </div>
    </article>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="text-sm text-slate-700">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function ProductDetailSheet({ product, onClose }) {
  const [imgError, setImgError] = useState(false);

  if (!product) return null;

  const nutritionEntries = Object.entries(product.nutrition || {});
  const specificationEntries = Object.entries(product.specification || {});

  // Use the same safe image logic as the product card
  const safeImageSrc =
    product.image && typeof product.image === "string" && product.image.trim() !== ""
      ? product.image.replace(/\s+/g, "%20")
      : "/placeholder.jpg";

  const hasPrice = typeof product.price === "number";
  const priceLabel = hasPrice ? `₹${product.price.toLocaleString("en-IN")}` : "Contact for price";
  const brandLabel = product.brand || product.category || "Rathna Agro Foods";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4 py-8">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 transition-colors"
          aria-label="Close details"
        >
          <HiMiniXMark className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-0 max-h-[90vh] lg:max-h-[80vh] overflow-y-auto">
          {/* LEFT: LARGE IMAGE */}
          <div className="relative min-h-[260px] sm:min-h-[320px] bg-slate-100">
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
              <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                Image unavailable
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                {product.category}
              </span>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">{product.title}</h3>
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="p-6 sm:p-8 space-y-6 bg-white">
            {/* Title, brand, price */}
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">{brandLabel}</p>
              <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                {priceLabel}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {product.features?.length ? (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                  Specification
                </p>
                <div className="grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                  {specificationEntries.map(([label, value]) => (
                    <DetailRow key={label} label={label} value={value} />
                  ))}
                </div>
              </div>
            )}

            {nutritionEntries.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                  Nutrition (per 100g)
                </p>
                <div className="grid grid-cols-2 gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                  {nutritionEntries.map(([label, value]) => (
                    <DetailRow key={label} label={label} value={value} />
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100 mt-2 pt-4">
              <a
                href="#contact"
                className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Quote
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, "")}`}
                className="flex-1 rounded-lg border border-orange-400 px-4 py-3 text-center text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-all"
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = limit ? "All" : (searchParams.get("cat") || "All");

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

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?cat=${encodeURIComponent(cat)}`, { scroll: false });
    }
  };

  return (
    <section id="products" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
            Products
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Our best-selling agro staples
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
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
                onClick={() => handleCategoryChange(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeCategory === cat
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-300/50"
                    : "glass-gold text-orange-600"
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
