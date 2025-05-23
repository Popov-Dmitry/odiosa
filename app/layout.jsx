import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/providers/cart-provider";
import Script from "next/script";

export const metadata = {
  title: "Odiosa – Home",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Odiosa – Home",
    url: "https://odiosa.eu/",
    siteName: "Odiosa",
    locale: "en_US",
    type: "website"
  }
};

const johnstemp = localFont({
  src: "../fonts/JohnstempW04-Medium.ttf",
  display: "swap",
  weight: "500",
  variable: "--font-johnstemp"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${johnstemp.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GTM_ID}');
          `}
        </Script>
      </head>
      <body className="relative">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <div
          className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none contrast-50 brightness-125 lg:hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black' opacity='0.6'><filter id='noiseFilter'><feTurbulence type='turbulence' baseFrequency='1.5' numOctaves='2' stitchTiles='stitch'/><feFuncR type='discrete' tableValues='0 1'/><feFuncG type='discrete' tableValues='0 1'/><feFuncB type='discrete' tableValues='0 1'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px"
          }}
        />
        <div
          className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none hidden contrast-50 brightness-125 lg:block"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black' opacity='0.6'><filter id='noiseFilter'><feTurbulence type='turbulence' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/><feFuncR type='discrete' tableValues='0 1'/><feFuncG type='discrete' tableValues='0 1'/><feFuncB type='discrete' tableValues='0 1'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px"
          }}
        />
        <main className="relative z-10 pt-[80px] lg:pt-[96px] pb-[60px] lg:pb-[120px]">
          <div className="min-h-[calc(100vh_-_80px_-_591px_-_60px)] lg:min-h-[calc(100vh_-_96px_-_158px_-_120px)]">
            <CartProvider>
              {children}
            </CartProvider>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
