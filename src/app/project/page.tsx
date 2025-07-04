"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    title: "Intelligent Proctoring Detection Framework",
    description: "A real-time AI powered invigilation system built with Flask, OpenCV, and multiple detection modules. This tool monitors students during online exams and detects suspicious behavior such as looking away, unauthorized objects, multiple faces, and speaking.",
    tech: ["Javascript", "Flask", "SQL", "OPenCV", "MediaPipe", "Dlib", "Numpy", "PyMongo"],
    link: "https://github.com/Mprince29/Intelligent-Proctoring-Detection-Framework",
    image: "/2project.png"
  },
  {
    title: "Senior Dev AI",
    description: "Senior Dev AI is a full-stack AI assistant designed to help new developers and interns quickly get productive with unfamiliar codebases. It combines smart language models, real-time screen awareness, and Git integration to reduce onboarding friction and boost confidence from day one.",
    tech: ["Next.js", "Typescript","FastAPI", "MongoDB", "LLaMA 3","EasyeOCR","Uvicorn"],
    link: "https://github.com/Mprince29/SeniorDevAI",
    image: "/3project.png"
  },
  {
    title: "Diagnostics Management System",
    description: "A full-stack diagnostics and patient management platform for clinical labs or hospitals. Built with Node.js, Express.js, MySQL, and integrated into a desktop interface via Electron.js, this system provides real-time test management, OTP-based login, JWT authentication, and billing/reporting functionality.",
    tech: ["Javascript", "Node.js", "SQL", "HTML", "CSS"],
    link: "https://github.com/Mprince29/Medical_Report_generator",
    image: "/1project.png"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "This project is a complete Credit Card Fraud Detection System that uses machine learning to identify fraudulent transactions. It provides both: A Command-Line Interface (CLI) for exploring data and training models, Flask Web App where users can interactively select models and view performance metrics.",
    tech: ["Javascript", "FLask", "Scikit-learn","seaborn","matplotlib","Pandas", "MongoDB"],
    link: "https://github.com/Mprince29/Credit_Card_fraud_detection",
    image: "/4project.png"
  },
  {
    title: "Destination Recommendation System",
    description: "A hybrid hotel recommendation engine using text analysis, machine learning, and deep learning models to suggest the most suitable hotels based on user preferences, hotel reviews, room attributes, and pricing.",
    tech: ["Python", "xgboost", "tensorflow", "seaborn"],
    link: "https://github.com/Mprince29/Destination_Recommendation",
    image: "/5project.png"
  }
];

// Animation variants for project cards (same as 'Tools I Use')
const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 1.2 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function ProjectPage() {
  const pathname = usePathname();

  return (
    <main className="relative z-10 min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-black/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Left: Logo and Nav */}
          <div className="flex items-center gap-2 sm:gap-8">
            <Link href="/" className="text-lg font-bold text-blue-400 tracking-tight flex-shrink-0">
              Master.dev
            </Link>
            <nav className="flex flex-wrap items-center gap-2 sm:gap-8 text-xs uppercase font-medium">
              <Link
                href="/project"
                className={`transition-colors px-1 py-1 rounded-md ${
                  pathname.startsWith('/project') ? 'text-white bg-blue-900/40 shadow' : 'text-gray-300'
                } hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow`}
              >
                Projects
              </Link>
              <Link
                href="/journey"
                className="transition-colors px-1 py-1 rounded-md text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow"
              >
                Journey
              </Link>
            </nav>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-6">
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-32 px-4 sm:px-6 mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-12 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
          Projects 
        </h1>
        <div className="flex flex-col gap-6 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.18 }}
              className="w-full flex flex-col md:flex-row items-stretch bg-black rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 p-0 overflow-hidden min-h-[220px] min-w-0"
            >
              {/* Project Image Placeholder (replace with project.image if available) */}
              <div className="flex-shrink-0 w-full md:w-2/5 h-48 sm:h-56 md:h-auto bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.image || '/project-placeholder.png'}
                  alt={project.title}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-2 sm:mb-3 text-base sm:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm sm:text-base font-medium text-blue-500 hover:underline bg-gray-900/60 rounded px-3 sm:px-5 py-2 mt-2 md:self-start whitespace-nowrap"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
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
      </footer>
    </main>
  );
}