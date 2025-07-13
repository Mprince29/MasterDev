import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BackgroundGradient({
  children,
  className,
  ...props
}: BackgroundGradientProps) {
  return (
    <div
      className={cn(
        "animated-glow relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border p-8 bg-black",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
} 