"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export function FadeInScroll({ children, delay = 0, className = "", id }: FadeInScrollProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`scroll-mt-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}
