import { SkillsSection } from "@/components/ui/SkillTile";
import {
  Mail, ExternalLink,
  BrainCircuit, Mic, Bot, Users, MessageSquare,
  Briefcase, Database, ShieldCheck,
  Wind, Award, Zap, FileText, LayoutTemplate,
  Network, Search, Radio, Layers,
} from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="w-full fade-in-page">

      {/* Hero */}
      <section className="mb-14 fade-section" style={{ animationDelay: "0ms" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-xs font-medium text-[var(--accent-dark)] mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-dark)]" />
          </span>
          Available for freelance work
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--text)] tracking-tight mb-5 leading-[1.1]">
          Master Prince
        </h1>
        <p className="text-[var(--text-soft)] text-lg md:text-xl leading-relaxed max-w-2xl font-light mb-4">
          Full Stack Developer &amp; Applied AI Engineer based in Delhi. I build AI-powered web products, fast APIs, and automation systems for startups, agencies, and businesses that want software to save time and move faster.
        </p>
        <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-2xl mb-8">
          Currently at M37 Labs building production AI systems for enterprise clients in India and Malaysia, multi-agent automation, NL to SQL search, AI recruitment, and brand intelligence tools. I also take on freelance projects: if you need an AI feature, a full stack web app, or an automation workflow built cleanly and shipped fast, I&apos;m available.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="mailto:prince28.01.2022@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--text)] text-[var(--surface)] hover:bg-[#1a1815] transition-colors text-sm font-medium shadow-sm">
            <Mail size={16} />
            Hire me for a project
          </a>
          <a href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[#f6f8fa] hover:text-[#24292f] hover:border-[#24292f] transition-all text-sm font-medium shadow-sm">
            <FaGithub size={16} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[#EBF5FB] hover:text-[#0077B5] hover:border-[#0077B5] transition-all text-sm font-medium shadow-sm">
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[#f0f0f0] hover:text-[#000000] hover:border-[#000000] transition-all text-sm font-medium shadow-sm">
            <FaXTwitter size={16} />
            X
          </a>
          <a href="/Master_Prince_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--text)] hover:bg-[#EBF3FF] hover:text-[var(--accent-dark)] hover:border-[var(--accent)] transition-all text-sm font-medium shadow-sm">
            <FileText size={16} />
            Resume
          </a>
        </div>
      </section>

      {/* Quick numbers */}
      <section className="mb-14 fade-section" style={{ animationDelay: "80ms" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "6+", label: "AI systems shipped", sub: "End-to-end from spec to production" },
            { value: "1,000+", label: "tasks automated daily", sub: "Multi-agent platform in live enterprise use" },
            { value: "70%", label: "faster hiring for clients", sub: "Resume screener with 95%+ accuracy" },
            { value: "200K+", label: "articles made searchable", sub: "Plain-English NL-to-SQL over a 3.6 GB DB" },
          ].map(({ value, label, sub }) => (
            <div key={label} className="bg-white border border-[var(--line)] rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200">
              <div>
                <p className="font-serif text-3xl font-semibold text-[var(--text)] leading-none mb-1">{value}</p>
                <p className="text-sm font-semibold text-[var(--text)] leading-snug">{label}</p>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] leading-snug border-t border-[var(--line)] pt-3">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-14 fade-section" style={{ animationDelay: "160ms" }}>
        <h2 className="font-serif text-3xl text-[var(--text)] mb-7 flex items-center gap-3">
          <Briefcase className="text-[var(--accent)]" size={26} />
          Work Experience
        </h2>

        <div className="space-y-10">
          {/* M37 Labs */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">Full Stack Developer · Applied AI</h3>
                <span className="text-[var(--accent-dark)] text-xs font-semibold uppercase tracking-widest mt-0.5 block">M37 Labs · Delhi, India · Full-time</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-soft)] px-3 py-1.5 rounded-lg border border-[var(--line)]">May 2024 – Present</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="col-span-2 rounded-2xl p-7 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Mic size={22} className="text-[var(--accent)] mb-4" />
                <p className="text-2xl font-bold text-[var(--text)] leading-snug mb-2">Voice-Controlled Multi-Agent Platform</p>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed">An enterprise-grade autonomous multi-agent platform that automates workflows across email, documents, calendars, spreadsheets, presentations, and voice systems using a unified multi-LLM architecture. Its core innovation, the AgentBrain Pipeline, creates intelligent agents through autonomous research, context fusion, and dynamic identity synthesis instead of static prompting.</p>
              </div>
              <div className="col-span-1 rounded-2xl p-6 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Bot size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-lg font-bold text-[var(--text)] leading-snug mb-2">AI Developer Assistant</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Claude API-powered tool routing to agents for code Q&amp;A, refactoring, Git, and OCR screen analysis. Dual OCR pipeline. MongoDB chat history.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <MessageSquare size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Media Monitoring NL Search</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">200K+ press articles searchable in plain English over a 3.6 GB MySQL DB. Redis caching: 5s → 2s response time.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Search size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Influencer Discovery Platform</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">AI-driven profile discovery via Selenium + SerpAPI. Async PDF &amp; Excel reports via Celery and Redis. FastAPI + Next.js 16 dashboard.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Layers size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Persona-Aware Chatbot</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Detects user persona, retrieves via ChromaDB semantic search, generates personalised responses via OpenAI. 5-scraper knowledge base.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Users size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">AI Recruitment Platform</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">100+ resumes screened in under 30s. 70% ML + 30% LLM hybrid. Real-time WebSocket updates, Zoom scheduling.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Radio size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">Brand Intelligence Platform</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">Automated daily digests, AI chat, audio transcription, and PowerPoint generation. Node.js + TypeScript + FastAPI. W&amp;B Weave LLM tracing.</p>
              </div>
              <div className="rounded-2xl p-6 flex flex-col justify-end min-h-[190px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <Database size={20} className="text-[var(--accent)] mb-4" />
                <p className="text-base font-bold text-[var(--text)] leading-snug mb-2">DB &amp; Infrastructure</p>
                <p className="text-[var(--text-soft)] text-xs leading-relaxed">PostgreSQL tuning + Redis caching   API times down 40%, DB load down 60%. Docker Compose, AWS EC2, Vercel, Render.</p>
              </div>
            </div>
          </div>

          {/* Luchkee Health */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">Full Stack Developer Intern</h3>
                <span className="text-[var(--accent-dark)] text-xs font-semibold uppercase tracking-widest mt-0.5 block">Luchkee Health · Delhi, India · Internship</span>
              </div>
              <span className="text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-soft)] px-3 py-1.5 rounded-lg border border-[var(--line)]">Dec 2024 – Feb 2025</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-2xl p-7 flex flex-col justify-end min-h-[200px] bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                <ShieldCheck size={22} className="text-[var(--accent)] mb-4" />
                <p className="text-2xl font-bold text-[var(--text)] leading-snug mb-2">Healthcare Platform</p>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed">MERN stack app with JWT auth, role-based access control, and encrypted patient data storage. Built and shipped features across the full stack independently as part of a small engineering team.</p>
              </div>
              <div className="col-span-1 flex flex-col gap-3">
                <div className="rounded-2xl p-5 flex flex-col justify-end flex-1 bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                  <Network size={18} className="text-[var(--accent)] mb-3" />
                  <p className="text-sm font-bold text-[var(--text)] leading-snug mb-1">API Validation</p>
                  <p className="text-[var(--text-soft)] text-xs leading-relaxed">Zod validation on every Express endpoint   cut bad API calls by 80%.</p>
                </div>
                <div className="rounded-2xl p-5 flex flex-col justify-end flex-1 bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
                  <Database size={18} className="text-[var(--accent)] mb-3" />
                  <p className="text-sm font-bold text-[var(--text)] leading-snug mb-1">Query Performance</p>
                  <p className="text-[var(--text-soft)] text-xs leading-relaxed">MongoDB indexes   dashboard load from ~3s to under 1s.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-14 fade-section" style={{ animationDelay: "240ms" }}>
        <h2 className="font-serif text-3xl text-[var(--text)] mb-7 flex items-center gap-3">
          <LayoutTemplate className="text-[var(--accent)]" size={26} />
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: BrainCircuit,
              title: "Mental Health AI System",
              href: "https://github.com/Mprince29/Mental-Health-AI",
              desc: "Fine-tuned Qwen on Apple Silicon using cleaned Reddit data and synthetic responses. 14-class symptom classifier that also works as a chatbot. Runs locally via MLX   nothing leaves the device. Served through FastAPI.",
              tags: ["Python", "MLX-LM", "LoRA", "Qwen2.5", "FastAPI"],
            },
            {
              icon: ShieldCheck,
              title: "AI Exam Proctoring",
              href: "https://github.com/Mprince29/Intelligent-Proctoring-Detection-Framework",
              desc: "Final year project. Browser-based exam monitor that catches multiple faces, gaze deviation, head pose issues, and unauthorised objects at 95%+ accuracy. Auto-generates a timestamped violation report with annotated frames after each session.",
              tags: ["OpenCV", "MediaPipe", "face-api.js", "Flask", "Python"],
            },
            {
              icon: Wind,
              title: "Delhi PM2.5 AQI Forecasting",
              href: "https://github.com/Mprince29/ML-via-Delhi-AQI",
              desc: "Neural network built entirely from scratch in NumPy   ReLU, Adam optimiser, MSE loss. Trained on 6 years of CPCB sensor data. Random Forest baseline hit R² = 0.9501. No ML frameworks for the core model.",
              tags: ["Python", "NumPy", "scikit-learn", "XGBoost", "Pandas"],
            },
          ].map(({ icon: Icon, title, href, desc, tags }) => (
            <div key={title} className="soft-card p-5 aspect-square flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-9 h-9 bg-[var(--surface-muted)] rounded-xl flex items-center justify-center border border-[var(--line)] shrink-0">
                  <Icon size={17} className="text-[var(--accent-dark)]" />
                </div>
                <a href={href} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-[var(--bg-soft)] rounded-lg">
                  <ExternalLink size={13} className="text-[var(--text-muted)]" />
                </a>
              </div>
              <h3 className="text-sm font-semibold text-[var(--text)] mb-2 leading-snug">{title}</h3>
              <p className="text-[var(--text-soft)] text-[11px] leading-relaxed flex-grow overflow-hidden">{desc}</p>
              <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-[var(--line)]">
                {tags.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 bg-[var(--bg-soft)] text-[var(--text-muted)] text-[10px] rounded border border-[var(--line)]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-14 fade-section" style={{ animationDelay: "320ms" }}>
        <h2 className="font-serif text-3xl text-[var(--text)] mb-7 flex items-center gap-3">
          <Zap className="text-[var(--accent)]" size={26} />
          Technical Skills
        </h2>
        <SkillsSection />
      </section>

      {/* Education & Certifications */}
      <section className="mb-14 fade-section" style={{ animationDelay: "400ms" }}>
        <h2 className="font-serif text-3xl text-[var(--text)] mb-7 flex items-center gap-3">
          <FileText className="text-[var(--accent)]" size={26} />
          Education &amp; Certifications
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
                <p className="text-[var(--text-muted)] text-xs mt-1.5">Graduated 2025</p>
              </div>
            </div>
            <p className="text-[var(--text-soft)] text-sm leading-relaxed mb-4">
              Four-year AI-specialised engineering programme at Jamia Hamdard, one of Delhi&apos;s central universities. The curriculum leaned heavily into applied machine learning, computer vision, and NLP alongside core software engineering   which is why most of my personal projects are end-to-end systems rather than just notebooks.
            </p>
            <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--line)]">
              <p className="text-[var(--text)] text-[11px] font-semibold mb-1">Final Year Project: Intelligent Proctoring Detection Framework</p>
              <p className="text-[var(--text-soft)] text-[11px] leading-relaxed">
                Browser-based exam monitoring system using OpenCV, MediaPipe, and face-api.js to detect gaze deviation, head pose, multiple faces, and unauthorised objects in real time. Achieved 95%+ detection accuracy. Auto-generates a timestamped violation report with annotated frames after each session. Built with Flask as the backend and runs entirely in the browser   no native app install needed.
              </p>
            </div>
          </div>

          <div className="soft-card p-6 flex flex-col">
            <h3 className="font-semibold text-[var(--text)] text-base mb-4 flex items-center gap-2">
              <Award size={16} className="text-[var(--accent)]" />
              Certifications
            </h3>
            <div className="space-y-3 flex-grow">
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--line)]">
                <p className="text-[var(--text)] text-[12px] font-semibold leading-tight">Data Analytics with Python</p>
                <p className="text-[var(--text-muted)] text-[11px] mt-0.5">NPTEL · 2025</p>
                <p className="text-[var(--text-soft)] text-[11px] mt-1.5 leading-relaxed">Pandas, NumPy, Matplotlib, Seaborn, and statistical analysis using real-world datasets. Issued by IIT faculty through SWAYAM.</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] border border-[var(--line)]">
                <p className="text-[var(--text)] text-[12px] font-semibold leading-tight">Introduction to Database Systems</p>
                <p className="text-[var(--text-muted)] text-[11px] mt-0.5">NPTEL · 2025</p>
                <p className="text-[var(--text-soft)] text-[11px] mt-1.5 leading-relaxed">Relational models, ER diagrams, normalisation, SQL, transactions, indexing, and query optimisation. Issued by IIT faculty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[var(--text-muted)] pt-6 mt-4 fade-section" style={{ animationDelay: "480ms" }}>
        <div className="flex items-center justify-center gap-5 mb-4">
          <a href="mailto:prince28.01.2022@gmail.com" className="hover:text-[#EA4335] transition-colors" title="Email"><Mail size={18} /></a>
          <a href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="hover:text-[#24292f] transition-colors" title="GitHub"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] transition-colors" title="LinkedIn"><FaLinkedin size={18} /></a>
          <a href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="hover:text-[#000000] transition-colors" title="X"><FaXTwitter size={18} /></a>
        </div>
        © {new Date().getFullYear()} Master Prince · Delhi, India
      </footer>

    </div>
  );
}
