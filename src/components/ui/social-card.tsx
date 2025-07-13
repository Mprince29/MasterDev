"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SocialCardProps {
  platform: string;
  profileUrl: string;
  imageUrl: string; // external image URL
  name: string;
  handle: string;
  icon: React.ReactNode;
}

export default function SocialCard({
  platform,
  profileUrl,
  imageUrl,
  name,
  handle,
  icon,
}: SocialCardProps) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={rootRef} className="relative w-full flex flex-col items-center">
      {/* Clickable icon or button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="animated-glow w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur border border-white/20"
        aria-label={`Open ${platform} card`}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
          borderColor: "rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17 
        }}
      >
        <motion.div
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ 
            rotate: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: 0.2, ease: "easeInOut" }
          }}
          className="text-xl"
        >
          {icon}
        </motion.div>
      </motion.button>

      {/* Animate card popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            className="animated-glow absolute left-1/2 top-full mt-4 w-[280px] sm:w-[350px] -translate-x-1/2 rounded-2xl bg-white/15 backdrop-blur-xl p-4 sm:p-6 text-white shadow-2xl z-10 border border-white/20"
          >
                          <div className="flex items-center gap-4 sm:gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              >
                <Image
                  src={imageUrl}
                  alt="profile"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full object-cover border-2 border-white/20"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h4 className="text-lg sm:text-xl font-bold mb-1">{name}</h4>
                <p className="text-sm sm:text-base text-white/70 mb-2">{platform}</p>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium"
                >
                  {handle}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 