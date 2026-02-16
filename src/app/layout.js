import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSProvider from "./providers/AOSProvider";
import FloatingContact from "./components/FloatingContact";
import Script from "next/script";


export const metadata = {
  title: "Rathna Agro Foods",
  description:
    "Premium quality millets, pulses, cereals and whole spices from Rathna Agro Foods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className=" text-slate-800 antialiased overflow-x-hidden"
        suppressHydrationWarning
      >

        <Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-17689816389"
  strategy="afterInteractive"
/>

<Script id="google-ads-conversion" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17689816389');
  `}
</Script>

<Script id="call-conversion-event" strategy="afterInteractive">
{`
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-17689816389/YiqmCMu3yPkbEMXalPNB',
        'value': 1.0,
        'currency': 'INR',
        'event_callback': callback
    });
    return false;
  }
  window.gtag_report_conversion = gtag_report_conversion;
`}
</Script>


        <AOSProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-[64px] sm:pt-[134px] pb-12">
              {children}
            </main>
            <Footer />
          </div>
        </AOSProvider>
        <FloatingContact />

      </body>
    </html>
  );
}
