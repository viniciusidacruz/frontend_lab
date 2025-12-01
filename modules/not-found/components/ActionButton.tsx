import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/shared/config";

interface ActionButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  iconRight?: LucideIcon;
}

const variantStyles = {
  primary:
    "bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105",
  secondary:
    "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 hover:border-zinc-600",
};

export const ActionButton = ({
  href,
  icon: Icon,
  children,
  variant = "primary",
  iconRight: IconRight,
}: ActionButtonProps) => (
  <Link
    href={href}
    className={cn(
      "group flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all",
      variantStyles[variant]
    )}
  >
    <Icon className="w-4 h-4" />
    {children}
    {IconRight && (
      <IconRight
        className={cn(
          "w-4 h-4",
          variant === "primary" &&
            "group-hover:translate-x-1 transition-transform"
        )}
      />
    )}
  </Link>
);
