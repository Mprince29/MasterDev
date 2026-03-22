import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import { hero } from "@/data/portfolio"

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-2 font-mono text-[10px] text-[var(--text-muted)] flex items-center gap-3 select-none">
      <span className="flex-1 border-t border-dashed border-[var(--border-terminal)]" />
      <span className="shrink-0 opacity-60"># [{label}] exit 0</span>
      <span className="flex-1 border-t border-dashed border-[var(--border-terminal)]" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <Hero />
      <SectionDivider label="home" />
      <About />
      <SectionDivider label="about" />
      <Experience />
      <SectionDivider label="experience" />
      <Skills />
      <SectionDivider label="skills" />
      <Projects />
      <SectionDivider label="projects" />
      <Contact />

      {/* Terminal Footer */}
      <footer className="border-t border-[var(--border-terminal)] mt-8 font-mono">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[var(--text-muted)] text-xs">
            <span className="text-[var(--accent-green)]">prince@macbook</span>
            <span className="text-[var(--accent-pink)]">:</span>
            <span className="text-[var(--accent-cyan)]">~</span>
            <span className="text-[var(--text-primary)]"> $</span>
            <span className="text-[#f8f8f2]"> echo &quot;© {new Date().getFullYear()} {hero.name}&quot;</span>
          </span>
          <span className="text-[var(--text-muted)] text-[10px] opacity-60">
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </span>
        </div>
      </footer>
    </main>
  )
}
