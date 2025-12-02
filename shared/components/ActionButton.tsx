import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn, capturePostHogEvent } from "@/shared/config";
import { BUTTON_VARIANT_CLASSNAMES, SHARED_EVENTS } from "@/shared/constants";

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
}: ActionButtonProps) => {
  const handleClick = () => {
    capturePostHogEvent(SHARED_EVENTS.ACTION_BUTTON_CLICKED, {
      href,
      variant,
      label: typeof children === "string" ? children : "action_button",
    });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all",
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
};
