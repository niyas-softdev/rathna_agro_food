"use client";

import Image from "next/image";

export default function Certifications() {
    return (
        <section className="py-12 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2
                    className="text-3xl font-bold text-slate-900 mb-8"
                    data-aos="fade-up"
                >
                    Our Achievements
                </h2>

                <div
                    className="flex flex-col items-center gap-6"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    <div className="relative w-full max-w-md h-auto rounded-xl overflow-hidden shadow-2xl skew-y-0 hover:skew-y-1 transition-transform duration-500">
                        <Image
                            src="/images/flipkart-gold-seller.png"
                            alt="Flipkart Gold Seller Certificate - Rathna Agro Foods"
                            width={600}
                            height={800}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="max-w-2xl text-center space-y-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">
                            Certified Excellence in E-Commerce
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            We are proud to be recognized as a <strong className="text-yellow-600">Gold Seller on Flipkart</strong>. This prestigious status reflects our unwavering commitment to product quality, timely delivery, and exceptional customer service. When you shop with Rathna Agro Foods, you are choosing a top-rated merchant dedicated to your satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
