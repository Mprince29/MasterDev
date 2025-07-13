import { cn } from "@/lib/utils";

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface CategoryCardProps {
  title: string;
  description?: string;
  tools: Tool[];
}

export function CategoryCard({ title, description, tools }: CategoryCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/[0.05] p-8 text-white shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/20 flex flex-col items-start"
      )}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && <p className="text-sm text-white/60 mb-4">{description}</p>}
      <div className="flex flex-wrap gap-6 mt-2">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center min-w-[60px]">
            <span className="text-3xl mb-1">{tool.icon}</span>
            <span className="text-xs text-white/80 text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 