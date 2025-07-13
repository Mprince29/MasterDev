"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(); // Use entire page scroll

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    // Use viewport height for fixed positioned element
    setSvgHeight(window.innerHeight);
    
    const handleResize = () => {
      setSvgHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full", className)}
    >
      <div className="absolute top-18 left-0 hidden sm:block">
        <svg
          viewBox={`0 0 40 ${svgHeight}`}
          width="40"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <path
            d={`M 2 0V -36 l 36 24 V ${svgHeight * 0.8} l -36 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
          <path
            d={`M 2 0V -36 l 36 24 V ${svgHeight * 0.8} l -36 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#3B82F6" stopOpacity="0" />
              <stop stopColor="#3B82F6" />
              <stop offset="0.7" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      {children && <div ref={contentRef}>{children}</div>}
    </motion.div>
  );
}; 