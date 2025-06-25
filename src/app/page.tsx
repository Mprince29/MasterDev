"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaXRay } from "react-icons/fa";

// Helper to get current anchor link for active state styling
function useActiveSection() {
  const [active, setActive] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 50);

      const home = document.getElementById("home");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      if (contact && scrollY >= contact.offsetTop - 100) {
        setActive("contact");
      } else if (projects && scrollY >= projects.offsetTop - 100) {
        setActive("projects");
      } else {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { active, hasScrolled };
}

export default function Home() {
  const pathname = usePathname();
  const { active, hasScrolled } = useActiveSection();
  const [showJourney, setShowJourney] = useState(false);

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
    visible: { opacity: 1, x: 0 }
  };

  // Contact icon drop animation
  const contactIconVariants = {
    hidden: { opacity: 0, y: -60, scale: 1.2 },
    visible: { opacity: 1, y: 0, scale: 1 }
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

  // Typewriter effect for about/intro text
  const aboutText = "Graduated with a B.Tech in CSE (AI) in 2025, I'm currently working as a Full Stack Developer Intern, bridging the gap between elegant frontend designs and robust backend systems. Passionate about crafting full-stack applications with clean code and exceptional user experiences. From responsive frontends to scalable backends, I love building solutions that make a difference. Exploring the fascinating world of Generative AI and machine learning. Building innovative applications that push the boundaries of what's possible with AI technology.";
  const [typedAbout, setTypedAbout] = useState("");
  useEffect(() => {
    let i = 0;
    setTypedAbout("");
    const interval = setInterval(() => {
      setTypedAbout((prev) => prev + aboutText[i]);
      i++;
      if (i >= aboutText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative z-10 min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? 'backdrop-blur-md bg-black/80' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Left: Logo and Nav */}
          <div className="flex items-center gap-2 sm:gap-8">
            <a href="/" className="text-lg font-bold text-blue-400 tracking-tight flex-shrink-0">
              Master.dev
            </a>
            <nav className="flex flex-wrap items-center gap-2 sm:gap-8 text-xs uppercase font-medium">
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
                href="#contact"
                className="transition-colors px-1 py-1 rounded-md text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow"
              >
                Contact
              </a>
              <a
                href="/journey"
                className="transition-colors px-1 py-1 rounded-md text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-white hover:text-white hover:shadow"
              >
                Journey
              </a>
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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        id="home"
        className="pt-32 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-6rem)] text-left max-w-6xl mx-auto"
      >
        {/* Left: Avatar and Intro */}
        <div className="flex-1 flex flex-col items-start justify-center w-full min-w-0">
          {/* Avatar */}
          <div className="mb-6 sm:mb-8 w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_40px_#3b82f6] mx-auto md:mx-0">
            <img
              src="/Mr3W.gif"
              alt="Animated Globe GIF"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
            Hey, I'm <span className="text-blue-300">Prince </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-9 text-white-200">
             Developer 
          </h2>
          <div className="flex flex-col space-y-6 sm:space-y-8 w-full max-w-6xl">
            {/* Typewriter About Intro */}
            <p className="text-base sm:text-lg text-gray-400 w-full max-w-6xl min-h-[3.5rem] px-2 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-left">
              {typedAbout}
              <span className="inline-block w-2 h-6 align-middle bg-blue-400 animate-pulse ml-1" />
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tools I Use Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        id="tools"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl inline-block w-full font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text"
          >
            Tools I Use
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-8 sm:mb-12 max-w-2xl"
          >
            Here's a list of technologies, tools, and frameworks I've worked with across different domains.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Frontend */}
            <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: 'easeOut' }} className="rounded-2xl p-8 shadow-lg bg-black">
              <h3 className="text-xl font-bold text-white mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Next.js", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                  
                  
                  
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                    <span className="mt-2 text-sm text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: 'easeOut' }} className="rounded-2xl p-8 shadow-lg bg-black">
              <h3 className="text-xl font-bold text-white mb-6">Backend</h3>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                  { name: "Flask", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
                  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                  
                  
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                    <span className="mt-2 text-sm text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: 'easeOut' }} className="rounded-2xl p-8 shadow-lg bg-black">
              <h3 className="text-xl font-bold text-white mb-6">Databases</h3>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                    <span className="mt-2 text-sm text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Machine Learning */}
            <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: 'easeOut' }} className="rounded-2xl p-8 shadow-lg bg-black">
              <h3 className="text-xl font-bold text-white mb-6">Machine Learning</h3>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                  { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                  { name: "Pandas", src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
                  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
                  
                  
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                    <span className="mt-2 text-sm text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Design */}
            <motion.div variants={itemVariants} transition={{ duration: 0.7, ease: 'easeOut' }} className="rounded-2xl p-8 shadow-lg bg-black">
              <h3 className="text-xl font-bold text-white mb-6">Deployment Tools</h3>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
                  { name: "Netlify", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={tool.src} alt={tool.name} className="w-12 h-12" />
                    <span className="mt-2 text-sm text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* Projects Showcase Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-5xl inline-block w-full font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mb-8 sm:mb-12 max-w-2xl">
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
            ].map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={projectCardVariants}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.18 }}
                className="group flex flex-col rounded-2xl bg-black shadow-lg hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden h-full"
                whileHover={{ y: -5 }}
              >
                <div className="w-full h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1" />
                  <span className="inline-block text-sm font-medium text-blue-500 hover:underline bg-gray-900/60 rounded px-3 py-1 self-end mt-auto">
                    View Project →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="flex justify-end items-center pt-6 sm:pt-9">
            <a
              href="/project"
              className="bg-gradient-to-r from-blue-500 to-white hover:from-blue-600 hover:to-white text-blue-900 font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        id="contact"
        className="relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left side - Text */}
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
              Bringing your ideas to life.
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
              Let's turn your vision into reality
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Have a project in mind or just want to chat? Let's connect!
            </p>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex-1 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  href: "https://www.linkedin.com/in/master-prince-83609b257/",
                  icon: <FaLinkedin className="w-12 h-12 group-hover:scale-110 transition-transform duration-200" />, label: "LinkedIn"
                },
                {
                  href: "https://x.com/Mprince_28",
                  icon: <FaTwitter className="w-12 h-12 group-hover:scale-110 transition-transform duration-200" />, label: "X"
                },
                {
                  href: "https://instagram.com/m_princeee29",
                  icon: <FaInstagram className="w-12 h-12 group-hover:scale-110 transition-transform duration-200" />, label: "Instagram"
                },
                {
                  href: "https://github.com/Mprince29",
                  icon: <FaGithub className="w-12 h-12 group-hover:scale-110 transition-transform duration-200" />, label: "GitHub"
                },
                {
                  href: "mailto:prince28.01.2022@email.com",
                  icon: <FaEnvelope className="w-12 h-12 group-hover:scale-110 transition-transform duration-200" />, label: "Email"
                }
              ].map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center hover:text-blue-400 transition-colors group"
                  variants={contactIconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.13 }}
                >
                  <span className="w-16 h-16 mb-1 flex items-center justify-center rounded-xl backdrop-blur-sm bg-black/20">
                    {item.icon}
                  </span>
                  <span className="text-sm mt-2 text-gray-300 group-hover:text-blue-400 transition-colors">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '24px 24px',
              opacity: 0.5
            }} />
          </div>
        </div>
      </motion.section>

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