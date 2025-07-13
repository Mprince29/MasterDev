import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  icon?: React.ReactNode;
  description?: string;
}

export function ToolCard({ name, icon, description }: ToolCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-white/10 bg-white/[0.05] p-4 text-white shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
      )}
    >
      <div className="flex items-center gap-4">
        {icon && <div className="text-2xl">{icon}</div>}
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          {description && <p className="text-sm text-white/60">{description}</p>}
        </div>
      </div>
    </div>
  );
} 