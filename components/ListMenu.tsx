import { ComponentProps } from "react";

import { cn } from "@/config/cn";

type RootProps = ComponentProps<"ul">;
type TitleProps = ComponentProps<"h3">;
type ItemProps = ComponentProps<"li">;

const Root = ({ children, className, ...props }: RootProps) => (
  <ul
    className={cn("mt-8 w-full overflow-y-auto space-y-6", className)}
    {...props}
  >
    {children}
  </ul>
);

const Title = ({ children, className, ...props }: TitleProps) => (
  <h3
    className={cn("text-zinc-100 font-medium mb-4 text-sm", className)}
    {...props}
  >
    {children}
  </h3>
);

const Item = ({ children, className, ...props }: ItemProps) => (
  <li className={cn("w-full", className)} {...props}>
    {children}
  </li>
);

export const ListMenu = {
  Root,
  Title,
  Item,
};
