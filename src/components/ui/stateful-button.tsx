"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaCheck, FaSpinner } from "react-icons/fa";

export const StatefulButton = ({
  children,
  onClick,
  className,
  successText = "Success!",
}: {
  children: React.ReactNode;
  onClick?: () => Promise<void> | void;
  className?: string;
  successText?: string;
}) => {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async () => {
    if (state !== "idle") return;
    try {
      setState("loading");
      if (onClick) {
        await onClick();
      } else {
        // simulate if no onClick provided
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setState("success");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      disabled={state !== "idle"}
      className={cn(
        "relative px-6 py-3 rounded-lg font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all overflow-hidden",
        state === "idle" ? "bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]" : "",
        state === "loading" ? "bg-blue-800 cursor-not-allowed" : "",
        state === "success" ? "bg-green-600" : "",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {state === "idle" && children}
        {state === "loading" && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaSpinner className="w-5 h-5" />
          </motion.div>
        )}
        {state === "success" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2"
          >
            <FaCheck className="w-5 h-5" />
            <span>{successText}</span>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};
