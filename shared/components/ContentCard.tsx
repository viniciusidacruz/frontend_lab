import { cn } from "@/shared/config";
import type { ContentTopic, StatusTopic, VariantTopic } from "@/shared/queries";

const COLOR_VARIANTS = {
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    text: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-400",
  },
  yellow: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    text: "text-yellow-400",
    badge: "bg-yellow-500/20 text-yellow-400",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    text: "text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-400",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    text: "text-violet-400",
    badge: "bg-violet-500/20 text-violet-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    text: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-400",
  },
  rose: {
    border: "border-rose-500/30",
    bg: "bg-rose-500/5",
    text: "text-rose-400",
    badge: "bg-rose-500/20 text-rose-400",
  },
} as const;

const VARIANT_COLOR_MAP: Record<VariantTopic, keyof typeof COLOR_VARIANTS> = {
  HTML_ADVANCED: "orange",
  JS_APIS: "yellow",
  FRONTEND_ARCH: "cyan",
  DESIGN_PATTERNS: "violet",
  SOLID: "emerald",
  CLEAN_CODE: "rose",
};

const STATUS_LABEL: Record<StatusTopic, string> = {
  AVAILABLE: "Disponível",
  COMING_SOON: "Em breve",
};

interface ContentCardRootProps {
  topic: ContentTopic;
  children: React.ReactNode;
}

const Root = ({ topic, children }: ContentCardRootProps) => {
  const colorKey = VARIANT_COLOR_MAP[topic.variantsTopic] ?? "cyan";
  const colors = COLOR_VARIANTS[colorKey];

  return (
    <div
      className={cn(
        "rounded-xl border p-5 transition-all duration-300 hover:scale-[1.02]",
        colors.border,
        colors.bg
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={cn("font-semibold", colors.text)}>{topic.title}</h3>
        <span
          className={cn(
            "text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap",
            topic.statusTopic === "AVAILABLE"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-zinc-700 text-zinc-400"
          )}
        >
          {STATUS_LABEL[topic.statusTopic]}
        </span>
      </div>
      <p className="text-zinc-500 text-sm mb-4">{topic.description}</p>
      {children}
    </div>
  );
};

interface ContentCardTagsProps {
  tags: string[];
  variant: VariantTopic;
}

const Tags = ({ tags, variant }: ContentCardTagsProps) => {
  const colorKey = VARIANT_COLOR_MAP[variant] ?? "cyan";
  const colors = COLOR_VARIANTS[colorKey];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "text-xs px-2 py-1 rounded-md font-medium",
            colors.badge
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export const ContentCard = {
  Root,
  Tags,
};
