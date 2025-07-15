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
  index?: number;
  isMobile?: boolean;
}

export default function SocialCard({
  platform,
  profileUrl,
  imageUrl,
  name,
  handle,
  icon,
  index,
  isMobile,
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

  if (isMobile) {
    // Inline card for mobile, no profile photo
    return (
      <div className="animated-glow w-full flex flex-row items-center gap-2 rounded-2xl bg-white/15 backdrop-blur-xl p-2 text-white shadow-2xl border border-white/20">
        <span className="w-8 h-8 flex items-center justify-center text-xl">{icon}</span>
        <div className="flex flex-col justify-center">
          <h4 className="text-base font-bold leading-tight whitespace-nowrap">{name}</h4>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-300 hover:text-blue-200 transition-colors duration-200 font-medium whitespace-nowrap"
          >
            {handle}
          </a>
        </div>
      </div>
    );
  }

  // Desktop: keep popup logic
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
            className={
              `animated-glow absolute top-full mt-4 rounded-2xl bg-white/15 backdrop-blur-xl text-white shadow-2xl z-10 border border-white/20 ` +
              (isMobile
                ? 'w-[180px] p-2 flex flex-row items-center gap-2 '
                : 'w-[350px] p-6 sm:p-6 flex flex-col') +
              (
                isMobile
                  ? (index ?? 0) % 2 === 0
                    ? ' left-0 -translate-x-0'
                    : ' right-0 translate-x-0'
                  : ' left-1/2 -translate-x-1/2'
              )
            }
            style={
              isMobile
                ? (index ?? 0) % 2 === 0
                  ? { right: 'auto', left: 0 }
                  : { left: 'auto', right: 0 }
                : { left: '50%', transform: 'translateX(-50%)' }
            }
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