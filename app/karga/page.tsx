import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import KargaContent from "./KargaContent";

export const metadata: Metadata = {
  title: "Karga — Tüm Sayılar",
  description:
    "Karga bağımsız kültür dergisi. Tüm sayıları keşfedin — PDF olarak okuyun.",
};

export default function KargaPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <KargaContent />
      <Footer />
    </main>
  );
}
