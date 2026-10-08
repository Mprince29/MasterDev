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
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative grid grid-cols-1 md:grid-cols-[190px_minmax(0,1fr)] gap-3 md:gap-10 items-start py-7 first:pt-0 border-t border-[var(--line)]"
        >
          {/* Left Column: Date & Badge */}
          <div className="flex flex-row md:flex-col items-start gap-3 md:gap-2 shrink-0">
            {item.date && (
              <span className="text-sm sm:text-base font-semibold text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors duration-300">
                {item.date}
              </span>
            )}
            {item.badge && (
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--accent)] bg-[var(--bg-soft)] px-2.5 py-1 rounded-full border border-[var(--line)]">
                {item.badge}
              </span>
            )}
          </div>

          {/* Right Column: Content */}
          <div className="w-full flex flex-col">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--text)] leading-tight mb-1">
              {item.title}
            </h3>
            {item.subtitle && (
              <h4 className="text-base text-[var(--text-soft)] font-medium mb-2">
                {item.subtitle}
              </h4>
            )}
            {item.description && (
              <p className="max-w-2xl text-[var(--text-muted)] text-sm sm:text-[15px] leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
