import { LucideIcon } from "lucide-react";
import { cn } from "@/shared/config";

interface ResetButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

const variantStyles = {
  primary:
    "bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105",
  secondary:
    "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 hover:border-zinc-600",
};

export const ResetButton = ({
  icon: Icon,
  children,
  variant = "secondary",
  onClick,
}: ResetButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "group flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all",
      variantStyles[variant]
    )}
  >
    <Icon className="w-4 h-4" />
    {children}
  </button>
);

