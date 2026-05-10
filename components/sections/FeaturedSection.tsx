"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { magazines } from "@/data/magazines";

export default function FeaturedSection() {
  const latest = magazines[magazines.length - 1];

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-accent/50" />
          <span
            className="text-accent/60 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Son Sayı
          </span>
        </div>
        <h2
          className="text-4xl md:text-6xl text-text font-light tracking-wider"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Güncel Sayı
        </h2>
      </motion.div>

      {/* Latest magazine featured */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-24"
      >
        <a
          href={latest.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div
            className="relative overflow-hidden p-10 md:p-16 cursor-pointer transition-all duration-700"
            style={{
              background: "linear-gradient(135deg, #1a0000 0%, #100000 100%)",
              border: "1px solid rgba(212, 160, 23, 0.12)",
            }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(212, 160, 23, 0.06) 0%, transparent 60%)",
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-20 items-start">
              <div className="flex-shrink-0">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 border border-accent/20 group-hover:border-accent/40 flex items-center justify-center transition-all duration-500"
                  style={{ background: "rgba(212, 160, 23, 0.02)" }}
                >
                  <span
                    className="text-accent/60 text-center"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: "13px", lineHeight: "1.6" }}
                  >
                    {latest.issue}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                {latest.theme && (
                  <p
                    className="text-accent/50 text-xs tracking-[0.3em] uppercase mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {latest.theme}
                  </p>
                )}
                <h3
                  className="text-4xl md:text-6xl text-text font-light tracking-wide mb-6 group-hover:text-accent/80 transition-colors duration-500"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    lineHeight: "1.1",
                  }}
                >
                  {latest.title}
                </h3>
                <p
                  className="text-text-muted leading-relaxed font-light max-w-lg mb-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {latest.description}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="text-text-dim text-xs tracking-widest"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {latest.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-accent/20" />
                  <span
                    className="text-accent/50 text-xs tracking-widest uppercase group-hover:text-accent transition-colors duration-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    PDF Oku →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </motion.div>

      {/* CTA to all issues */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span
            className="text-text-dim text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ✦
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>

        <p
          className="text-text-muted text-lg md:text-xl font-light mb-10 italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Tüm sayıları keşfet
        </p>

        <Link href="/karga">
          <motion.div
            className="inline-block group"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="px-12 py-4 border border-accent/20 group-hover:border-accent/50 transition-all duration-500 relative overflow-hidden"
              style={{
                background: "rgba(212, 160, 23, 0.03)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: "rgba(212, 160, 23, 0.06)" }}
                initial={{ opacity: 0, x: "-100%" }}
                whileHover={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.4 }}
              />
              <span
                className="relative z-10 text-text/60 group-hover:text-text text-xs tracking-[0.35em] uppercase font-medium transition-colors duration-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Arşive Gözat
              </span>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
