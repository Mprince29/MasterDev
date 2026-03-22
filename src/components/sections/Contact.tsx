"use client"
import { useState } from "react"
import { Globe } from "@/components/ui/globe"
import { hero } from "@/data/portfolio"
import { Mail, CheckCircle2, TerminalSquare } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

function TerminalWrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="mb-8 font-mono text-sm md:text-base w-full">
      <div className="mb-16 text-center">
        <h2 className="font-mono text-2xl md:text-3xl text-[var(--accent-green)] mb-4 flex items-center justify-center gap-2">
          {title}
        </h2>
        <p className="text-[var(--text-muted)] font-mono text-sm">
          Initialize secure connection protocol
        </p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

const contactLinks = [
  { icon: Mail, label: "Email", value: hero.email, href: `mailto:${hero.email}` },
  { icon: FaGithub, label: "GitHub", value: "github.com/Mprince29", href: hero.github },
  { icon: FaLinkedin, label: "LinkedIn", value: "master-prince", href: hero.linkedin },
  { icon: FaTwitter, label: "Twitter / X", value: "@Mprince_28", href: hero.twitter },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:${hero.email}?subject=${subject}&body=${body}`
    await new Promise((r) => setTimeout(r, 800))
    setStatus("sent")
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto mb-20">
      <TerminalWrapper title="./connect_agent.sh">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Network & Globe */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[var(--border-terminal)] bg-black/40 overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="h-8 flex items-center px-4 bg-[#222]/80 border-b border-[var(--border-terminal)] select-none">
                <div className="flex space-x-1.5 w-1/4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80" />
                </div>
                <div className="flex-1 text-center font-mono text-[10px] text-[var(--text-muted)] truncate">
                  network_visualizer.exe
                </div>
                <div className="w-1/4" />
              </div>
              <div className="p-4 text-[var(--text-primary)] flex flex-col items-center justify-center relative min-h-[250px] overflow-hidden">
                <div className="absolute top-4 left-4 text-[10px] text-[var(--accent-green)] font-mono border border-[var(--accent-green)]/30 px-2 py-0.5 rounded bg-[var(--accent-green)]/10">
                  [OK] Active globally
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2 border border-white/10 px-2 py-0.5 rounded bg-white/5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-green)]" />
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-mono">Listening</span>
                </div>
                
                <div className="w-full max-w-[220px] aspect-square relative z-10 my-4">
                  <Globe />
                </div>
                <div className="absolute bottom-4 text-center w-full text-[10px] text-[var(--text-muted)] tracking-widest uppercase font-mono">
                  Delhi, India → Node: Remote Target
                </div>
              </div>
            </div>

            <div className="rounded border border-[var(--border-terminal)] bg-black/20 p-5">
              <div className="text-[var(--accent-pink)] mb-4 text-sm font-bold border-b border-[var(--border-terminal)] pb-3 font-mono flex items-center gap-2">
                <TerminalSquare size={16} /> Open Ports Map
              </div>
              <div className="space-y-2">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex justify-between items-center text-xs hover:bg-white/5 p-2 rounded transition-colors group font-mono"
                  >
                    <span className="flex items-center gap-3 text-[var(--text-primary)]">
                       <Icon size={14} className="text-[var(--accent-cyan)] group-hover:scale-110 transition-transform" /> {label}
                    </span>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-green)] transition-colors">{value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form disguised as terminal input */}
          <div className="rounded-xl border border-[var(--border-terminal)] bg-black/40 shadow-2xl backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="h-8 flex items-center px-4 bg-[#222]/80 border-b border-[var(--border-terminal)] select-none shrink-0">
              <div className="flex space-x-1.5 w-1/4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80" />
              </div>
              <div className="flex-1 text-center font-mono text-[10px] text-[var(--text-muted)] truncate">
                secure_payload_sender.sh
              </div>
              <div className="w-1/4" />
            </div>
            
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col p-6 space-y-6">
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-[var(--accent-yellow)] uppercase block mb-1 font-mono">let payload_sender =</label>
                  <input
                    type="text"
                    required
                    placeholder='"John Doe"'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-[var(--border-terminal)] rounded px-3 py-2 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-cyan)] font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[var(--accent-yellow)] uppercase block mb-1 font-mono">let target_reply_to =</label>
                  <input
                    type="email"
                    required
                    placeholder='"john@company.com"'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-[var(--border-terminal)] rounded px-3 py-2 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-cyan)] font-mono transition-colors"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-[10px] text-[var(--accent-yellow)] uppercase block mb-1 font-mono">let message_body =</label>
                  <textarea
                    required
                    rows={5}
                    placeholder='"Write your query or deployment requirements here..."'
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-[var(--border-terminal)] rounded px-3 py-2 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-cyan)] font-mono resize-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "sent"}
                className={`mt-auto py-3 px-4 rounded font-mono text-sm font-bold transition-all duration-300 flex justify-center items-center gap-2 ${
                  status === "sent" 
                  ? "bg-[var(--accent-green)]/10 border border-[var(--accent-green)] text-[var(--accent-green)]"
                  : "bg-[var(--bg-terminal)] border border-[var(--border-terminal)] text-[var(--text-primary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:bg-white/5 hover:shadow-[0_0_15px_rgba(139,233,253,0.2)]"
                }`}
              >
                {status === "idle" && "Execute payload.send()"}
                {status === "loading" && <span className="animate-pulse">Compiling transmission...</span>}
                {status === "sent" && <><CheckCircle2 size={16} /> Transmission Complete</>}
              </button>
            </form>
          </div>
        </div>

      </TerminalWrapper>
    </section>
  )
}
