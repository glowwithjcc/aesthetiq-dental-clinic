import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import StickyCTA from "../components/StickyCTA";
import PageTransition from "@/components/PageTransition";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "AesthetiQ Dental | Luxe Smile Studio",
  description:
    "Premium smile design, gum care & aesthetic dentistry in Chennai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body
        className="relative min-h-screen font-[var(--font-manrope)] text-white"
        style={{
          backgroundImage: "url('/backgrounds/marble-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-0"></div>

        {/* Gold atmospheric gradient glows */}
        <div className="fixed left-[-12%] top-24 h-96 w-96 bg-[#E3C770]/15 blur-[120px] rounded-full z-0"></div>
        <div className="fixed right-[-10%] bottom-10 h-[420px] w-[420px] bg-[#E3C770]/10 blur-[140px] rounded-full z-0"></div>

        <Navbar />
        <div className="relative z-10">{children}</div>

        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  );
}
