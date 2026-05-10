"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 10, 20);
  const bgOpacity = Math.min(scrollY / 200, 0.92);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          className="relative flex items-center justify-between"
          style={{
            background: scrolled
              ? `rgba(8, 0, 0, ${bgOpacity})`
              : "transparent",
            backdropFilter: scrolled ? `blur(${blurAmount}px)` : "none",
            WebkitBackdropFilter: scrolled ? `blur(${blurAmount}px)` : "none",
            borderBottom: scrolled
              ? "1px solid rgba(212, 160, 23, 0.12)"
              : "none",
            margin: "0 -24px",
            padding: "16px 24px",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="group relative">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-text font-display tracking-[0.25em] text-lg md:text-xl font-light uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                PARNAVAZ
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-px bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/" active={pathname === "/"}>
              Ana Sayfa
            </NavLink>
            <NavLink href="/karga" active={pathname === "/karga"}>
              Karga
            </NavLink>
            <motion.a
              href="/karga"
              className="relative group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium text-accent border border-accent/30 rounded-full"
                style={{
                  background: "rgba(212, 160, 23, 0.05)",
                  transition: "all 0.4s ease",
                }}
              >
                <span className="relative z-10">Sayıları Gör</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(212, 160, 23, 0.1)" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              className="block w-5 h-px bg-text"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-px bg-text"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-px bg-text"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[72px] left-0 right-0 z-40 px-6 py-8"
            style={{
              background: "rgba(8, 0, 0, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(212, 160, 23, 0.12)",
            }}
          >
            <div className="flex flex-col gap-6">
              <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>
                Ana Sayfa
              </MobileNavLink>
              <MobileNavLink href="/karga" onClick={() => setMenuOpen(false)}>
                Karga
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link href={href} className="relative group">
      <span
        className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
          active ? "text-accent" : "text-text-muted hover:text-text"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </span>
      {active && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
        />
      )}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className="group flex items-center gap-3">
      <span className="w-8 h-px bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
      <span
        className="text-2xl text-text font-light group-hover:text-accent transition-colors duration-300"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {children}
      </span>
    </Link>
  );
}
