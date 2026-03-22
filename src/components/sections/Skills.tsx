"use client"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { skills } from "@/data/portfolio"
import { Code2, Server, BrainCircuit, Database, Cloud, LineChart } from "lucide-react"

function TerminalSkillsBlock({ children, command, delay = 0 }: { children: React.ReactNode; command: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.1, delay }}
      className="mb-8 font-mono text-sm md:text-base w-full overflow-hidden"
    >
      <div className="flex flex-wrap items-start mb-6 text-[var(--text-primary)]">
        <span className="text-[var(--accent-green)] mr-2">prince@macbook</span>
        <span className="text-[var(--accent-pink)] mr-2">:</span>
        <span className="text-[var(--accent-cyan)] mr-2">~/skills</span>
        <span className="text-[var(--text-primary)] mr-2">$</span>
        <span className="text-[#f8f8f2]">{command}</span>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isInView ? { opacity: 1, height: "auto" } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-[var(--text-secondary)]"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const categoryConfig: Record<string, { color: string; icon: React.ElementType }> = {
  Frontend: { color: "var(--accent-cyan)", icon: Code2 },
  Backend: { color: "var(--accent-green)", icon: Server },
  "AI / LLM": { color: "var(--accent-purple)", icon: BrainCircuit },
  Databases: { color: "var(--accent-yellow)", icon: Database },
  Infrastructure: { color: "var(--accent-pink)", icon: Cloud },
  "ML / Data": { color: "var(--accent-cyan)", icon: LineChart },
}

const getIconConfig = (skill: string) => {
  const map: Record<string, { slug: string; hex: string }> = {
    "React": { slug: "react", hex: "61DAFB" },
    "Next.js": { slug: "nextdotjs", hex: "ffffff" },
    "TypeScript": { slug: "typescript", hex: "3178C6" },
    "JavaScript": { slug: "javascript", hex: "F7DF1E" },
    "Tailwind CSS": { slug: "tailwindcss", hex: "06B6D4" },
    "Framer Motion": { slug: "framer", hex: "0055FF" },
    "Python": { slug: "python", hex: "3776AB" },
    "FastAPI": { slug: "fastapi", hex: "009688" },
    "Node.js": { slug: "nodedotjs", hex: "339939" },
    "Express.js": { slug: "express", hex: "ffffff" },
    "Flask": { slug: "flask", hex: "ffffff" },
    "Streamlit": { slug: "streamlit", hex: "FF4B4B" },
    "OpenAI GPT-4": { slug: "openai", hex: "412991" },
    "Anthropic Claude": { slug: "anthropic", hex: "D97757" },
    "Google Gemini": { slug: "googlegemini", hex: "8E75B2" },
    "LangChain": { slug: "langchain", hex: "1C3C3C" },
    "PostgreSQL": { slug: "postgresql", hex: "4169E1" },
    "MongoDB": { slug: "mongodb", hex: "47A248" },
    "Redis": { slug: "redis", hex: "DC382D" },
    "MySQL": { slug: "mysql", hex: "4479A1" },
    "SQLite": { slug: "sqlite", hex: "003B57" },
    "Docker": { slug: "docker", hex: "2496ED" },
    "AWS EC2": { slug: "amazonwebservices", hex: "232F3E" },
    "Vercel": { slug: "vercel", hex: "ffffff" },
    "Render": { slug: "render", hex: "46E3B7" },
    "Celery": { slug: "celery", hex: "37814A" },
    "Socket.IO": { slug: "socketdotio", hex: "ffffff" },
    "NumPy": { slug: "numpy", hex: "013243" },
    "Pandas": { slug: "pandas", hex: "150458" },
    "Scikit-learn": { slug: "scikitlearn", hex: "F7931E" },
    "OpenCV": { slug: "opencv", hex: "5C3EE8" },
    "TensorFlow": { slug: "tensorflow", hex: "FF6F00" },
    "PyTorch": { slug: "pytorch", hex: "EE4C2C" },
    "JWT": { slug: "jsonwebtokens", hex: "ffffff" },
    "OAuth 2.0": { slug: "oauth", hex: "ffffff" },
  }
  return map[skill];
}

const SkillNode = ({ skill }: { skill: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const config = getIconConfig(skill)
  const hex = config ? config.hex : "ffffff"
  
  // Use a muted gray color when not hovered
  const url = config 
    ? `https://cdn.simpleicons.org/${config.slug}/${isHovered ? hex : "777777"}` 
    : null;

  return (
    <div
      className="relative flex items-center justify-center p-3 rounded-lg border bg-[#111] transition-all duration-300 cursor-crosshair group"
      style={{
        borderColor: isHovered ? `#${hex}50` : 'var(--border-terminal)',
        boxShadow: isHovered ? `0 0 15px #${hex}40` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {url && !imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
         <img 
            src={url} 
            alt={skill} 
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
            onError={() => setImgError(true)}
         />
      ) : (
         <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono text-white/50 border border-white/20">
           {skill.charAt(0)}
         </div>
      )}
      
      {/* Tooltip Name */}
      <div 
        className={`absolute top-[120%] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap border backdrop-blur-md transition-all duration-200 z-50 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        style={{
          backgroundColor: `#${hex}15`,
          borderColor: `#${hex}40`,
          color: `#${hex}`
        }}
      >
        {skill}
      </div>
    </div>
  )
}

export default function Skills() {
  const entries = Object.entries(skills)

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="font-mono text-2xl md:text-3xl text-[var(--text-primary)] mb-4 flex items-center justify-center gap-2">
          <TerminalSkillsBlock command="pkg list --installed --icons" delay={0}>
             <span />
          </TerminalSkillsBlock>
        </h2>
        <p className="text-[var(--text-muted)] font-mono text-sm max-w-2xl mx-auto">
          System capabilities and installed technical packages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map(([category, items], idx) => {
          const config = categoryConfig[category] || { color: "var(--accent-cyan)", icon: Code2 }
          const Icon = config.icon

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="border border-[var(--border-terminal)] bg-black/40 rounded-xl overflow-visible backdrop-blur-sm hover:border-[var(--accent-cyan)]/50 transition-colors duration-300 shadow-xl"
            >
              {/* Card Header (Mac Window Style) */}
              <div className="h-10 flex items-center px-4 bg-[#222]/80 border-b border-[var(--border-terminal)] shrink-0 gap-3 rounded-t-xl z-20 relative">
                <div className="flex space-x-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center font-mono text-[11px] font-bold tracking-wide uppercase flex items-center justify-center gap-2" style={{ color: config.color }}>
                  <Icon size={14} />
                  {category}
                </div>
                <div className="w-8" />
              </div>

              {/* Card Body - Skill Nodes */}
              <div className="p-6 flex flex-wrap gap-4 relative z-10">
                {items.map((skill) => (
                  <SkillNode key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

