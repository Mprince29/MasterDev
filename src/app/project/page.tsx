"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects as staticProjects } from "@/data/portfolio";
import { fetchProjects, isApiConfigured } from "@/lib/api";

interface DisplayProject {
  id: string | number;
  title: string;
  description: string;
  details: string[];
  image: string | null;
  github: string | null;
  tags: string[];
  highlight: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 1.2 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const FALLBACK_PROJECTS: DisplayProject[] = staticProjects.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  details: p.details ?? [],
  image: p.image,
  github: p.github,
  tags: p.tags,
  highlight: p.highlight,
}));

export default function ProjectPage() {
  const [projects, setProjects] = useState<DisplayProject[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    if (!isApiConfigured()) return;
    fetchProjects()
      .then((apiProjects) => {
        if (apiProjects.length === 0) return;
        setProjects(
          apiProjects.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            details: staticProjects.find((sp) => sp.title === p.title)?.details ?? [],
            image: p.image,
            github: p.github,
            tags: p.tags,
            highlight: p.highlight,
          }))
        );
      })
      .catch(() => {
        // keep static fallback on error
      });
  }, []);

  return (
    <main className="relative min-h-screen text-[var(--text)] fade-in-page">
      <div className="max-w-5xl mx-auto pt-12 px-4 sm:px-6 mb-8 sm:mb-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-[var(--text)] tracking-tight text-center"
          >
            Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.filter((project) => project.image).map((project, index) => {
              const gradients = [
                "from-blue-500/10 to-purple-500/10",
                "from-emerald-500/10 to-teal-500/10",
                "from-orange-500/10 to-red-500/10",
                "from-indigo-500/10 to-blue-500/10",
                "from-pink-500/10 to-rose-500/10",
                "from-gray-500/10 to-slate-500/10",
              ];
              const bgGradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full flex flex-col rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--line)] shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Banner Image */}
                  {project.image && (
                    <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-[var(--surface-muted)]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} z-0`} />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="relative z-10 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute z-20 top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-[var(--text)] text-[var(--surface)] hover:scale-110 transition-transform duration-300 shadow-xl"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-5 flex flex-col flex-grow">
                    {project.highlight && (
                      <span className="inline-block text-[10px] font-semibold text-[var(--accent)] uppercase tracking-[0.15em] mb-1.5">
                        {project.highlight}
                      </span>
                    )}
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-[var(--text)] leading-tight tracking-tight mb-2">
                      {project.title}
                    </h2>

                    <p className="text-sm text-[var(--text-soft)] leading-relaxed">
                      {project.description}
                    </p>

                    {project.details.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {project.details.map((line) => (
                          <li key={line} className="flex items-start gap-2 text-xs sm:text-[13px] text-[var(--text-soft)] leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--line)]">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-[var(--bg-soft)] text-[var(--text-muted)] text-[10px] font-medium rounded-full border border-[var(--line)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
