"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 1.2 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function ProjectPageClient() {
  return (
    <main className="relative min-h-screen text-[var(--text)] fade-in-page">
      <div className="max-w-6xl mx-auto pt-12 px-4 sm:px-6 mb-8 sm:mb-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p
            variants={itemVariants}
            className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)] mb-3"
          >
            Selected work · built end to end
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-[var(--text)] tracking-[-0.04em] text-center"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center text-sm sm:text-base leading-relaxed text-[var(--text-soft)] mb-10 sm:mb-14"
          >
            A working archive of AI products, developer tools, and research experiments—from local inference to production-grade backend systems.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative w-full flex flex-col rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--line)] shadow-[0_18px_60px_rgba(0,0,0,0.14)] hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition-all duration-300"
                >
                  {/* Project media */}
                  {project.video ? (
                    <div className="relative w-full aspect-video overflow-hidden bg-black">
                      <iframe
                        src={`https://drive.google.com/file/d/${project.video}/preview`}
                        title={`${project.title} demo video`}
                        allow="autoplay"
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[1.9] overflow-hidden bg-[var(--surface-muted)]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="relative z-10 object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
                          <span className="font-serif text-2xl font-bold text-[var(--text)]/20 tracking-tight">
                            {project.title}
                          </span>
                        </div>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute z-20 top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-[var(--accent)] text-white hover:scale-110 transition-transform duration-300 shadow-xl"
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
