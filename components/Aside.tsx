"use client";

import { ChevronLeft, Menu } from "lucide-react";

import { cn } from "@/config/cn";
import { useToggleAside } from "@/hooks/useToggleAside";

import { NavLink } from "@/components";
import { ListMenu } from "./ListMenu";
import { Logo } from "./Logo";

export const Aside = () => {
  const { isOpen, toggleAside } = useToggleAside();

  return (
    <aside
      className={cn(
        "bg-zinc-900 h-full shrink-0 relative transition-all duration-300 flex flex-col",
        isOpen ? "w-sm p-8" : "w-20 p-4 items-center"
      )}
    >
      <button
        type="button"
        className="lg:absolute lg:top-4 lg:right-4 block lg:hidden mb-8 lg:mb-0"
        onClick={toggleAside}
      >
        {isOpen ? <ChevronLeft /> : <Menu />}
      </button>

      <Logo collapsed={!isOpen} />

      <ListMenu.Root>
        <ListMenu.Title>HTML</ListMenu.Title>
        <ListMenu.Item title="Dialog">
          <NavLink href="/dialog">{isOpen ? "Dialog" : "D"}</NavLink>
        </ListMenu.Item>
      </ListMenu.Root>
    </aside>
  );
};
