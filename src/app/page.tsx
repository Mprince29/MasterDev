"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GridAndDotBackground } from "@/components/ui/grid-and-dot-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingSidebars } from "@/components/ui/floating-sidebars";

import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import SocialCard from "@/components/ui/social-card";
import { FaReact, FaGitAlt, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import { FaHtml5 as FaHtml5Icon, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiFlask, SiFastapi, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiVercel, SiNetlify } from "react-icons/si";
import { FeatureBlockCard } from "@/components/ui/feature-block-card";
import { TracingBeam } from "@/components/ui/tracing-beam";


// Utility hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function Home() {
  const isMobile = useIsMobile();


  // Animated line-by-line about section
  const aboutLines = [
    "2025 CSE (AI) graduate and a Full Stack Developer.",
    "I craft seamless applications from elegant frontends to robust backends.",
    "Passionate about building full-stack solutions with clean code and exceptional user experiences.",
    "I love creating impactful applications, bridging responsive frontends with scalable backends.",
    "Exploring Generative AI and machine learning to push the boundaries of innovative AI applications.",
  
  ];
  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    setVisibleLines(0);
    if (aboutLines.length === 0) return;
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < aboutLines.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 800); // 800ms per line
    return () => clearInterval(interval);
  }, [aboutLines.length]);

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

  // Add project card animation variants
  const projectCardVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.6 : 1.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };



  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.14/build/spline-viewer.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Hero video IntersectionObserver logic
  useEffect(() => {
    const video = document.getElementById('waveVideo') as HTMLVideoElement | null;
    if (!video) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);


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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        id="home"
        className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-6rem)] text-left max-w-6xl mx-auto"
      >
        {/* Left: Avatar and Intro */}
        <div className="flex-1 flex flex-col items-start justify-center w-full min-w-0">
          {/* Video placed above headline, cropped from right */}
          <div style={{ width: 580, overflow: 'hidden', borderRadius: 16, marginBottom: 12 }}>
            <video
              id="waveVideo"
              src="/Video.mp4"
              muted
              preload="auto"
              playsInline
              style={{ width: 520, height: 'auto', display: 'block', borderRadius: 16, marginLeft: 0 }}
            />
          </div>
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
            Hey, I&apos;m <span className="text-blue-300">Prince </span>
          </h1>
          <div className="flex flex-col space-y-6 sm:space-y-8 w-full max-w-6xl">
            {/* Animated About Intro, line by line with slide-in animation */}
            <div className="text-base sm:text-lg text-gray-400 w-full max-w-6xl min-h-[3.5rem] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 text-left">
              {aboutLines.slice(0, visibleLines).map((line: string | { text: string; bold: boolean }, idx: number) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`mb-1 ${typeof line === 'object' && line.bold ? 'font-bold text-white' : ''}`}
                >
                  {typeof line === 'string' ? line : line.text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gray-600/80"></div>
        </div>
      </div>

      {/* Tools I Use Section (Aceternity UI animated style) */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, rotateX: -15, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ perspective: 1000 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text text-left">
            Tools I Use
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-12 max-w-2xl text-left">
            Here&apos;s a list of technologies, tools, and frameworks I&apos;ve worked with across different domains.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch max-w-6xl mx-auto">
          {[
            {
              title: "Frontend",
              tools: [
                { name: "React", icon: <FaReact />, color: "#61DAFB" },
                { name: "Next.js", icon: <SiNextdotjs />, color: "#000" },
                { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
                { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
                { name: "Vue.js", icon: <SiVisualstudiocode />, color: "#4FC08D" },
              ],
            },
            {
              title: "Backend",
              tools: [
                { name: "Python", icon: <FaPython />, color: "#3776AB" },
                { name: "Flask", icon: <SiFlask />, color: "#000" },
                { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
                { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
                { name: "Express", icon: <SiExpress />, color: "#000" },
              ],
            },
            {
              title: "Machine Learning",
              tools: [
                { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
                { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
                { name: "Pandas", icon: <SiPandas />, color: "#150458" },
                { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
                { name: "Scikit", icon: <FaPython />, color: "#F7931E" },
              ],
            },
            {
              title: "Databases",
              tools: [
                { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
                { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
                { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
              ],
            },
            {
              title: "Deployment",
              tools: [
                { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
                { name: "GitHub", icon: <FaGithub />, color: "#181717" },
                { name: "Vercel", icon: <SiVercel />, color: "#000" },
                { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
              ],
            },
            {
              title: "Designing",
              tools: [
                { name: "HTML5", icon: <FaHtml5Icon />, color: "#E34F26" },
                { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
              ],
            },
          ].map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={projectCardVariants}
              initial={idx % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FeatureBlockCard
                title={cat.title}
                tools={cat.tools}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gray-800/80"></div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <motion.section
        initial={{ opacity: 0, rotateX: -15, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', ...(isMobile ? {} : { delay: 0.2 }) }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
        style={{ perspective: 1000 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text text-left">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mb-8 sm:mb-12 max-w-2xl text-left">
            Here are some of my recent works that showcase my skills and expertise.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Intelligent Proctoring Detection Framework",
                description: "A real-time AI powered invigilation system",
                tags: ["Javascript", "Flask", "Sql"],
                image: "/2project.png",
                link: "https://github.com/Mprince29/Intelligent-Proctoring-Detection-Framework.git",
              },
              {
                title: "Senior Dev AI",
                description: "AI assistant designed to help new developers and interns",
                tags: ["Next.js", "FastAPI", "MongoDB"],
                image: "/3project.png",
                link: "https://github.com/Mprince29/SeniorDevAI.git",
              },
              {
                title: "Diagnostics Management System",
                description: "Diagnostics and patient management platform for clinical labs or hospitals.",
                tags: ["Javascript", "Node.js", "Sql"],
                image: "/1project.png",
                link: "https://github.com/Mprince29/Medical_Report_generator.git",
              },
            ].map((project, index) => {
              // Use a simple approach without refs for now
              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.currentTarget;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
              };

              const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              };
              
              return (
                <motion.div
                  key={index}
                  variants={projectCardVariants}
                  initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="cursor-pointer"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                <BackgroundGradient className="h-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full w-full items-center justify-between"
                  >
                    <div className="w-full flex items-center justify-center pt-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={220}
                        height={120}
                        className="object-contain max-h-40 drop-shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col w-full items-center text-center flex-1 mt-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#dbeafe] transition-colors duration-300 ease-in-out">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed max-w-xs">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-[#dbeafe1a] text-[#dbeafe] text-xs font-medium border border-[#a5b4fc] transition-all duration-300 ease-in-out"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center w-full">
                        <button
                          className="flex items-center gap-2 bg-[#232328] text-white font-semibold rounded-full px-6 py-2 shadow-inner border border-[#a5b4fc] hover:bg-[#dbeafe1a] hover:border-[#dbeafe] transition-all duration-300 ease-in-out text-base"
                          type="button"
                        >
                          View Project
                          <span className="ml-2 bg-[#232328] text-xs font-bold rounded-full px-2 py-1 border border-[#a5b4fc] text-[#dbeafe] transition-all duration-300 ease-in-out">
                            GitHub
                          </span>
                        </button>
                      </div>
                    </div>
                  </a>
                </BackgroundGradient>
              </motion.div>
                );
              })}
          </div>
          <div className="flex justify-end items-center pt-6 sm:pt-9">
            <Link
              href="/project"
              className="bg-gradient-to-r from-blue-500 to-white hover:from-blue-600 hover:to-white text-blue-900 font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gray-800/80"></div>
        </div>
      </div>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, rotateX: -15, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        id="contact"
        className="relative overflow-hidden py-20"
        style={{ perspective: 1000 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-32">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text text-left">
            Connect With Me
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl text-left">
            Have a project in mind or just want to chat? Let&apos;s connect!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-5xl">
            {[
              {
                platform: "GitHub",
                profileUrl: "https://github.com/Mprince29",
                imageUrl: "https://github.com/Mprince29.png",
                name: "Prince",
                handle: "@Mprince29",
                icon: <FaGithub className="w-8 h-8" />,
              },
              {
                platform: "LinkedIn",
                profileUrl: "https://www.linkedin.com/in/master-prince-83609b257/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGwP94ZQczOvw/profile-displayphoto-shrink_400_400/B56Zcq4P_2HUAg-/0/1748771079497?e=1758153600&v=beta&t=FMZtbsQjyMM6YIsAczTzhybdViMP_swWFOFl2PMAUzk",
                name: "Prince",
                handle: "@master-prince-83609b257",
                icon: <FaLinkedin className="w-8 h-8" />, 
              },
              {
                platform: "X (Twitter)",
                profileUrl: "https://x.com/Mprince_28",
                imageUrl: "https://x.com/Mprince_28/photo",
                name: "Prince",
                handle: "@Mprince_28",
                icon: <FaTwitter className="w-8 h-8" />,
              },
              {
                platform: "Instagram",
                profileUrl: "https://instagram.com/m_princeee29",
                imageUrl: "https://ui-avatars.com/api/?name=Prince+Instagram&background=E1306C&color=fff",
                name: "Prince",
                handle: "@m_princeee29",
                icon: <FaInstagram className="w-8 h-8" />,
              },
              {
                platform: "Email",
                profileUrl: "mailto:prince28.01.2022@email.com",
                imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocJTSK9NS6pxzYtmRZyC4qolaa9z5FvsFzqjJxe3hHm2-aU-efJq=s576-c-no",
                name: "Prince",
                handle: "prince28.01.2022@email.com",
                icon: <FaEnvelope className="w-8 h-8" />,
              },
            ].map((card, idx) => (
              isMobile ? (
                <motion.div
                  key={card.platform}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <SocialCard {...card} index={idx} isMobile={isMobile} />
                </motion.div>
              ) : (
                <SocialCard key={card.platform} {...card} index={idx} isMobile={isMobile} />
              )
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">© {year ?? ''} Prince. All rights reserved.</span>
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
