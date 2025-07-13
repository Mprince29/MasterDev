"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCardProps extends React.ComponentProps<typeof motion.div> {
  expanded: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ExpandableCard({ expanded, onClick, icon, children, className, ...props }: ExpandableCardProps) {
  return (
    <motion.div
      layout
      initial={false}
      animate={{ height: expanded ? "auto" : "4.5rem", width: expanded ? "20rem" : "4.5rem" }}
      transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] text-white shadow-lg backdrop-blur-lg transition-all cursor-pointer flex flex-col items-center justify-center",
        className
      )}
      style={{ minWidth: "4.5rem", minHeight: "4.5rem" }}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-center w-full h-full min-h-[4.5rem] min-w-[4.5rem]">
        {icon}
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="w-full px-4 pb-4 pt-2 flex flex-col items-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 