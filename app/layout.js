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
      <body>
        {children}
      </body>
    </html>
  );
}
