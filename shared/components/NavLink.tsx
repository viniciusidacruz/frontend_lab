"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/shared/config";

interface NavLinkProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly collapsed?: boolean;
}

export function NavLink({ href, children, collapsed }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
        collapsed ? "justify-center" : "justify-start",
        isActive
          ? "bg-blue-500/10 text-blue-400"
          : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
      )}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-blue-500 rounded-full" />
      )}
      {children}
    </Link>
  );
}
