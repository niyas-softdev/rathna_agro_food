import { Suspense } from "react";
import Hero from "./components/Hero";
import AboutIntro from "./components/AboutIntro";
import Features from "./components/Features";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-20 lg:space-y-24">
      <Hero />

      <Features />
      <AboutIntro />
      <Stats />
      <Suspense fallback={<div className="px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-600">Loading products...</div>}>
        <Products limit={3} />
      </Suspense>
      <Testimonials />
      <ContactForm />
    </div>
  );
}
