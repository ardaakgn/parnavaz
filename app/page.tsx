import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";

export const metadata: Metadata = {
  title: "PARNAVAZ — Bağımsız Kültür",
  description:
    "Parnavaz — Karga bağımsız kültür dergisi. Yaratıcılığın karanlık köşelerinden doğan sesler.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
