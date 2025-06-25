// Journey Timeline Page – visually styled vertical roadmap (dark theme, blue highlights)
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaBriefcase, FaCrown, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function JourneyPage() {
  const pathname = usePathname();
  const milestones = [
    {
      title: "Class 1–10",
      subtitle: "Kendriya Vidyalaya",
      date: "2009 – 2019",
      description: "Completed foundational schooling with consistent academic performance and extracurricular participation.",
      icon: <FaSchool className="text-blue-400 text-2xl" />
    },
    {
      title: "Class 11–12",
      subtitle: "Don Bosco Alaknanda",
      date: "2019 – 2021",
      description: "Specialized in Science[Physics , Chemistry , Mathematics] with Computer Science. Developed early interest in programming and technology.",
      icon: <FaSchool className="text-blue-400 text-2xl" />
    },
    {
      title: "B.Tech CSE (AI)",
      subtitle: "Jamia Hamdard University",
      date: "2021 – 2025",
      description: "Graduated with a CGPA of 7.8. Focused on AI, full-stack development, and software engineering.",
      icon: <FaUniversity className="text-blue-400 text-2xl" />
    },
    {
      title: "Full Stack Web Developer Intern",
      subtitle: "Luchkee Health Pvt Ltd.",
      date: "Dec 2024 – Feb 2025",
      icon: <FaBriefcase className="text-blue-400 text-2xl" />
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "M37 Labs",
      date: "May 2025 – Ongoing",
      icon: <FaBriefcase className="text-blue-400 text-2xl" />
    },
    {
      title: "General Secratory – IEEE JHSB",
      subtitle: "Jamia Hamdard",
      date: "2023 – 2024",
      icon: <FaCrown className="text-blue-400 text-2xl" />
    },
    {
      title: "Chairperson – IEEE JHSB",
      subtitle: "Jamia Hamdard",
      date: "2024 – 2025",
      description: "Led the Women in Engineering society, organized tech events, and mentored juniors.",
      icon: <FaCrown className="text-blue-400 text-2xl" />
    }
  ];

  // Section labels for roadmap
  const sections = [
    { label: "Schooling", index: 0 },
    { label: "College", index: 2 },
    { label: "Internships", index: 3 },
    { label: "Leadership Roles", index: 5 }
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/80">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Logo and Nav */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-lg font-bold text-blue-400 tracking-tight flex-shrink-0">
              Master.dev
            </a>
            <nav className="flex items-center gap-8 text-xs uppercase font-medium">
              <a
                href="/"
                className={`transition-colors px-1 py-1 rounded-md ${
                  pathname === '/' ? 'text-white bg-blue-900/40 shadow' : 'text-gray-300'
                } hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow`}
              >
                Home
              </a>
              <a
                href="/project"
                className={`transition-colors px-1 py-1 rounded-md ${
                  pathname.startsWith('/project') ? 'text-white bg-blue-900/40 shadow' : 'text-gray-300'
                } hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow`}
              >
                Projects
              </a>
              <a
                href="/journey"
                className={`transition-colors px-1 py-1 rounded-md ${
                  pathname.startsWith('/journey') ? 'text-white bg-blue-900/40 shadow' : 'text-gray-300'
                } hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow`}
              >
                Journey
              </a>
            </nav>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-6">
            <a href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:prince28.01.2022@email.com" aria-label="Email">
              <FaEnvelope className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto pt-32 px-2 pb-24">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text drop-shadow-lg tracking-tight font-[Poppins,Inter,sans-serif]">
          My Journey
        </h1>
        <div className="relative">
          {/* Zig-zag vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-500 via-blue-200 to-blue-500 rounded-full blur-[1px] z-0" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } }
            }}
            className="relative"
          >
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;
              const section = sections.find((s) => s.index === index);
              return (
                <React.Fragment key={index}>
                  {section && (
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`mb-8 flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
                    >
                      <span className="uppercase tracking-widest text-blue-400 font-bold text-lg drop-shadow flex items-center gap-2">
                        <span className="w-5 h-5 bg-gradient-to-br from-blue-500 to-white rounded-full shadow-lg animate-pulse" />
                        {section.label}
                      </span>
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className={`relative flex w-full mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Icon on the opposite side of the timeline */}
                    {isLeft ? (
                      <div className="hidden md:flex flex-col justify-center items-end w-1/2 pr-8">
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                    ) : null}
                    <div className={`relative w-full md:w-1/2 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`relative bg-black rounded-2xl p-10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 max-w-5xl w-full ${isLeft ? 'ml-2 md:ml-4' : 'mr-2 md:mr-4'} group`}
                        style={{
                          boxShadow: isLeft
                            ? '8px 8px 32px 0 rgba(59,130,246,0.10)'
                            : '-8px 8px 32px 0 rgba(59,130,246,0.10)'
                        }}
                      >
                        <h2 className="text-2xl font-extrabold mb-1 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text drop-shadow font-[Poppins,Inter,sans-serif] whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.title}
                        </h2>
                        <h3 className="text-lg text-gray-200 mb-1 flex items-center gap-2 font-semibold font-[Poppins,Inter,sans-serif]">
                          {item.subtitle}
                          <span className="text-xs text-gray-400 ml-2 font-normal">{item.date}</span>
                        </h3>
                        {item.description && <p className="text-gray-300 mt-2 text-base font-[Inter,sans-serif]">{item.description}</p>}
                      </div>
                    </div>
                    {/* Icon on the opposite side of the timeline */}
                    {!isLeft ? (
                      <div className="hidden md:flex flex-col justify-center items-start w-1/2 pl-8">
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                    ) : null}
                  </motion.div>
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">© {new Date().getFullYear()} Prince. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}