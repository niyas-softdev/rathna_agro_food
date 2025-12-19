import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSProvider from "./providers/AOSProvider";

export const metadata = {
  title: "Rathna Agro Foods",
  description:
    "Premium quality millets, pulses, cereals and whole spices from Rathna Agro Foods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className=" text-slate-800 antialiased"
        suppressHydrationWarning
      >
        <AOSProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-[64px] sm:pt-[134px] pb-12">
  {children}
</main>
          <Footer />
        </div>
        </AOSProvider>
      </body>
    </html>
  );
}
