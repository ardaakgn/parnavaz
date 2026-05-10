"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-40 pb-16 px-6 md:px-12 lg:px-20">
      {/* Top separator */}
      <div className="flex items-center gap-6 mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span
          className="text-accent/40 text-xs tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          ✦
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            className="text-3xl md:text-4xl text-text font-light tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            PARNAVAZ
          </p>
          <p className="text-text-muted text-xs tracking-[0.15em] uppercase">
            Bağımsız Sikiş Çizgi dergisi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <p className="text-text-dim text-xs tracking-widest uppercase mb-2">
            © {new Date().getFullYear()} Parnavaz
          </p>
          <p
            className="text-text-muted/40 text-xs"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
