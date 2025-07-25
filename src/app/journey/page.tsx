"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaBriefcase, FaCrown } from "react-icons/fa";
import Link from "next/link";
import { GridAndDotBackground } from "@/components/ui/grid-and-dot-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingSidebars } from "@/components/ui/floating-sidebars";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function JourneyPage() {
  
  const timelineItems: TimelineItem[] = [
    {
      title: "Class 1–10",
      subtitle: "Kendriya Vidyalaya",
      date: "2009 – 2019",
      description: "Completed foundational schooling with consistent academic performance and extracurricular participation.",
      icon: <FaSchool className="text-white text-xl" />,
      badge: "Schooling"
    },
    {
      title: "Class 11–12",
      subtitle: "Don Bosco Alaknanda",
      date: "2019 – 2021",
      description: "Specialized in Science[Physics , Chemistry , Mathematics] with Computer Science. Developed early interest in programming and technology.",
      icon: <FaSchool className="text-white text-xl" />,
      badge: "Schooling"
    },
    {
      title: "B.Tech CSE (AI)",
      subtitle: "Jamia Hamdard University",
      date: "2021 – 2025",
      description: "Graduated with a CGPA of 7.8. Focused on AI, full-stack development, and software engineering.",
      icon: <FaUniversity className="text-white text-xl" />,
      badge: "College"
    },
    {
      title: "Full Stack Web Developer Intern",
      subtitle: "Luchkee Health Pvt Ltd.",
      date: "Dec 2024 – Feb 2025",
      description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      icon: <FaBriefcase className="text-white text-xl" />,
      badge: "Internship"
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "M37 Labs",
      date: "May 2025 – Ongoing",
      description: "Working on cutting-edge projects involving AI and full-stack development. Contributing to innovative solutions and learning new technologies.",
      icon: <FaBriefcase className="text-white text-xl" />,
      badge: "Internship"
    },
    {
      title: "General Secretary – IEEE JHSB",
      subtitle: "Jamia Hamdard",
      date: "2023 – 2024",
      description: "Led technical initiatives and organized events. Managed team coordination and project execution.",
      icon: <FaCrown className="text-white text-xl" />,
      badge: "Leadership"
    },
    {
      title: "Chairperson – IEEE JHSB",
      subtitle: "Jamia Hamdard",
      date: "2024 – 2025",
      description: "Led the Women in Engineering society, organized tech events, and mentored juniors. Managed strategic planning and team leadership.",
      icon: <FaCrown className="text-white text-xl" />,
      badge: "Leadership"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 1.2 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <main className="relative min-h-screen text-white">
      <GridAndDotBackground className="fixed inset-0 -z-10" variant="grid" />
      
      {/* Floating Navbar */}
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Projects",
            link: "/project",
          },
          {
            name: "Blog",
            link: "/blog",
          },
          {
            name: "Journey",
            link: "/journey",
          },
        ]}
      />

      {/* Floating Sidebars */}
      <FloatingSidebars />

      {/* Tracing Beam Effect */}
      <TracingBeam className="fixed left-4 top-0 h-full w-20 z-50 pointer-events-none hidden sm:block" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-32 px-4 sm:px-6 mb-8 sm:mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-12 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text text-center">
            My Journey
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-center px-4">
            A timeline of my educational and professional journey, showcasing my growth.
          </motion.p>
          
          <Timeline items={timelineItems} className="mt-16" />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">© {new Date().getFullYear()} Prince. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/Mprince29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/master-prince-83609b257/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            <Link href="https://x.com/Mprince_28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}