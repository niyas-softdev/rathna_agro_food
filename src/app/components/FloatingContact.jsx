"use client";

export default function FloatingContact() {
  const phone = "+919043943016";

  const whatsappHref = `https://wa.me/919043943016?text=${encodeURIComponent(
    "Hello Rathna Agro Foods, I would like to know more details."
  )}`;

  return (
    <div className="fixed z-50 bottom-6 right-4 sm:bottom-8 sm:right-6 flex flex-col items-center gap-3 select-none print:hidden">
      
      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-60 animate-ping"></span>
        <WhatsAppIcon className="relative w-7 h-7 sm:w-8 sm:h-8" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${phone}`}
        aria-label="Call now"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        <span className="absolute inset-0 rounded-full bg-blue-400 opacity-60 animate-ping"></span>
        <PhoneIcon className="relative w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}

/* WhatsApp SVG */
function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 .08 5.29.08 11.92c0 2.1.55 4.16 1.59 5.98L0 24l6.3-1.61a11.9 11.9 0 005.7 1.47h.01c6.63 0 11.92-5.29 11.92-11.92 0-3.18-1.24-6.17-3.43-8.46z" />
    </svg>
  );
}

/* Phone SVG */
function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
    </svg>
  );
}
