import { LucideIcon } from "lucide-react";
import { cn } from "@/shared/config";
import { BUTTON_VARIANT_CLASSNAMES } from "@/shared/constants";

interface ResetButtonProps {
  readonly icon: LucideIcon;
  readonly children: React.ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly onClick: () => void;
}

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
      BUTTON_VARIANT_CLASSNAMES[variant]
    )}
  >
    <Icon className="w-4 h-4" />
    {children}
  </button>
);

