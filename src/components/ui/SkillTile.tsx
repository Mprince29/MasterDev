"use client";

import { useState } from "react";
import {
  BrainCircuit, Database, Users, Cpu, Zap, Network, FileText, Cloud, GitBranch,
} from "lucide-react";
import {
  SiPython, SiJavascript, SiTypescript, SiNextdotjs, SiReact,
  SiFastapi, SiNodedotjs,
  SiMongodb, SiPostgresql, SiPrisma, SiDocker, SiAmazonaws, SiVercel,
} from "react-icons/si";
import { Code } from "lucide-react";

const LANGUAGES = [
  { name: "Python",     Icon: SiPython,     color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js",    Icon: SiNextdotjs,  color: "#000000" },
  { name: "React",      Icon: SiReact,      color: "#61DAFB" },
  { name: "FastAPI",    Icon: SiFastapi,    color: "#009688" },
  { name: "Node.js",    Icon: SiNodedotjs,  color: "#339933" },
];

const DATA_CLOUD = [
  { name: "MongoDB",    Icon: SiMongodb,    color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "ChromaDB",   Icon: Database,     color: "#E44332" },
  { name: "Qdrant",     Icon: Database,     color: "#24386C" },
  { name: "Prisma",     Icon: SiPrisma,     color: "#2D3748" },
  { name: "Redis",      Icon: Database,     color: "#DC2626" },
  { name: "GCP",        Icon: Cloud,        color: "#4285F4" },
  { name: "GCS",        Icon: Cloud,        color: "#34A853" },
  { name: "Firestore",  Icon: Database,     color: "#FFCA28" },
  { name: "Neo4j",      Icon: Network,      color: "#008CC1" },
  { name: "Docker",     Icon: SiDocker,     color: "#2496ED" },
  { name: "AWS",        Icon: SiAmazonaws,  color: "#FF9900" },
  { name: "Vercel",     Icon: SiVercel,     color: "#000000" },
];

const AI_ML = [
  { name: "LLM APIs",    Icon: BrainCircuit, color: "#412991" },
  { name: "RAG",         Icon: Database,     color: "#0EA5E9" },
  { name: "LangChain",   Icon: Network,      color: "#1C3C3C" },
  { name: "LiteLLM",     Icon: Cpu,          color: "#6366F1" },
  { name: "MCP",         Icon: Cpu,          color: "#F59E0B" },
  { name: "OCR",         Icon: FileText,     color: "#2563EB" },
  { name: "LoRA / QLoRA", Icon: Zap,         color: "#10B981" },
  { name: "Local Inference", Icon: Users,   color: "#8B5CF6" },
  { name: "CI/CD",        Icon: GitBranch, color: "#D65D46" },
  { name: "AI Code Review", Icon: Cpu,     color: "#A84234" },
];

function Tile({ name, Icon }: { name: string; Icon: React.ElementType; color?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center p-2 h-full border rounded-xl cursor-default transition-all duration-400 ease-out"
      style={{
        borderColor: hovered ? "var(--line)" : "transparent",
        boxShadow: hovered ? "0 10px 30px -10px rgba(0,0,0,0.08)" : "none",
        background: hovered ? "var(--surface)" : "var(--surface-muted)",
        transform: hovered ? "scale(1.05)" : "scale(1)"
      }}
    >
      <span className="mb-2 shrink-0 transition-colors duration-300" style={{ color: hovered ? "var(--text)" : "var(--text-muted)" }}>
        <Icon size={22} />
      </span>
      <span className="text-[10px] font-semibold transition-colors duration-300 text-center leading-tight" style={{ color: hovered ? "var(--text)" : "var(--text-soft)" }}>{name}</span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="soft-card p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <Code size={16} className="text-[var(--text-muted)]" />
          <h3 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">Languages &amp; Frameworks</h3>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(68px,1fr))] gap-2 auto-rows-[72px]">
          {LANGUAGES.map((s) => <Tile key={s.name} {...s} />)}
        </div>
      </div>

      <div className="soft-card p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <Database size={16} className="text-[var(--text-muted)]" />
          <h3 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">Data &amp; Cloud</h3>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(68px,1fr))] gap-2 auto-rows-[72px]">
          {DATA_CLOUD.map((s) => <Tile key={s.name} {...s} />)}
        </div>
      </div>

      <div className="soft-card p-6 md:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <BrainCircuit size={16} className="text-[var(--text-muted)]" />
          <h3 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">AI &amp; Machine Learning</h3>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2 auto-rows-[72px]">
          {AI_ML.map((s) => <Tile key={s.name} {...s} />)}
        </div>
      </div>
    </div>
  );
}
