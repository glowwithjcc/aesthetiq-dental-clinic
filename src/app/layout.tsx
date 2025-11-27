import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import StickyCTA from "../components/StickyCTA";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "AesthetiQ Dental | Luxe Smile Studio",
  description: "Premium smile design, gum care & aesthetic dentistry in Chennai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen"
        style={{
          backgroundImage: "url('/backgrounds/marble-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Black marble dim overlay */}
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-0"></div>

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE TRANSITION WRAPPER */}
        <PageTransition>
          <div className="relative z-10">{children}</div>
        </PageTransition>

        {/* CTAs */}
        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  );
}
