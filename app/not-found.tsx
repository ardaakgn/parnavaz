"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="text-accent/50 text-xs tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          404
        </p>
        <h1
          className="text-6xl md:text-8xl text-text font-light tracking-widest mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Kayıp
        </h1>
        <div className="w-16 h-px bg-accent/30 mx-auto mb-8" />
        <p
          className="text-text-muted text-base font-light mb-12 max-w-sm italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Aradığın sayfa karanlığa karıştı.
        </p>
        <Link href="/">
          <motion.div
            className="inline-block px-8 py-3 border border-accent/20 hover:border-accent/40 text-text-muted hover:text-text transition-all duration-400"
            whileHover={{ boxShadow: "0 0 20px rgba(212, 160, 23, 0.1)" }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ana Sayfaya Dön
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
