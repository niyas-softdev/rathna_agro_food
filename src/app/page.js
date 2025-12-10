import Hero from "./components/Hero";
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
      <Stats />
      <Partners />
      <Products limit={3} />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
