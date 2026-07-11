"use client";

import { motion } from "framer-motion";

export function AnimatedHeroVector() {
  return (
    <div className="absolute right-0 top-0 -z-10 h-full w-full max-w-lg opacity-20 pointer-events-none overflow-hidden">
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[var(--accent)]"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M200 50 L200 350 M50 200 L350 200"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />
        <motion.rect
          x="140"
          y="140"
          width="120"
          height="120"
          rx="16"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{
            duration: 2,
            ease: "backOut",
            delay: 1.5,
          }}
          style={{ transformOrigin: "200px 200px" }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + Math.cos((i * Math.PI * 2) / 5) * 120}
            cy={200 + Math.sin((i * Math.PI * 2) / 5) * 120}
            r="3"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
