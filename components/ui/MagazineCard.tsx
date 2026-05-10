"use client";

import { motion } from "framer-motion";
import { Magazine } from "@/data/magazines";

interface MagazineCardProps {
  magazine: Magazine;
  index: number;
}

export default function MagazineCard({ magazine, index }: MagazineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <a
        href={magazine.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="magazine-card relative overflow-hidden rounded-sm p-8 md:p-10 cursor-pointer">
          {/* Ambient glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(212, 160, 23, 0.06) 0%, transparent 70%)",
            }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
            {/* Issue number */}
            <div className="flex-shrink-0">
              <div
                className="w-14 h-14 md:w-16 md:h-16 border border-accent/20 group-hover:border-accent/50 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(212,160,23,0.15)]"
                style={{ background: "rgba(212, 160, 23, 0.03)" }}
              >
                <span
                  className="text-accent text-xs tracking-widest font-light"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: "11px" }}
                >
                  {magazine.issue}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {magazine.theme && (
                  <span
                    className="text-accent/60 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {magazine.theme}
                  </span>
                )}
                <span className="w-1 h-1 rounded-full bg-accent/20" />
                <span
                  className="text-text-dim text-xs tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {magazine.date}
                </span>
              </div>

              <h3
                className="text-2xl md:text-3xl text-text font-light tracking-wide mb-4 group-hover:text-accent/90 transition-colors duration-400"
                style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: "1.2" }}
              >
                {magazine.title}
              </h3>

              <p
                className="text-text-muted text-sm md:text-base leading-relaxed font-light max-w-xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {magazine.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 self-center md:self-start md:mt-2">
              <motion.div
                className="w-10 h-10 border border-accent/15 group-hover:border-accent/40 flex items-center justify-center transition-all duration-500"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-accent/40 group-hover:text-accent transition-colors duration-400"
                >
                  <path
                    d="M1 7H13M8 2L13 7L8 12"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="relative z-10 mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-accent/30"
            >
              <path
                d="M2 1H10C10.5523 1 11 1.44772 11 2V10C11 10.5523 10.5523 11 10 11H2C1.44772 11 1 10.5523 1 10V2C1 1.44772 1.44772 1 2 1Z"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M3.5 4H8.5M3.5 6H8.5M3.5 8H6"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-text-dim text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              PDF — Yeni sekmede açılır
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
