import { cn } from "@/lib/utils";
import React from "react";

interface Tool {
  name: string;
  icon: React.ReactNode;
  color: string; // brand color for hover
}

interface FeatureBlockCardProps {
  title: string;
  tools: Tool[];
}

export function FeatureBlockCard({ title, tools }: FeatureBlockCardProps) {
  return (
    <div
      className={cn(
        "animated-glow group relative rounded-2xl border border-white/10 bg-white/[0.07] p-4 sm:p-6 text-white shadow-lg backdrop-blur overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:shadow-xl hover:border-blue-400/40 w-full min-h-[140px] flex flex-col items-start"
      )}
    >
      <div className="relative z-10 flex flex-col items-start w-full">
        <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-blue-400">{title}</h3>
        <div className="flex flex-row flex-wrap justify-start gap-4 w-full mt-4 mb-1">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center min-w-[36px] flex-shrink-0">
              <span
                className={"text-4xl mb-3 transition-colors duration-300 group-hover:[color:var(--brand)]"}
                style={{ color: undefined, '--brand': tool.color } as React.CSSProperties}
              >
                {tool.icon}
              </span>
              <span className="text-xs text-white/80 text-center font-medium leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add this to your globals.css:
// @keyframes gradient-move { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
// .animate-gradient-move { background-size: 200% 200%; animation: gradient-move 4s linear infinite; } 