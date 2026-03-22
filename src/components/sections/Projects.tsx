"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/portfolio"
import { FaGithub } from "react-icons/fa"
import { Lock, ExternalLink, Folder, BrainCircuit, LineChart, LayoutTemplate } from "lucide-react"

const FILTERS = ["All", "AI Systems", "ML Research"] as const
type Filter = (typeof FILTERS)[number]

function TerminalWrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="mb-8 font-mono text-sm md:text-base w-full">
      <div className="mb-16 text-center">
        <h2 className="font-mono text-2xl md:text-3xl text-[var(--accent-pink)] mb-4 flex items-center justify-center gap-2">
          {title}
        </h2>
        <p className="text-[var(--text-muted)] font-mono text-sm">
          Active repository list and deployed environments
        </p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

function ProjectImage({ category, alt }: { category: string; alt: string }) {
  let Icon = Folder;
  if (category === "AI Systems") Icon = BrainCircuit;
  else if (category === "ML Research") Icon = LineChart;
  else if (category === "Full Stack") Icon = LayoutTemplate;

  return (
    <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center border-b border-[var(--border-terminal)] group-hover:bg-[#1a1a1a] transition-colors duration-300">
      <Icon size={48} className="text-[var(--accent-cyan)] mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(139,233,253,0.3)]" />
      <span className="font-mono text-[var(--accent-cyan)] text-[10px] px-4 text-center opacity-60 group-hover:opacity-100 transition-opacity">
        {"// " + alt.toLowerCase().replace(/\s+/g, '_')}
      </span>
    </div>
  )
}


export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All")

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <TerminalWrapper title="./projects -l">
        {/* Filter Flags */}
        <div className="flex flex-wrap items-center gap-3 mb-10 font-mono justify-center">
          <span className="text-[var(--text-muted)] text-sm">Flags:</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs rounded transition-all duration-300 ${
                filter === f
                  ? "bg-[var(--accent-cyan)]/20 border border-[var(--accent-cyan)] text-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)]"
                  : "bg-black/40 border border-[var(--border-terminal)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
              }`}
            >
              --{f.toLowerCase().replace(/\s+/g, '-')}
            </button>
          ))}
        </div>

        {/* Grid Output */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-xl border border-[var(--border-terminal)] bg-black/40 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-sm shadow-xl"
              >
                {/* Terminal Title Bar */}
                <div className="h-8 flex items-center px-4 bg-[#222]/80 border-b border-[var(--border-terminal)] select-none shrink-0">
                  <div className="flex space-x-1.5 w-1/4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80" />
                  </div>
                  <div className="flex-1 text-center font-mono text-[10px] text-[var(--text-muted)] truncate px-2">
                    {project.title.toLowerCase().replace(/\s+/g, '_')}.exe
                  </div>
                  <div className="w-1/4" />
                </div>

                {/* Image area */}
                <div className="relative w-full h-40 overflow-hidden bg-[#111] shrink-0 border-b border-[var(--border-terminal)]">
                  <ProjectImage
                    category={project.category}
                    alt={project.title}
                  />
                  {project.highlight && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 border border-[var(--accent-yellow)] text-[var(--accent-yellow)] text-[10px] rounded backdrop-blur-md shadow-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)] animate-pulse" />
                      {project.highlight}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 border border-[var(--border-terminal)] text-[var(--accent-pink)] text-[10px] rounded backdrop-blur-md shadow-lg">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-4">
                  <h3 className="font-bold font-mono text-[var(--text-primary)] text-lg flex items-center gap-2">
                    <Folder size={18} className="text-[var(--accent-cyan)]" />
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1 font-mono">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 py-3 border-y border-[var(--border-terminal)] border-dashed my-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-[var(--text-primary)] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links row */}
                  <div className="flex items-center justify-between pt-1">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-white/10 transition-colors duration-200 text-xs font-mono"
                      >
                        <FaGithub size={14} />
                        Repo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 text-[var(--text-muted)] border border-[var(--border-terminal)] text-xs font-mono">
                        <Lock size={14} className="text-[var(--accent-yellow)]" />
                        Private
                      </span>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--accent-cyan)]/10 hover:bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 transition-colors duration-200 text-xs font-mono group"
                      >
                        <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                        Deploy
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </TerminalWrapper>
    </section>
  )
}
