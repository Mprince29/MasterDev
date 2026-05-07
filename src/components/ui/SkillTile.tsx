"use client";

import { useState } from "react";
import {
  BrainCircuit, Database, Users, Cpu, Zap, Network, Globe,
} from "lucide-react";
import {
  SiPython, SiJavascript, SiTypescript, SiNextdotjs, SiReact,
  SiFastapi, SiNodedotjs, SiStreamlit, SiOpencv,
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
  { name: "Streamlit",  Icon: SiStreamlit,  color: "#FF4B4B" },
];

const DATA_CLOUD = [
  { name: "MongoDB",    Icon: SiMongodb,    color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "ChromaDB",   Icon: Database,     color: "#E44332" },
  { name: "Qdrant",     Icon: Database,     color: "#24386C" },
  { name: "Prisma",     Icon: SiPrisma,     color: "#2D3748" },
  { name: "Docker",     Icon: SiDocker,     color: "#2496ED" },
  { name: "AWS",        Icon: SiAmazonaws,  color: "#FF9900" },
  { name: "Vercel",     Icon: SiVercel,     color: "#000000" },
];

const AI_ML = [
  { name: "LangChain",   Icon: Network,      color: "#1C3C3C" },
  { name: "LiteLLM",     Icon: Cpu,          color: "#6366F1" },
  { name: "OpenAI",      Icon: BrainCircuit, color: "#412991" },
  { name: "RAG",         Icon: Database,     color: "#0EA5E9" },
  { name: "Multi-Agent", Icon: Users,        color: "#8B5CF6" },
  { name: "MCP",         Icon: Cpu,          color: "#F59E0B" },
  { name: "OpenCV",      Icon: SiOpencv,     color: "#5C3EE8" },
  { name: "LoRA / MLX",  Icon: Zap,          color: "#10B981" },
  { name: "Selenium",    Icon: Globe,        color: "#43B02A" },
];

function Tile({ name, Icon, color }: { name: string; Icon: React.ElementType; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center p-2 h-full border rounded-xl cursor-default transition-all duration-200"
      style={{
        borderColor: hovered ? `${color}70` : "var(--line)",
        boxShadow: hovered ? `0 4px 16px ${color}25` : undefined,
        background: hovered ? "var(--surface)" : "var(--surface-muted)",
      }}
    >
      <span className="mb-2 shrink-0 transition-colors duration-200" style={{ color: hovered ? color : "var(--text-muted)" }}>
        <Icon size={22} />
      </span>
      <span className="text-[10px] font-semibold text-[var(--text-soft)] text-center leading-tight">{name}</span>
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
