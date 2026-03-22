"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { about } from "@/data/portfolio"
import { Briefcase, Award, Zap, Code2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"

function TerminalWindow({ children, title, delay = 0 }: { children: React.ReactNode; title: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="w-full rounded-xl border border-[var(--border-terminal)] bg-black/40 overflow-hidden shadow-2xl backdrop-blur-sm"
    >
      {/* Mac Window Controls */}
      <div className="h-8 flex items-center px-4 bg-[#222]/80 border-b border-[var(--border-terminal)] select-none">
        <div className="flex space-x-2 w-1/4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80" />
        </div>
        <div className="flex-1 text-center font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
          {title}
        </div>
        <div className="w-1/4" />
      </div>
      <div className="p-6 text-[var(--text-secondary)]">
        {children}
      </div>
    </motion.div>
  )
}

const aiSkills = [
  "RAG Pipelines", "Multi-Agent Systems", "LoRA Fine-tuning",
  "NL-to-SQL", "MCP Servers", "LangChain", "FastAPI",
  "Next.js", "PostgreSQL", "Docker", "Redis", "Qdrant",
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <TerminalWindow title="bash — htop — 100x40" delay={0.1}>
        <BentoGrid className="max-w-5xl mx-auto">

          {/* Tile 1 — M37 Labs (large) */}
          <BentoGridItem
            className="md:col-span-2 group hover:scale-[1.01] transition-transform duration-300 border border-[var(--border-terminal)] bg-[var(--bg-terminal)] hover:border-[var(--accent-cyan)]/50"
            icon={<Briefcase size={20} className="text-[var(--accent-cyan)] mb-3 group-hover:scale-110 transition-transform duration-300" />}
            title={
              <span className="font-mono font-bold text-[var(--text-primary)] flex items-center">
                Full Stack Developer · Applied AI
              </span>
            }
            description={
              <div className="mt-3 space-y-3 font-mono">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-[10px] border border-[var(--accent-cyan)]/20">
                    Full-time · May 2024 – Present
                  </span>
                  <span className="px-2 py-1 rounded bg-white/5 text-[var(--text-muted)] text-[10px] border border-white/10 flex items-center gap-1">
                    @ M37 Labs
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  Building production AI systems for enterprise clients across India and Malaysia.
                  Multi-agent platforms, NL-to-SQL over 200K+ publications, AI recruitment pipelines — 99.9% uptime, 1000+ daily automated workflows.
                </p>
              </div>
            }
          />

          {/* Tile 2 — Luchkee Health */}
          <BentoGridItem
            className="group hover:scale-[1.01] transition-transform duration-300 border border-[var(--border-terminal)] bg-[var(--bg-terminal)] hover:border-[var(--accent-green)]/50"
            icon={<Briefcase size={20} className="text-[var(--accent-green)] mb-3 group-hover:scale-110 transition-transform duration-300" />}
            title={
              <span className="font-mono font-bold text-[var(--text-primary)]">
                Full Stack Intern
              </span>
            }
            description={
              <div className="mt-2 space-y-2 font-mono">
                <div className="text-[var(--text-muted)] text-[10px]">@ Luchkee Health · Dec 2024 – Feb 2025</div>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  MERN stack healthcare platform. MongoDB query optimisation cut dashboard load from 3s → under 1s. API validation reduced invalid requests by 80%.
                </p>
              </div>
            }
          />



          {/* Tile 5 — Core stack (large) */}
          <BentoGridItem
            className="md:col-span-2 group hover:scale-[1.01] transition-transform duration-300 border border-[var(--border-terminal)] bg-[var(--bg-terminal)] hover:border-[var(--accent-cyan)]/50"
            icon={<Code2 size={20} className="text-[var(--accent-cyan)] mb-3 group-hover:scale-110 transition-transform duration-300" />}
            title={<span className="font-mono font-bold text-[var(--text-primary)]">Core AI & Stack Variables</span>}
            description={
              <div className="flex flex-wrap gap-2 mt-4 font-mono">
                {aiSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-black/40 border border-[var(--border-terminal)] text-[var(--text-secondary)] text-xs hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            }
          />

          {/* Tile 6 — Certifications + GitHub */}
          <BentoGridItem
            className="group hover:scale-[1.01] transition-transform duration-300 border border-[var(--border-terminal)] bg-[var(--bg-terminal)] hover:border-[var(--accent-purple)]/50"
            icon={<Award size={20} className="text-[var(--accent-purple)] mb-3 group-hover:scale-110 transition-transform duration-300" />}
            title={<span className="font-mono font-bold text-[var(--text-primary)]">Certifications</span>}
            description={
              <div className="mt-3 space-y-3 font-mono">
                {about.certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-2">
                    <Zap size={10} className="text-[var(--accent-purple)] mt-1 shrink-0" />
                    <span className="text-[var(--text-secondary)] text-xs leading-relaxed">{cert}</span>
                  </div>
                ))}
                <a
                  href="https://github.com/Mprince29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded text-[var(--text-primary)] transition-colors duration-200 text-xs"
                >
                  <FaGithub size={14} />
                  GitHub Profile
                </a>
              </div>
            }
          />
        </BentoGrid>
      </TerminalWindow>
    </section>
  )
}

