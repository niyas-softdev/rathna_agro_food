import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-50 text-slate-800 pt-12 pb-8 mt-12 border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Brand */}
          <div className="space-y-4">
  <div className="flex items-center gap-3">
    
    {/* Logo Container */}
    <div className="h-18 w-18 ">
      <img
        src="/favicon.ico"   // 👈 unga logo path
        alt="Rathna Agro Foods Logo"
        className="h-18 w-18 object-contain"
      />
    </div>

    {/* Brand Text */}
    <div className="flex flex-col leading-tight">
      <span className="font-bold text-base text-orange-600">
        RATHNA
      </span>
      <span className="text-[10px] text-emerald-600 font-medium">
        AGRO FOODS
      </span>
    </div>
  </div>

  <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
    Supplying carefully curated agro commodities to wholesalers,
    retailers and food businesses with a strong focus on quality,
    consistency and reliability.
  </p>
</div>


          {/* Contact */}
          <div className="space-y-4 text-xs sm:text-sm">
            <h3 className="text-sm sm:text-base font-bold text-orange-600 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-2.5 text-slate-700">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 90439 43016
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@rathnaagrofoods.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                No: 221 / 224, 129 Plaza Center, GN Chetty Road, Mount Road, Chennai-600006
              </p>
            </div>
          </div>

          {/* Links + social */}
          <div className="space-y-4 text-xs sm:text-sm">
            <h3 className="text-sm sm:text-base font-bold text-orange-600 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-orange-300/60 px-3 py-1.5 text-[11px] sm:text-xs text-slate-700 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 space-y-2">
              <p className="text-xs text-slate-600 font-medium">Connect</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg border border-orange-300/60 flex items-center justify-center text-slate-700 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg border border-orange-300/60 flex items-center justify-center text-slate-700 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0z"/>
                    <circle cx="12" cy="12" r="3.5"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-orange-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Rathna Agro Foods. All rights reserved.
          </p>
          <p>
            Designed with{" "}
            <span className="text-orange-600 font-semibold tracking-wide">
              saop.in
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}


