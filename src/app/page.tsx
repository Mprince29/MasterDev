import Image from "next/image";
import Link from "next/link";
import { SkillsSection } from "@/components/ui/SkillTile";
import { ContactForm } from "@/components/ContactForm";
import { FadeInScroll } from "@/components/FadeInScroll";
import { hero, projects } from "@/data/portfolio";
import {
  Mail, ExternalLink, ArrowRight,
  Mic, Bot, Users, MessageSquare,
  Briefcase, Database, ShieldCheck,
  Award, Zap, FileText, LayoutTemplate,
  Search, Radio, Layers,
} from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
      {/* Hero */}
      <FadeInScroll id="about" className="mb-20 pt-12 relative z-10" delay={0}>
        <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-10 lg:gap-16 items-center">
        <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-dark)] mb-6">
          <span className="h-px w-8 bg-[var(--accent)]" />
          Lead Engineer · Applied AI
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[var(--text)] tracking-[-0.05em] mb-5 leading-[0.98]">
          Master Prince
        </h1>
        <p className="text-[var(--text)] text-xl md:text-2xl leading-snug max-w-2xl font-medium tracking-tight mb-4">
          I make ambitious software useful from the first messy idea to the system people can rely on.
        </p>
        <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-2xl mb-8">
          Currently leading engineering at Sujho AI. Previously shipped 5+ production AI systems, owning architecture, backend, frontend, and infrastructure end-to-end.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="mailto:prince28.01.2022@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors text-sm font-semibold shadow-[0_10px_30px_rgba(151,63,47,0.18)]">
            <Mail size={16} />
            Hire me for a project
          </a>
          <a href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--surface-muted)] hover:border-[var(--accent)] transition-all text-sm font-medium shadow-sm">
            <FaGithub size={16} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--surface-muted)] hover:border-[var(--accent)] transition-all text-sm font-medium shadow-sm">
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--surface-muted)] hover:border-[var(--accent)] transition-all text-sm font-medium shadow-sm">
            <FaXTwitter size={16} />
            X
          </a>
          <a href={hero.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--surface-muted)] hover:border-[var(--accent)] transition-all text-sm font-medium shadow-sm">
            <FileText size={16} />
            Resume
          </a>
        </div>
        </div>

        <aside className="relative overflow-hidden rounded-[2rem] bg-[#caa77e] aspect-[4/3] shadow-[0_24px_60px_rgba(55,42,31,0.16)]">
          <Image
            src="/profile-photo-wide.png"
            alt="Master Prince"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 sm:p-8 pt-28">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/75 mb-2">Independent engineer</p>
            <p className="font-serif text-3xl sm:text-4xl leading-none tracking-[-0.04em] text-white">Think deeply.<br />Ship neatly.</p>
          </div>
        </aside>
        </div>
      </FadeInScroll>

      {/* Quick numbers */}
      <FadeInScroll className="mb-14" delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "5+", label: "production LLM systems", sub: "Shipped end-to-end at M37 Labs" },
            { value: "10+", label: "agents in routing layer", sub: "Planning, tools, routing, and state" },
            { value: "70%", label: "screening time reduced", sub: "Layout-aware document AI pipeline" },
            { value: "95%+", label: "classifier accuracy", sub: "Production scikit-learn email classifier" },
          ].map(({ value, label, sub }) => (
            <div key={label} className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200">
              <div>
                <p className="font-serif text-3xl font-semibold text-[var(--text)] leading-none mb-1">{value}</p>
                <p className="text-sm font-semibold text-[var(--text)] leading-snug">{label}</p>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] leading-snug border-t border-[var(--line)] pt-3">{sub}</p>
            </div>
          ))}
        </div>
      </FadeInScroll>

      {/* Work Experience */}
      <FadeInScroll id="experience" className="mb-14" delay={0.2}>
        <p className="section-kicker mb-3">Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] mb-7 flex items-center gap-3">
          <Briefcase className="text-[var(--accent)]" size={26} />
          Work Experience
        </h2>

        <div className="space-y-10">
          {/* Sujho AI */}
          <div>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">Lead Engineer</h3>
                <span className="text-[var(--accent-dark)] text-xs font-semibold uppercase tracking-widest mt-0.5 block">Sujho AI · Delhi NCR · Full-time</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-soft)] px-3 py-1.5 rounded-lg border border-[var(--line)] shrink-0">Aug 2026 – Present</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2 rounded-2xl p-7 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Users size={22} className="text-[var(--accent)] mb-4" />
                <p className="text-2xl font-bold text-[var(--text)] leading-snug mb-2">AI Teaching Assistant</p>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed">Leading an AI teaching-assistant platform for Indian K-12 tutoring, bringing teacher, student, and parent agents together over a shared data layer on WhatsApp.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Bot size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-lg font-bold text-[var(--text)] leading-snug mb-2">Delivery &amp; DevOps</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Setting up CI/CD, automated tests, and AI-assisted code review across GCP, GCS, Firestore, and a Neo4j knowledge graph.</p>
              </div>
            </div>
          </div>

          {/* M37 Labs */}
          <div>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">Full Stack AI Developer</h3>
                <span className="text-[var(--accent-dark)] text-xs font-semibold uppercase tracking-widest mt-0.5 block">M37 Labs · Delhi NCR · Full-time</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-soft)] px-3 py-1.5 rounded-lg border border-[var(--line)] shrink-0">May 2025 – Jul 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              <div className="md:col-span-2 rounded-2xl p-7 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Mic size={22} className="text-[var(--accent)] mb-4" />
                <p className="text-2xl font-bold text-[var(--text)] leading-snug mb-2">5+ Production LLM Systems</p>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed">Shipped agentic systems with planning, tool/function calling, routing, and persistent state across 10+ agents on FastAPI and Next.js at 85% uptime.</p>
              </div>
              <div className="md:col-span-1 rounded-2xl p-6 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Bot size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-lg font-bold text-[var(--text)] leading-snug mb-2">RAG &amp; SQL Search</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">End-to-end RAG pipelines over Qdrant and ChromaDB, including a LangChain SQL chatbot over 200K+ publications.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <MessageSquare size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">MCP &amp; Provider Routing</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">MCP servers with AES-256 OAuth storage and GPT-4, Claude, and Gemini routing through LiteLLM fallbacks.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Search size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Document AI</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Layout-aware PDF parsing with OCR fallback and hybrid spaCy scoring, reducing manual screening time by 70%.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Layers size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Email Classifier</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Shipped a scikit-learn email classifier at 95%+ accuracy as part of the production document workflow.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Users size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Performance &amp; Infra</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Redis caching cut API latency 40% and database load 60% over PostgreSQL; deployed with Docker on AWS EC2.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Radio size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Agent Architecture</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Designed planning, routing, tool use, and persistent-state patterns for multi-agent production systems.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Database size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">System Reliability</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Operated a routing layer spanning 10+ agents at 85% uptime across enterprise client systems.</p>
              </div>
            </div>
          </div>

          {/* Luchkee Health */}
          <div>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">Full Stack Developer Intern</h3>
                <span className="text-[var(--accent-dark)] text-xs font-semibold uppercase tracking-widest mt-0.5 block">Luchkee Health · Remote · Internship</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-soft)] px-3 py-1.5 rounded-lg border border-[var(--line)] shrink-0">Dec 2024 – Feb 2025</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2 rounded-2xl p-7 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <ShieldCheck size={22} className="text-[var(--accent)] mb-4" />
                <p className="text-2xl font-bold text-[var(--text)] leading-snug mb-2">Healthcare Platform</p>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed">Architected a MERN healthcare platform with JWT auth, RBAC, and encrypted patient data storage. Reduced MongoDB query time by 30% and dashboard load from 3 seconds to under 1 second.</p>
              </div>

            </div>
          </div>
        </div>
      </FadeInScroll>

      {/* Projects */}
      <FadeInScroll className="mb-14" delay={0.2}>
        <p className="section-kicker mb-3">Selected work</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] mb-7 flex items-center gap-3">
          <LayoutTemplate className="text-[var(--accent)]" size={26} />
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projects
            .filter((p) => p.image)
            .slice(0, 3)
            .map(({ id, title, github, description, tags, image }, index) => (
              <div key={id} className="soft-card flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                <div className="relative w-full aspect-[1.9] shrink-0 overflow-hidden bg-[var(--surface-muted)]">
                  <Image
                    src={image as string}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm text-white text-[11px] font-serif font-semibold flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-[var(--surface)]/90 hover:bg-[var(--bg-soft)] rounded-lg backdrop-blur-sm">
                      <ExternalLink size={13} className="text-[var(--text-muted)]" />
                    </a>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[15px] font-semibold text-[var(--text)] mb-2 leading-snug">{title}</h3>
                  <p className="text-[var(--text-soft)] text-[12px] leading-relaxed flex-grow line-clamp-3">{description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--line)]">
                    {tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-[var(--bg-soft)] text-[var(--text-muted)] text-[10px] font-medium rounded-full border border-[var(--line)]">{t}</span>
                    ))}
                    {tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[var(--text-muted)] text-[10px] font-medium">+{tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[var(--bg-soft)] hover:border-[var(--accent)] transition-all text-sm font-medium shadow-sm"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </FadeInScroll>

      {/* Technical Skills */}
      <FadeInScroll className="mb-14" delay={0.2}>
        <p className="section-kicker mb-3">Toolkit</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] mb-7 flex items-center gap-3">
          <Zap className="text-[var(--accent)]" size={26} />
          Technical Skills
        </h2>
        <SkillsSection />
      </FadeInScroll>

      {/* Education & Engineering Strengths */}
      <FadeInScroll className="mb-14" delay={0.2}>
        <p className="section-kicker mb-3">Background</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] mb-7 flex items-center gap-3">
          <FileText className="text-[var(--accent)]" size={26} />
          Education &amp; Engineering Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="soft-card p-6 md:col-span-2">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-[var(--text)] text-base leading-tight">B.Tech – Computer Science &amp; Engineering (AI)</h3>
                <p className="text-[var(--accent-dark)] text-sm mt-1 font-medium">Jamia Hamdard University, New Delhi</p>
              </div>
              <div className="text-right shrink-0">
                <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--bg-soft)] border border-[var(--line)] text-[var(--text-muted)] text-xs font-semibold">CGPA 7.8 / 10</div>
                <p className="text-[var(--text-muted)] text-xs mt-1.5">Aug 2021 – May 2025</p>
              </div>
            </div>
            <p className="text-[var(--text-soft)] text-sm leading-relaxed mb-4">
              B.Tech in Computer Science &amp; Engineering (AI) at Jamia Hamdard University, New Delhi. Focused on AI, full-stack development, and software engineering.
            </p>
            <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--line)]">
              <p className="text-[var(--text)] text-[11px] font-semibold mb-1">Current focus: production AI engineering</p>
              <p className="text-[var(--text-soft)] text-[11px] leading-relaxed">
                LLM agents, RAG and document AI, fine-tuned local inference, model routing, and reliable backend infrastructure.
              </p>
            </div>
          </div>

          <div className="soft-card p-6 flex flex-col">
            <h3 className="font-semibold text-[var(--text)] text-base mb-4 flex items-center gap-2">
              <Award size={16} className="text-[var(--accent)]" />
              Engineering strengths
            </h3>
            <div className="space-y-3 flex-grow">
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--line)]">
                <p className="text-[var(--text)] text-[12px] font-semibold leading-tight">Lead from the architecture</p>
                <p className="text-[var(--text-soft)] text-[11px] mt-1.5 leading-relaxed">Make technical decisions across model routing, retrieval, agent workflows, backend services, and infrastructure.</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--line)]">
                <p className="text-[var(--text)] text-[12px] font-semibold leading-tight">Own delivery end-to-end</p>
                <p className="text-[var(--text-soft)] text-[11px] mt-1.5 leading-relaxed">Move from ambiguous problem to production system with fast iteration, guardrails, and measurable reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeInScroll>

      {/* Contact */}
      <FadeInScroll className="mb-14" delay={0.2}>
        <p className="section-kicker mb-3">Say hello</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] mb-7 flex items-center gap-3">
          <Mail className="text-[var(--accent)]" size={26} />
          Get in touch
        </h2>
        <ContactForm />
      </FadeInScroll>

      {/* Footer */}
      <FadeInScroll className="text-center text-sm text-[var(--text-muted)] pt-6 mt-4" delay={0.3}>
        <div className="flex items-center justify-center gap-5 mb-4">
          <a href="mailto:prince28.01.2022@gmail.com" className="hover:text-[#EA4335] transition-colors" title="Email"><Mail size={18} /></a>
          <a href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors" title="GitHub"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] transition-colors" title="LinkedIn"><FaLinkedin size={18} /></a>
          <a href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors" title="X"><FaXTwitter size={18} /></a>
        </div>
        © {new Date().getFullYear()} Master Prince · Delhi NCR, India
      </FadeInScroll>

    </div>
  );
}
