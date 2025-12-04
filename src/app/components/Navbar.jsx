import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* ─── PREMIUM TOP BAR (Deep Navy with Gold Accent) ───────────────────── */}
      <div className="hidden sm:block bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#1e293b] overflow-hidden text-white text-xs py-2.5 border-b border-[#fbbf24]/20">
        <div className="flex items-center gap-x-8 whitespace-nowrap animate-marquee px-4">
          <span className="inline-flex items-center gap-x-2 text-[#fbbf24]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 90439 43016
          </span>
          <span className="inline-flex items-center gap-x-2 text-white/90">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@rathnaagrofoods.com
          </span>
          <span className="inline-flex items-center gap-x-2 text-[#86efac] font-medium">
            Follow us:
          </span>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fbbf24] transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
            </svg>
          </a>
          <span className="inline-flex items-center gap-x-2">Facebook</span>


          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#fbbf24] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0z"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
          <span className="inline-flex items-center gap-x-2">Instagram</span>

        </div>
      </div>

      {/* ─── PREMIUM MAIN NAVBAR (Deep Navy with Glassmorphism) ───────────── */}
      <div className="w-full bg-[#1e293b]/95 backdrop-blur-xl border-b border-[#fbbf24]/30 shadow-lg shadow-[#1e293b]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-lg bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center shadow-lg shadow-[#fbbf24]/30 group-hover:shadow-xl group-hover:shadow-[#fbbf24]/50 transition-all duration-300">
              <span className="text-[#0f172a] text-sm sm:text-base font-bold">RA</span>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="leading-tight hidden sm:block">
              <h1 className="font-bold text-[#fbbf24] text-base sm:text-lg lg:text-xl tracking-wide">
                RATHNA
              </h1>
              <p className="text-[10px] sm:text-xs text-[#86efac] font-medium tracking-wider">
                AGRO FOODS
              </p>
            </div>
          </Link>

          {/* Premium Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] lg:text-[15px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/90 hover:text-[#fbbf24] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative px-5 lg:px-6 py-2 lg:py-2.5 text-sm bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] text-[#0f172a] rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-[#fbbf24]/30 hover:shadow-xl hover:shadow-[#fbbf24]/50 hover:-translate-y-0.5"
            >
              Get a Quote
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] opacity-0 hover:opacity-20 blur-xl transition-opacity"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
