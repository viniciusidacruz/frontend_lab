import { ComponentProps } from "react";

import { cn } from "@/shared/config";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ComponentProps<"button"> {
  readonly variant?: ButtonVariant;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg",
  secondary:
    "px-4 py-2 text-gray-600 hover:text-gray-800 font-medium bg-transparent",
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={cn(
      "transition-colors cursor-pointer",
      VARIANT_STYLES[variant],
      className
    )}
    {...props}
  >
    {children}
  </button>
);
