"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const FloatingSidebars = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Show sidebars after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Track scroll direction
  useMotionValueEvent(scrollYProgress, "change", () => {
    // Scroll tracking logic removed for simplicity
  });

  return (
    <>
      {/* Top Left - MasterDev Branding */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-8 left-8 z-[1000] hidden lg:block"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text">
                MasterDev
              </h2>
              <div className="w-full h-px bg-gradient-to-r from-blue-400 via-blue-200 to-white mt-2"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Right Sidebar - Social Media */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-[1000] hidden lg:block"
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Social Media Icons */}
              <div className="flex flex-col space-y-3">
                <motion.a
                  href="https://www.linkedin.com/in/master-prince-83609b257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-black/80 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300 group"
                >
                  <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
                
                <motion.a
                  href="https://x.com/Mprince_28"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-black/80 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300 group"
                >
                  <FaTwitter className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/m_princeee29"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-black/80 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300 group"
                >
                  <FaInstagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 