"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/products", label: "Products" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog " },
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[104px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/RATHNA-LOGO.png"
              alt="Rathna Agro Foods Logo"
              width={340}
              height={140}
              priority
              className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-[15px] font-medium">
            {navLinks.map((link) =>
              link.label !== "Products" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-slate-700 hover:text-orange-600 transition group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all" />
                </Link>
              ) : (
                <div key={link.href} className="relative group">
                  <Link
                    href="/products"
                    className="flex items-center gap-1 text-slate-700 hover:text-orange-600 py-4"
                  >
                    Products <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                  </Link>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-xl shadow-lg border border-orange-100
                  z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="py-2">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={`/products?cat=${encodeURIComponent(cat.query)}`}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-orange-600 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden bg-white border-t border-orange-100 shadow-lg transition-all duration-300 absolute w-full left-0 top-16 z-40 ${menuOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <nav className="flex flex-col px-4 py-6 space-y-4 text-base font-medium">
          {navLinks.map((link) =>
            link.label !== "Products" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 py-2 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ) : (
              <div key={link.href} className="border-b border-gray-50 pb-2">
                <div className="flex items-center justify-between w-full">
                  <Link
                    href="/products"
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-700 py-2 flex-1"
                  >
                    Products
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setProductsOpen(!productsOpen);
                    }}
                    className="p-3 text-slate-500 hover:text-orange-600"
                    aria-label="Toggle products dropdown"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-col space-y-1 pl-4 border-l-2 border-orange-100 ml-1">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={`/products?cat=${encodeURIComponent(cat.query)}`}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-slate-600 hover:text-orange-600"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}

          <Link
            href="/contact"
            className="mt-2 text-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold"
          >
            Get a Quote
          </Link>
        </nav>
      </div>

      {/* ✅ MARQUEE – NOW WORKS ON MOBILE + DESKTOP */}
      <div className="bg-[#dff3b3] overflow-hidden py-2 relative z-40">
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 text-xs sm:text-sm font-medium text-slate-800">

            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-red-500 font-bold">««</span>
              <span>Trusted by 1,70,000+ Happy Customers</span>
              <span className="text-red-500 font-bold">««</span>
              <span>100% Natural food products company</span>
              <span className="text-red-500 font-bold">««</span>
              <span>No added preservatives & chemicals</span>
            </div>

            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-red-500 font-bold">««</span>
              <span>Trusted by 1,70,000+ Happy Customers</span>
              <span className="text-red-500 font-bold">««</span>
              <span>100% Natural food products company</span>
              <span className="text-red-500 font-bold">««</span>
              <span>No added preservatives & chemicals</span>
            </div>

            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-red-500 font-bold">««</span>
              <span>Trusted by 1,70,000+ Happy Customers</span>
              <span className="text-red-500 font-bold">««</span>
              <span>100% Natural food products company</span>
              <span className="text-red-500 font-bold">««</span>
              <span>No added preservatives & chemicals</span>
            </div>

          </div>
        </div>
      </div>
    </header >
  );
}
