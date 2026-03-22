"use client"
import { useRef, useState, useEffect } from "react"
import { useInView, motion } from "framer-motion"
import { User, Briefcase, FolderOpen, Cpu, CheckCircle2 } from "lucide-react"

type RichLine =
  | { kind: "cmd"; text: string }
  | { kind: "profile" }
  | { kind: "work" }
  | { kind: "projects" }
  | { kind: "skills" }
  | { kind: "open" }
  | { kind: "cursor" }

const SEQUENCE: { line: RichLine; delay: number }[] = [
  { delay: 0,    line: { kind: "cmd",      text: "whoami" } },
  { delay: 500,  line: { kind: "profile" } },
  { delay: 1100, line: { kind: "cmd",      text: "cat work.txt" } },
  { delay: 1600, line: { kind: "work" } },
  { delay: 2300, line: { kind: "cmd",      text: "ls personal_projects/" } },
  { delay: 2800, line: { kind: "projects" } },
  { delay: 3500, line: { kind: "cmd",      text: "cat skills/ai.txt" } },
  { delay: 4000, line: { kind: "skills" } },
  { delay: 4700, line: { kind: "cmd",      text: "cat open_to.txt" } },
  { delay: 5200, line: { kind: "open" } },
  { delay: 5800, line: { kind: "cursor" } },
]

const PROJECTS = [
  "Mental-Health-AI",
  "AQI-Forecasting",
  "Proctoring-Framework",
  "Multi-Agent-Platform",
  "NL-to-SQL-Chatbot",
]

const AI_SKILLS = ["LoRA fine-tuning", "RAG", "NL-to-SQL", "Multi-Agent", "MCP Servers", "LangChain", "FastAPI"]

const OPEN_TO = ["Remote", "Hybrid", "Freelance", "Gig work", "Relocation (India)"]

function RichOutput({ line }: { line: RichLine }) {
  if (line.kind === "cmd") return null
  if (line.kind === "cursor") {
    return (
      <div className="flex items-center gap-1.5 mt-1 pl-1">
        <span className="text-[var(--accent-green)] text-xs select-none">prince@macbook</span>
        <span className="text-[var(--accent-pink)] text-xs">:</span>
        <span className="text-[var(--accent-cyan)] text-xs">~</span>
        <span className="text-[var(--text-primary)] text-xs"> $</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="w-[6px] h-[13px] bg-[var(--text-primary)] inline-block ml-1"
        />
      </div>
    )
  }

  if (line.kind === "profile") {
    return (
      <div className="pl-6 flex flex-wrap items-center gap-x-4 gap-y-1 py-1 text-sm">
        <span className="flex items-center gap-1.5">
          <User size={12} className="text-[var(--accent-cyan)] shrink-0" />
          <span className="text-[var(--text-primary)] font-bold">Prince</span>
        </span>
        <span className="text-[var(--text-muted)] hidden sm:inline">·</span>
        <span className="text-[var(--accent-pink)]">Full Stack Dev · Applied AI Engineer</span>
        <span className="text-[var(--text-muted)] hidden sm:inline">·</span>
        <span className="text-[var(--text-secondary)]">Delhi, India</span>
      </div>
    )
  }

  if (line.kind === "work") {
    return (
      <div className="pl-6 py-1 space-y-0.5">
        <div className="flex items-center gap-2 text-sm">
          <Briefcase size={12} className="text-[var(--accent-yellow)] shrink-0" />
          <span className="text-[var(--accent-yellow)] font-bold">M37 Labs</span>
          <span className="text-[var(--text-muted)] text-xs">Full-time · May 2024 – Present</span>
        </div>
        <div className="pl-5 text-[var(--text-secondary)] text-xs leading-relaxed">
          Building production AI systems for enterprise clients in India &amp; Malaysia
        </div>
      </div>
    )
  }

  if (line.kind === "projects") {
    return (
      <div className="pl-6 flex flex-wrap gap-2 py-1">
        {PROJECTS.map((p) => (
          <span key={p} className="flex items-center gap-1 text-xs text-[var(--accent-cyan)]">
            <FolderOpen size={11} className="shrink-0" />
            {p}/
          </span>
        ))}
      </div>
    )
  }

  if (line.kind === "skills") {
    return (
      <div className="pl-6 flex flex-wrap gap-1.5 py-1">
        {AI_SKILLS.map((s) => (
          <span
            key={s}
            className="flex items-center gap-1 text-[10px] px-2 py-0.5 border border-[var(--accent-purple)]/40 text-[var(--accent-purple)] bg-[var(--accent-purple)]/5"
          >
            <Cpu size={9} className="shrink-0" />
            {s}
          </span>
        ))}
      </div>
    )
  }

  if (line.kind === "open") {
    return (
      <div className="pl-6 flex flex-wrap gap-3 py-1">
        {OPEN_TO.map((o) => (
          <span key={o} className="flex items-center gap-1 text-xs text-[var(--accent-green)]">
            <CheckCircle2 size={11} className="shrink-0" />
            {o}
          </span>
        ))}
      </div>
    )
  }

  return null
}

function Prompt({ cmd }: { cmd: string }) {
  return (
    <div className="flex items-center gap-1 text-sm flex-wrap">
      <span className="text-[var(--accent-green)] shrink-0">prince@macbook</span>
      <span className="text-[var(--accent-pink)] shrink-0">:</span>
      <span className="text-[var(--accent-cyan)] shrink-0">~</span>
      <span className="text-[var(--text-primary)] shrink-0"> $</span>
      <span className="text-[#f8f8f2] ml-1">{cmd}</span>
    </div>
  )
}

function TerminalContent() {
  const [visible, setVisible] = useState<{ line: RichLine; delay: number }[]>([])
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true
    SEQUENCE.forEach((item) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, item])
      }, item.delay)
    })
  }, [])

  return (
    <div className="p-5 font-mono text-sm space-y-2 min-h-[260px]">
      {visible.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {item.line.kind === "cmd" ? (
            <Prompt cmd={item.line.text} />
          ) : (
            <RichOutput line={item.line} />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default function TerminalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="overflow-hidden border border-[var(--border-terminal)] shadow-xl shadow-black/50"
          style={{ background: "rgba(0,0,0,0.75)" }}
        >
          {/* Mac chrome bar */}
          <div className="flex items-center px-4 py-2.5 border-b border-[var(--border-terminal)] bg-[#2d2d2d]/90">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="mx-auto text-[11px] text-[var(--text-muted)] font-mono select-none">
              prince@macbook — zsh — 80×24
            </span>
          </div>

          {isInView && <TerminalContent />}
        </motion.div>
      </div>
    </section>
  )
}
