"use client";

import { useState } from "react";
import { Loader2, CheckCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = () => {
    let newErrors = {};

    // Name: required, min 3 chars, only alphabets and spaces
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Only alphabets and spaces are allowed.";
    }

    // Phone: required, min 8 digits, supports international format
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Must be a valid phone number with at least 8 digits.";
    }

    // Email: proper email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Message: required, min 10 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as soon as user types in the specific field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setStatusMessage("Thank you for contacting Rathna Agro Foods. Our team will get back to you within 24 hours.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          message: "",
          honeypot: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.error || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus("error");
      setStatusMessage("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3" data-aos="fade-up" data-aos-delay="120">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Let&apos;s discuss your requirements
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            Share a brief overview of the products and volumes you are looking for, and our team
            will get in touch with suitable options.
          </p>
        </div>

        <div
          className="glass-soft p-6 sm:p-7 lg:p-8 relative overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="160"
        >
          {/* Success Overlay Animation */}
          <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center transition-all duration-700 ${submitStatus === 'success' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`transform transition-transform duration-700 delay-300 ${submitStatus === 'success' ? 'scale-100' : 'scale-50'}`}>
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
              <p className="text-slate-600 text-lg">{statusMessage}</p>

              <button
                onClick={() => setSubmitStatus(null)}
                className="mt-8 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Hidden Honeypot Field */}
            <div className="hidden">
              <label>Please ignore this field completely if you are human.</label>
              <input
                type="text"
                name="honeypot"
                tabIndex="-1"
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-orange-500 focus:ring-orange-200'} bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1 animate-pulse">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  className={`w-full rounded-xl border ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-orange-500 focus:ring-orange-200'} bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1 animate-pulse">{errors.phone}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-orange-500 focus:ring-orange-200'} bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1 animate-pulse">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Company / Business
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Organisation / Firm name (Optional)"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-colors"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">
                Message / Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share the product categories, estimated volumes and any specific grades you are interested in."
                className={`w-full rounded-xl border ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-orange-500 focus:ring-orange-200'} bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 resize-none transition-colors`}
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1 animate-pulse">{errors.message}</p>}
            </div>

            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm">
                {statusMessage}
              </div>
            )}

            <div className="flex flex-col gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || Object.values(errors).some(err => err !== "")}
                className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-6 sm:px-8 py-3.5 sm:py-3 text-base sm:text-sm font-semibold text-white shadow-lg shadow-orange-300/50 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
              <p className="text-[11px] sm:text-xs text-slate-500 text-center mx-auto max-w-sm">
                By submitting, you consent to being contacted over phone or email regarding your enquiry.
              </p>
            </div>
          </form>
        </div>

        {/* WhatsApp Quick Contact Mobile & Desktop Banner */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-8">
          <Link
            href="https://wa.me/918072702738?text=Hello%20Rathna%20Agro%20Foods%21%20I%20have%20an%20enquiry..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto mx-auto px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors rounded-2xl text-[#1da851] font-bold text-[15px] sm:text-base group"
          >
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Need immediate assistance? Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}


