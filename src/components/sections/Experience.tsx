"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experience } from "@/data/portfolio"
import { MapPin, Calendar, Briefcase, GraduationCap, ChevronRight } from "lucide-react"

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function TerminalWindow({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="w-full rounded-xl border border-[var(--border-terminal)] bg-black/40 overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent-cyan)]/30">
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
      <div className="p-6 md:p-8 text-[var(--text-secondary)]">
        {children}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="font-mono text-2xl md:text-3xl text-[var(--accent-yellow)] mb-4 flex items-center justify-center gap-2">
          {"./experience -v"}
        </h2>
        <p className="text-[var(--text-muted)] font-mono text-sm">
          A log of professional history and built systems
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <TerminalWindow title={`history_log[${index}].json`}>
              <div className="flex flex-col md:flex-row gap-6 font-mono">
                {/* Left side info (Title, Company, Icons) */}
                <div className="md:w-1/3 shrink-0 border-b md:border-b-0 md:border-r border-[var(--border-terminal)] pb-6 md:pb-0 md:pr-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded bg-black/50 border ${item.type === 'Education' ? 'border-[var(--accent-pink)] text-[var(--accent-pink)]' : 'border-[var(--accent-cyan)] text-[var(--accent-cyan)]'}`}>
                      {item.type === "Education" ? (
                        <GraduationCap size={24} />
                      ) : (
                        <Briefcase size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)]">
                        {item.role}
                      </h3>
                      <div className="text-[var(--accent-cyan)] text-sm">{item.company}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4 text-[11px] text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-[var(--accent-yellow)]" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[var(--accent-pink)]" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight size={12} className="text-[var(--accent-green)]" />
                      {item.type}
                    </div>
                  </div>
                </div>

                {/* Right side bullets */}
                <div className="md:w-2/3">
                  <div className="text-[10px] text-[var(--text-muted)] mb-3">{"// Task execution log"}</div>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <span className="text-[var(--accent-green)] mt-0.5 shrink-0">{"->"}</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TerminalWindow>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
