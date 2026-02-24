import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, FileText, Briefcase, Globe, ExternalLink, Award, CheckCircle } from "lucide-react";

export const metadata = {
    title: "Certifications | Rathna Agro Foods",
    description: "View our official licenses and certifications including FSSAI, GST, MSME, and APEDA, demonstrating our commitment to quality, compliance, and international standards.",
};

const certificates = [
    {
        id: "fssai",
        title: "FSSAI License",
        idNumber: "Reg. No. 12420000000000", /* Mock registration number, update if required */
        description: "Our Food Safety and Standards Authority of India registration, ensuring all our agro-products strictly adhere to national safety and hygiene regulations.",
        pdfSrc: "/FSSAI.pdf",
        tag: "Safety & Hygiene",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
        logoUrl: "/fssai.png",
    },
    {
        id: "gst",
        title: "GST Registration",
        idNumber: "Authentic Business Operations",
        description: "Official Goods and Services Tax certification validating our legitimate business operations and full compliance with taxation laws.",
        pdfSrc: "/GST.pdf",
        tag: "Government Compliance",
        color: "bg-blue-50 text-blue-700 border-blue-200",
        logoUrl: "/images/gst-logo.png",
    },
    {
        id: "msme",
        title: "MSME Certificate",
        idNumber: "Registered Enterprise",
        description: "Ministry of Micro, Small & Medium Enterprises registration reflecting our active status and contribution to socio-economic development.",
        pdfSrc: "/MSME.pdf",
        tag: "Enterprise Integrity",
        color: "bg-orange-50 text-orange-700 border-orange-200",
        logoUrl: "/images/msme-logo.svg",
    },
    {
        id: "apeda",
        title: "APEDA Registration",
        idNumber: "Global Export Authorized",
        description: "Agricultural and Processed Food Products Export Development Authority certification, authorizing us to export premium agricultural goods worldwide.",
        pdfSrc: "/APEDA-CERTIFICATE.pdf",
        tag: "International Trade",
        color: "bg-purple-50 text-purple-700 border-purple-200",
        logoUrl: "/apeda.png",
    },
];

export default function CertificatesPage() {
    return (
        <>
            {/* HER0 SECTION */}
            <section className="relative py-24 lg:py-32 bg-[#0f172a] overflow-hidden">
                {/* Modern Abstract Elements */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600 rounded-full blur-[140px]" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-600 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-8 text-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.15)]"
                        data-aos="fade-down"
                    >
                        <Award size={18} className="text-orange-400" /> Recognized & Verified
                    </div>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight"
                        data-aos="fade-up"
                    >
                        Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Certifications</span>
                    </h1>
                    <p
                        className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Upholding the highest standards of safety, ethics, and unparalleled quality for our customers and international trading partners.
                    </p>
                </div>

                {/* Curved transition bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-50"></path>
                    </svg>
                </div>
            </section>

            {/* CARDS SECTION */}
            <section className="py-20 lg:py-28 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                        {certificates.map((cert, index) => (
                            <div
                                key={cert.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 sm:p-10 lg:p-12 flex flex-col relative overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out"
                            >
                                {/* Decorative elements inside card */}
                                <div className={`absolute top-0 right-0 w-64 h-64 rounded-bl-[100px] opacity-10 ${cert.color.split(' ')[0]} -z-0 transition-transform duration-700 group-hover:scale-110`}></div>
                                <div className="absolute top-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-slate-200 group-hover:text-slate-100">
                                    <ShieldCheck size={120} />
                                </div>

                                <div className="relative z-10 flex flex-col h-full items-center text-center">

                                    {/* Brand Logo & Tag */}
                                    <div className="flex flex-col items-center gap-5 mb-8 w-full">
                                        <div className="relative w-48 h-28 sm:w-56 sm:h-32 bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                                            <Image
                                                src={cert.logoUrl}
                                                alt={`${cert.title} Logo`}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border shadow-sm ${cert.color}`}>
                                            {cert.tag}
                                        </div>
                                    </div>

                                    {/* Certificate Info */}
                                    <div className="mb-8 flex-1 flex flex-col items-center">
                                        <div className="flex items-center justify-center gap-3 mb-3">
                                            <h3 className="text-3xl font-extrabold text-slate-800">{cert.title}</h3>
                                            <CheckCircle size={22} className="text-blue-500" />
                                        </div>

                                        <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm font-semibold mb-6 border border-slate-200">
                                            {cert.idNumber}
                                        </div>

                                        <p className="text-slate-600 leading-relaxed text-lg pb-4 border-b border-slate-100">
                                            {cert.description}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-auto">
                                        <a
                                            href={cert.pdfSrc}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between w-full px-8 py-5 bg-slate-900 group-hover:bg-orange-600 text-white text-[16px] font-bold rounded-2xl transition-all duration-500 shadow-lg hover:shadow-orange-500/30 overflow-hidden relative"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                <FileText size={20} />
                                                View Official Document
                                            </span>
                                            <ExternalLink size={20} className="relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />

                                            {/* Button shine effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM BANNER */}
            <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10" data-aos="zoom-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-blue-100 transform rotate-3 hover:rotate-6 transition-transform">
                        <ShieldCheck size={40} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
                        Need Detailed Documentation?
                    </h2>
                    <p className="text-slate-600 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
                        If you represent a business or international buyer and require additional export documentations, quality control records, or specific lab test reports, our team is ready to assist you.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white hover:bg-orange-600 font-bold transition-all duration-300 shadow-xl hover:shadow-orange-500/30 text-lg hover:-translate-y-1 group">
                        Contact Us Today
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
