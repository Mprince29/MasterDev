"use client";

import { motion } from "framer-motion";
import { PenTool, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FadeInScroll } from "@/components/FadeInScroll";

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center fade-in-page relative overflow-hidden">
      
      {/* Decorative background vectors */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 flex items-center justify-center">
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--accent)]"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 12" />
          <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" />
          <path d="M 300 0 L 300 600 M 0 300 L 600 300" stroke="currentColor" strokeWidth="0.2" />
        </motion.svg>
      </div>

      <FadeInScroll delay={0.2} className="relative z-10 w-full max-w-lg mx-auto text-center px-6">
        <div className="w-20 h-20 mx-auto mb-8 bg-[var(--surface)] rounded-3xl shadow-sm border border-[var(--line)] flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
          <PenTool size={32} className="text-[var(--text)]" />
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
          Writing in Progress
        </h1>
        
        <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-10 font-light">
          I'm currently setting up this space to share thoughts on AI engineering, full-stack development, and the systems I'm building. Check back soon.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text)] text-[var(--surface)] font-medium rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </FadeInScroll>
    </div>
  );
}
