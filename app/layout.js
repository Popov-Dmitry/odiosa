import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header";

export const metadata = {
  title: "Odiosa"
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
      <Header />
      <body className="relative">
        <div
          className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='black' opacity='0.4'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='1' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px"
          }}
        />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
