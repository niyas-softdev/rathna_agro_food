"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const productCategories = [
  { label: "Traditional Rice", query: "Traditional Rice" },
  { label: "Daily Staples", query: "Daily Staples" },
  { label: "Millets", query: "Millets" },
  { label: "Flakes", query: "Flakes" },
  { label: "Pulses & Proteins", query: "Pulses" },
  { label: "Fresh Produce", query: "Fresh Produce" },
  { label: "Gourmet & Grocery", query: "Gourmet" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#fbbf24]/30 bg-[#1e293b]/80 backdrop-blur px-3 py-2 shadow-sm text-white hover:bg-[#fbbf24]/10 hover:border-[#fbbf24] transition-all duration-300"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
          <span
            className={`block h-0.5 w-full bg-[#fbbf24] rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-[#fbbf24] rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-[#fbbf24] rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-[#1e293b]/98 backdrop-blur-xl border-t border-[#fbbf24]/30 shadow-xl z-50">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-72px)] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.label !== "Products") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm text-white/90 hover:text-[#fbbf24] hover:bg-[#334155]/50 rounded-lg transition-all duration-300 border border-transparent hover:border-[#fbbf24]/30"
                  >
                    {link.label}
                  </Link>
                );
              }

              // Products with expandable categories
              return (
                <div key={link.href} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((open) => !open)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/90 hover:text-[#fbbf24] hover:bg-[#334155]/50 rounded-lg transition-all duration-300 border border-transparent hover:border-[#fbbf24]/30"
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs transition-transform ${productsOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>

                  {productsOpen && (
                    <div className="ml-4 space-y-1 pb-1">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={`/products?cat=${encodeURIComponent(cat.query)}`}
                          onClick={() => {
                            setIsOpen(false);
                            setProductsOpen(false);
                          }}
                          className="block px-4 py-2 text-[13px] text-white/80 hover:text-[#fbbf24] hover:bg-[#1f2937] rounded-lg transition-all duration-300"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 text-sm text-center bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] text-[#0f172a] rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-[#fbbf24]/30"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

