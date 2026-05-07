"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { hero } from "@/data/portfolio"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={`section-shell flex h-14 items-center justify-between rounded-md border px-4 transition-colors ${
          scrolled
            ? "border-[var(--line)] bg-[rgba(251,247,239,0.9)] shadow-sm backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="font-semibold tracking-tight text-[var(--text)]">
          Prince
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[var(--text-soft)] md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="transition-colors hover:text-[var(--text)]">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-[var(--line)] px-4 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-dark)]"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-[var(--text)] md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="section-shell mt-2 rounded-md border border-[var(--line)] bg-[var(--surface)] p-3 shadow-sm md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-3 text-sm text-[var(--text-soft)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]"
              >
                {link.name}
              </a>
            ))}
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-[var(--accent-dark)] hover:bg-[var(--surface-muted)]"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
