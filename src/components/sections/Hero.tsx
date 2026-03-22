"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { hero, about } from "@/data/portfolio"
import { Mail, ArrowDown, Terminal } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Typewriter = ({ text, delay, onComplete }: { text: string; delay: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("")
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(timeout)
          if (onCompleteRef.current) onCompleteRef.current()
        }
      }, 15) // doubled the typing speed
    }

    const initialDelay = setTimeout(startTyping, delay * 1000)
    return () => { clearTimeout(initialDelay); clearInterval(timeout) }
  }, [text, delay])

  return <span>{displayText}</span>
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [step, setStep] = useState(0)
  const [origin, setOrigin] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin)
    }
  }, [])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center px-6 pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Boot sequence */}
        <div className="font-mono text-xs md:text-sm mb-12 space-y-2 max-w-2xl bg-black/40 p-4 border border-[var(--border-terminal)] rounded-lg backdrop-blur-sm self-start shadow-xl">
        <div className="flex flex-wrap items-start">
          <span className="text-[var(--accent-green)] mr-2 tracking-tight">prince@macbook</span>
          <span className="text-[var(--accent-pink)] mr-2">:</span>
          <span className="text-[var(--accent-cyan)] mr-2">~/portfolio</span>
          <span className="text-[var(--text-primary)] mr-2">$</span>
          {isInView && (
            <span className="text-[#f8f8f2]">
              <Typewriter text="npm start" delay={0.2} onComplete={() => setStep(1)} />
            </span>
          )}
        </div>

        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#a0a0a0]">
            <Typewriter text="> Building portfolio bundle..." delay={0.1} onComplete={() => setStep(2)} />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#a0a0a0]">
            <Typewriter text={`> Server running at ${origin || "http://localhost:3000"}`} delay={0.1} onComplete={() => setStep(3)} />
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--accent-green)] mt-2">
            <Typewriter text="✓ Compiled successfully in 143ms" delay={0.1} onComplete={() => setStep(4)} />
          </motion.div>
        )}
      </div>

      {/* Main reveal */}
      {step >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex flex-col lg:flex-row gap-10 items-start"
        >
          {/* ── LEFT: text content ── */}
          <div className="flex-1 border-l-4 border-[var(--accent-cyan)]/30 pl-8 py-4">
            <div className="mb-6 flex items-center gap-2 px-3 py-1.5 bg-black/60 border border-[var(--border-terminal)] text-xs text-[var(--accent-green)] w-fit font-mono rounded-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]" />
              </span>
              Location: Delhi, India // Status: Open to remote & freelance
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--accent-cyan)] to-white mb-6 drop-shadow-lg">
              Prince<span className="animate-pulse text-[var(--text-primary)]">_</span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-wide mb-8 font-mono max-w-3xl">
              <span className="text-[var(--accent-pink)]">const</span> role ={" "}
              <span className="text-[var(--accent-yellow)]">&quot;Full Stack &amp; Applied AI Engineer&quot;</span>;
            </p>

            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-mono">
              {hero.tagline}
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <a href={hero.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/50 hover:bg-[var(--accent-purple)]/20 transition-all duration-200 font-mono text-sm rounded-sm">
                <Terminal size={14} />
                View Resume
              </a>
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center justify-center px-6 py-3 border border-[var(--border-terminal)] text-[var(--text-secondary)] bg-black/40 hover:text-[var(--text-primary)] hover:border-[#666] transition-all duration-200 font-mono text-sm rounded-sm">
                cd ./projects
              </button>
            </div>

            <div className="mt-8 flex items-center gap-5">
              {[
                { icon: FaGithub,   href: hero.github,           label: "GitHub" },
                { icon: FaLinkedin, href: hero.linkedin,          label: "LinkedIn" },
                { icon: FaTwitter,  href: hero.twitter,           label: "Twitter" },
                { icon: Mail,       href: `mailto:${hero.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Video + About Me ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[460px] shrink-0 flex flex-col gap-6"
          >
            {/* Globe panel */}
            <div className="border border-[var(--border-terminal)] bg-black/50 overflow-hidden">
              {/* Chrome */}
              <div className="flex items-center px-3 py-2 bg-[#2d2d2d]/90 border-b border-[var(--border-terminal)]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="mx-auto text-[10px] text-[var(--text-muted)] font-mono select-none">
                  greeting.mp4 — live
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-green)]" />
                  </span>
                  <span className="text-[var(--accent-green)]">active</span>
                </span>
              </div>
              {/* Media Container */}
              <div className="w-full aspect-video bg-[#111] flex items-center justify-center overflow-hidden">
                <video 
                  src="/video.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3 py-1.5 border-t border-[var(--border-terminal)] font-mono text-[10px] text-[var(--text-muted)] text-center">
                Delhi, India · Remote globally available
              </div>
            </div>

            {/* About Me panel */}
            <div className="border border-[var(--border-terminal)] bg-black/40 p-5 rounded-md relative group hover:border-[var(--accent-cyan)]/50 transition-colors duration-300">
              <div className="font-mono text-[10px] text-[var(--text-muted)] mb-3 flex items-center justify-between">
                <span>{"// ABOUT_ME.md"}</span>
                <span className="text-[var(--accent-purple)] group-hover:animate-pulse">_read</span>
              </div>
              <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                {about.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-6 flex items-center space-x-2 text-[var(--text-muted)] text-sm font-mono"
      >
        <ArrowDown size={14} className="animate-bounce" />
        <span>Scroll for stdout...</span>
      </motion.div>
    </section>
  )
}
