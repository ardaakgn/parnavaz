"use client";

import { motion } from "framer-motion";
import { magazines } from "@/data/magazines";
import MagazineCard from "@/components/ui/MagazineCard";

export default function KargaContent() {
  return (
    <div className="relative min-h-screen pt-40 pb-20 px-6 md:px-12 lg:px-20">
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(140, 20, 20, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-accent/50" />
            <span
              className="text-accent/50 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Arşiv
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(4rem,11vw,7rem)] font-light tracking-[0.12em] leading-none text-text uppercase mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow: "0 0 60px rgba(212, 160, 23, 0.1)",
            }}
          >
            KARGA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px bg-gradient-to-r from-accent/50 to-transparent w-32" />
              <span
                className="text-accent/40 text-lg"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {magazines.length} Sayı
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-text-muted text-base md:text-lg font-light leading-relaxed max-w-xl italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Her sayı bir ritüel. Her kapak bir kapı. PDF formatında, tarayıcıda
            okuyun.
          </motion.p>
        </div>

        {/* Magazine list */}
        <div className="flex flex-col gap-5">
          {magazines
            .slice()
            .reverse()
            .map((magazine, index) => (
              <MagazineCard
                key={magazine.id}
                magazine={magazine}
                index={index}
              />
            ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-border/50 text-center"
        >
          <p
            className="text-text-dim text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Yeni sayılar düzenli olarak eklenir
          </p>
          <p
            className="text-text-muted/40 text-sm"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Takipte kal.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
