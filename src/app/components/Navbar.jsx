"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
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
      <div className="bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[104px] flex items-center justify-between">

          {/* LOGO (LITE BIGGER & PERFECT) */}
          <Link href="/" className="flex items-center">
  <Image
    src="/images/RATHNA-LOGO.png"
    alt="Rathna Agro Foods Logo"
    width={340}
    height={140}
    priority
    className="
      h-12        /* mobile */
      sm:h-16    /* tablet */
      md:h-18    /* small desktop */
      lg:h-20     /* large desktop */
      w-auto
      object-contain
    "
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
                  <button className="flex items-center gap-1 text-slate-700 hover:text-orange-600">
                    Products <ChevronDown size={16} />
                  </button>

                  <div className="absolute left-0 top-full mt-3 w-56 bg-white rounded-xl shadow-lg border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={`/products?cat=${encodeURIComponent(cat.query)}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {cat.label}
                      </Link>
                    ))}
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
            className="md:hidden text-orange-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden bg-white border-t border-orange-100 shadow-lg transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">
          {navLinks.map((link) =>
            link.label !== "Products" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700"
              >
                {link.label}
              </Link>
            ) : (
              <div key={link.href}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full text-slate-700"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="mt-2 ml-3 space-y-2">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={`/products?cat=${encodeURIComponent(cat.query)}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-slate-600"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
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

      {/* ================= TOP MARQUEE BAR ================= */}
      <div className="hidden sm:block bg-[#dff3b3] overflow-hidden py-2  group">
  <div className="relative w-full overflow-hidden">
    <div className="flex w-max animate-marquee gap-10 group-hover:pause-marquee text-sm font-medium text-slate-800 z-1">

      {/* === FIRST SET === */}
      <div className="flex items-center gap-10 whitespace-nowrap">
        <span className="text-red-500 text-lg font-bold">««</span>
        <span>Trusted by 1,70,000+ Happy Customers</span>

        <span className="text-red-500 text-lg font-bold">««</span>
        <span>100% Natural food products company</span>

        <span className="text-red-500 text-lg font-bold">««</span>
        <span>No added preservatives & chemicals</span>
      </div>

      {/* === DUPLICATE SET (for seamless loop) === */}
      <div className="flex items-center gap-10 whitespace-nowrap">
        <span className="text-red-500 text-lg font-bold">««</span>
        <span>Trusted by 1,70,000+ Happy Customers</span>

        <span className="text-red-500 text-lg font-bold">««</span>
        <span>100% Natural food products company</span>

        <span className="text-red-500 text-lg font-bold">««</span>
        <span>No added preservatives & chemicals</span>
      </div>

    </div>
  </div>
</div>
    </header>
  );
}
