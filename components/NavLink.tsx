"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/config/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-white p-4 w-full rounded-md flex",
        isActive && "bg-blue-800"
      )}
    >
      {children}
    </Link>
  );
}
