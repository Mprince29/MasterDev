"use client";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaBriefcase, FaCrown } from "react-icons/fa";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function JourneyPageClient() {
  
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
      title: "Full Stack Developer · Applied AI",
      subtitle: "M37 Labs",
      date: "May 2025 – June 2026",
      description: "Building production AI systems for enterprise clients across India and Malaysia   multi-agent automation, NL-to-SQL search, AI recruitment, and brand intelligence tools.",
      icon: <FaBriefcase className="text-white text-xl" />,
      badge: "Full-time"
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
    <main className="relative min-h-screen text-[var(--text)] fade-in-page">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto pt-16 px-4 sm:px-6 mb-8 sm:mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 text-[var(--text)] tracking-tight text-center">
            My Journey
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[var(--text-soft)] mb-8 sm:mb-16 max-w-2xl mx-auto text-center px-4 leading-relaxed">
            A timeline of my educational and professional journey, showcasing my growth.
          </motion.p>
          
          <Timeline items={timelineItems.map(item => ({
            ...item,
            icon: <div className="text-[var(--bg)]">{item.icon}</div>
          }))} className="mt-16" />
        </motion.div>
      </div>

    </main>
  );
}