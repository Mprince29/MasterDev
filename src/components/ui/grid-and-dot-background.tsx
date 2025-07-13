"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface GridAndDotBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "grid" | "grid-small" | "dots";
}

export function GridAndDotBackground({ 
  className, 
  variant = "grid",
  ...props 
}: GridAndDotBackgroundProps) {
  console.log("GridAndDotBackground rendering with variant:", variant);
  return (
    <div
      className={cn(
        "h-screen w-full bg-black relative flex items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      {variant === "grid" && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808040_1px,transparent_1px),linear-gradient(to_bottom,#80808040_1px,transparent_1px)] bg-[size:40px_40px]" />
      )}
      
      {variant === "grid-small" && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:6px_6px]" />
      )}
      
      {variant === "dots" && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F6,transparent)]" />
      )}
      
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
} 