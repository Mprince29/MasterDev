"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { hero } from "@/data/portfolio";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  const navLinks = [
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Experience", href: isHome ? "#experience" : "/#experience" },
    { name: "Projects", href: "/project" },
    { name: "Journey", href: "/journey" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "w-[95%] max-w-2xl bg-[var(--surface)] border border-[var(--line)] shadow-sm"
            : "w-[95%] max-w-3xl bg-transparent border-transparent"
        } rounded-full flex items-center justify-between px-6 py-3`}
      >
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-[var(--text)] transition-transform hover:scale-105">
          MasterDev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                pathname === link.href ? "text-[var(--accent)]" : "text-[var(--text-soft)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs font-semibold px-4 py-2 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-dark)] hover:scale-105 transition-all"
          >
            Resume
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-[var(--text)] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-lg md:hidden pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-serif transition-colors ${
                    pathname === link.href ? "text-[var(--accent)] font-bold" : "text-[var(--text)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <a
                  href={hero.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-semibold px-6 py-3 bg-[var(--accent)] text-white rounded-full"
                >
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
