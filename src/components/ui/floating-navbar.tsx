"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // Show navbar when scrolled down (not at the very top)
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          className={cn(
            "fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-[1000] flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 rounded-full border border-white/50 bg-black/90 backdrop-blur-xl px-4 sm:px-6 md:px-8 py-2 w-full max-w-xs sm:max-w-md",
            className
          )}
        >
          {navItems.map((navItem, idx: number) => {
            const isActive = pathname === navItem.link || 
              (navItem.link === "/" && pathname === "/") ||
              (navItem.link !== "/" && pathname.startsWith(navItem.link));
            
            return (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center space-x-1 text-sm text-neutral-50 transition-colors hover:text-neutral-300",
                  isActive && "border-2 border-white/40 bg-white/10 hover:bg-white/20 rounded-full px-4 py-1 hover:scale-105 transition-all duration-300"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-xs sm:text-sm">{navItem.name}</span>
              </a>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 