"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative flex flex-col gap-16 sm:gap-24", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 items-start"
        >
          {/* Left Column: Date & Badge */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 shrink-0 md:sticky md:top-24">
            {item.date && (
              <span className="text-xl sm:text-2xl font-serif font-bold text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors duration-500">
                {item.date}
              </span>
            )}
            {item.badge && (
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--accent)] bg-[var(--bg-soft)] px-3 py-1 rounded-full border border-[var(--line)]">
                {item.badge}
              </span>
            )}
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 flex flex-col pb-8 md:pb-0 border-b border-[var(--line)] md:border-none">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text)] leading-tight mb-2">
              {item.title}
            </h3>
            {item.subtitle && (
              <h4 className="text-base sm:text-lg text-[var(--text-soft)] font-medium mb-4">
                {item.subtitle}
              </h4>
            )}
            {item.description && (
              <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-light">
                {item.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 