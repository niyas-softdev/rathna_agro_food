export default function ContactForm() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-3" data-aos="fade-up" data-aos-delay="120">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#fbbf24]">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Let&apos;s discuss your requirements
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/90">
            Share a brief overview of the products and volumes you are looking for, and our team
            will get in touch with suitable options.
          </p>
        </div>

        <div
          className="glass-soft p-6 sm:p-7 lg:p-8"
          data-aos="zoom-in"
          data-aos-delay="160"
        >
          <form action="#" method="post" className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white/90">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 shadow-sm focus:border-[#fbbf24] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white/90">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 ..."
                  className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 shadow-sm focus:border-[#fbbf24] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white/90">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 shadow-sm focus:border-[#fbbf24] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white/90">
                  Company / Business
                </label>
                <input
                  type="text"
                  placeholder="Organisation / Firm name"
                  className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 shadow-sm focus:border-[#fbbf24] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]/30"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-white/90">
                Message / Requirements <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share the product categories, estimated volumes and any specific grades you are interested in."
                className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 shadow-sm focus:border-[#fbbf24] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]/30 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] px-6 sm:px-7 py-2.5 text-sm font-semibold text-[#0f172a] shadow-lg shadow-[#fbbf24]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Submit Enquiry
              </button>
              <p className="text-[11px] sm:text-xs text-white/70">
                By submitting, you consent to being contacted over phone or email regarding your
                enquiry.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


