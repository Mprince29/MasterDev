"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { hero } from "@/data/portfolio"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      {/* Mac Terminal Title Bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-4 bg-[#2d2d2d]/90 backdrop-blur-md border-b border-[#1a1a1a] shadow-sm select-none"
      >
        {/* Left: Traffic Lights */}
        <div className="flex space-x-2 items-center w-1/4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#ff5f56] shadow-inner opacity-90 hover:opacity-100 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#ffbd2e] shadow-inner opacity-90 hover:opacity-100 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#27c93f] shadow-inner opacity-90 hover:opacity-100 cursor-pointer"></div>
        </div>

        {/* Center: Window Title */}
        <div className="flex-1 flex justify-center items-center cursor-default">
          <div className="flex items-center space-x-2 text-[#999999] text-sm font-medium font-sans tracking-wide">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <span>prince — bash — 80x24</span>
          </div>
        </div>

        {/* Right: Desktop Navigation Tabs / Info */}
        <nav className="hidden md:flex items-center justify-end space-x-4 w-1/4 font-mono text-xs text-[#a0a0a0]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 hover:text-[#f8f8f2] ${
                  isActive ? "text-[var(--accent-green)] font-semibold" : ""
                }`}
              >
                ~/{link.name.toLowerCase()}
              </a>
            )
          })}
          <a
            href={hero.resumeUrl}
            download
            className="text-[var(--accent-cyan)] hover:text-white transition-colors duration-200 border border-[var(--accent-cyan)]/30 px-2 py-0.5 rounded opacity-80 hover:opacity-100"
          >
            ./resume.pdf
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex justify-end w-1/4">
          <button
            className="text-[#999999] hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer (Terminal dropdown style) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-12 left-0 right-0 z-40 bg-[var(--bg-terminal)] border-b border-[#333] p-4 md:hidden font-mono text-sm"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-[#a0a0a0] mb-2">$ ls -la ~/portfolio/</span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--text-primary)] hover:text-[var(--accent-green)] transition-colors duration-200 flex items-center space-x-2"
                >
                  <span className="text-[var(--accent-cyan)]">drwxr-xr-x</span>
                  <span>{link.name.toLowerCase()}</span>
                </a>
              ))}
              <a
                href={hero.resumeUrl}
                download
                onClick={() => setMobileOpen(false)}
                className="text-[var(--text-primary)] hover:text-[var(--accent-yellow)] transition-colors duration-200 flex items-center space-x-2 mt-4"
              >
                <span className="text-[#ff79c6]">-rw-r--r--</span>
                <span>resume.pdf</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
