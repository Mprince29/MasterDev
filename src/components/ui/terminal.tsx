"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Terminal = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="w-full w-full mx-auto rounded-xl bg-[#1e1e1e] overflow-hidden border border-white/10 shadow-2xl relative z-20">
      <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400 font-mono">prince@macbook:~</div>
      </div>
      <div className="p-6 font-mono text-sm sm:text-base text-gray-300 min-h-[120px]">
        <div className="flex flex-wrap">
          <span className="text-green-400 mr-2">➜</span>
          <span className="text-blue-400 mr-2">~</span>
          <span className="text-white whitespace-pre-wrap">{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-5 bg-white ml-1 inline-block align-middle"
          />
        </div>
      </div>
    </div>
  );
};
