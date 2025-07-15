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
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-blue-200 to-blue-500 rounded-full blur-[1px] z-0" />
      
      <div className="relative">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          // Function to handle directional hover effect
          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
          };

          const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
              className={`relative flex w-full mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              {/* Icon on the opposite side of the timeline */}
              {isLeft ? (
                <div className="hidden md:flex flex-col justify-center items-end w-1/2 pr-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                    {item.icon}
                  </div>
                </div>
              ) : null}

              <div className={`relative w-full md:w-1/2 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                  className={`relative animated-glow backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-blue-500/40 hover:border-blue-500/30 transition-all duration-700 ease-out max-w-5xl w-full ${isLeft ? 'ml-2 md:ml-4' : 'mr-2 md:mr-4'} group cursor-pointer border border-white/10`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-blue-300 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      {item.badge}
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-200 to-white text-transparent bg-clip-text drop-shadow font-[Poppins,Inter,sans-serif]">
                      {item.title}
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-200 font-semibold font-[Poppins,Inter,sans-serif]">
                      <span className="text-lg whitespace-nowrap">{item.subtitle}</span>
                      {item.date && (
                        <span className="text-[9px] leading-none text-gray-400 font-normal bg-gray-800/50 px-1 py-0.5 rounded-full border border-gray-600 mt-1 sm:mt-0 w-full sm:w-auto text-center sm:text-left">
                          {item.date}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-gray-300 text-base font-[Inter,sans-serif] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Icon on the opposite side of the timeline */}
              {!isLeft ? (
                <div className="hidden md:flex flex-col justify-center items-start w-1/2 pl-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                    {item.icon}
                  </div>
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 