"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col">
      {/* Mouse-follow ambient light */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(600px circle at ${50 + mousePos.x * 0.5}% ${50 + mousePos.y * 0.5}%, rgba(140, 20, 20, 0.08) 0%, transparent 70%)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
      />

      {/* Hero visual area */}
      <div className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6">
        {/* Cinematic image frame */}
        <motion.div
          style={{ y, opacity }}
          className="relative w-full max-w-3xl mx-auto mb-16"
        >
          <motion.div
            className="relative aspect-[16/10] overflow-hidden"
            style={{ scale }}
          >
            {/* Image placeholder with atmospheric gradient */}
            {/* Hero image */}
            <img
              src="/images/karga-hero.jpg"
              alt="Karga"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                filter: "brightness(0.75) contrast(1.1) saturate(0.9)",
              }}
            />

            {/* Cinematic color grade overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(80,5,5,0.35) 0%, rgba(8,0,0,0.15) 50%, rgba(4,0,8,0.4) 100%)",
                mixBlendMode: "multiply",
              }}
            />

            {/* Vignette — kenarları karart */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 75% 75% at center, transparent 25%, rgba(4,0,0,0.70) 70%, rgba(2,0,0,0.95) 100%)",
              }}
            />

            {/* Alt kısım fade — typography'ye geçiş */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(8,0,0,0.95))",
              }}
            />

            {/* Üst kısım subtle fade */}
            <div
              className="absolute top-0 left-0 right-0 h-1/4"
              style={{
                background:
                  "linear-gradient(to top, transparent, rgba(8,0,0,0.5))",
              }}
            />

            {/* Altın parıltı — kuşun üzerinde */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse 40% 50% at 48% 55%, rgba(212,160,23,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Corner marks */}
            {[
              "top-3 left-3",
              "top-3 right-3",
              "bottom-3 left-3",
              "bottom-3 right-3",
            ].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-4 h-4`}>
                <div
                  className="absolute border-accent/40"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                    borderTopWidth: i < 2 ? "0.5px" : 0,
                    borderBottomWidth: i >= 2 ? "0.5px" : 0,
                    borderLeftWidth: i % 2 === 0 ? "0.5px" : 0,
                    borderRightWidth: i % 2 === 1 ? "0.5px" : 0,
                  }}
                />
              </div>
            ))}
          </motion.div>

          {/* Image border */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ border: "1px solid rgba(212, 160, 23, 0.15)" }}
          />
        </motion.div>

        {/* Big typography */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h1
            className="text-[clamp(4rem,15vw,12rem)] font-light tracking-[0.15em] leading-none text-text uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow: "0 0 80px rgba(212, 160, 23, 0.15)",
            }}
          >
            KARGA
          </h1>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
          <span
            className="text-accent/60 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Bağımsız Kültür Dergisi
          </span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/50" />
        </motion.div>

        {/* Manifesto text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-muted text-sm md:text-base leading-relaxed text-center max-w-md font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Kenar boşluklarından doğan sesler. Karanlıktan süzülen imgeler.
          <br />
          Her sayı bir ritüel, her satır bir itiraf.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <Link href="/karga">
            <motion.div
              className="group relative px-10 py-4 border border-accent/25 overflow-hidden cursor-pointer"
              whileHover={{
                borderColor: "rgba(212, 160, 23, 0.5)",
                boxShadow: "0 0 25px rgba(212, 160, 23, 0.15), 0 0 50px rgba(212, 160, 23, 0.05)",
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: "rgba(212, 160, 23, 0.04)" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span
                className="relative z-10 text-text/70 group-hover:text-text text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sayıları Keşfet
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-accent/30" />
            <div className="w-1 h-1 rounded-full bg-accent/30" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
