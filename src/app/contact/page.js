import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-16 space-y-20">

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>

      {/* Location Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Google Map - Horizontal */}
        <div className="w-full h-[420px] rounded-xl overflow-hidden border border-slate-200">
          <iframe
            src="https://www.google.com/maps?q=129%20Plaza%20Center%20GN%20Chetty%20Road%20Chennai%20600006&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>

        {/* Address & Details */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          
          <div className="space-y-2">
            <p className="font-semibold text-slate-800">📍 Address</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              No: 221 / 224, 129 Plaza Center,<br />
              GN Chetty Road, Mount Road,<br />
              Chennai – 600006
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-800">📞 Phone</p>
            <p className="text-sm text-slate-600">
              +91 90439 43016
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-800">📧 Email</p>
            <p className="text-sm text-slate-600">
              info@rathnaagrofoods.com
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-800">🕘 Working Hours</p>
            <p className="text-sm text-slate-600">
              Mon – Sat : 9:30 AM – 6:30 PM<br />
              Sunday : Closed
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
