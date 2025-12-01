import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/shared/config";
import { BUTTON_VARIANT_CLASSNAMES } from "@/shared/constants";

interface ActionButtonProps {
  readonly href: string;
  readonly icon: LucideIcon;
  readonly children: React.ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly iconRight?: LucideIcon;
}

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
      BUTTON_VARIANT_CLASSNAMES[variant]
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

