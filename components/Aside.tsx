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
      aria-label="Menu de navegação"
    >
      <button
        type="button"
        className="lg:absolute lg:top-4 lg:right-4 block lg:hidden mb-8 lg:mb-0"
        onClick={toggleAside}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <ChevronLeft /> : <Menu />}
      </button>

      <Logo collapsed={!isOpen} />

      <nav aria-label="Menu principal" className="overflow-y-auto flex-1">
        <ListMenu.Root>
          <ListMenu.Title>{isOpen ? "HTML" : ""}</ListMenu.Title>
          <ListMenu.Item>
            <NavLink href="/dialog">{isOpen ? "Dialog" : "Di"}</NavLink>
          </ListMenu.Item>
          <ListMenu.Item>
            <NavLink href="/details">{isOpen ? "Details" : "De"}</NavLink>
          </ListMenu.Item>
          <ListMenu.Item>
            <NavLink href="/datalist">{isOpen ? "Datalist" : "Da"}</NavLink>
          </ListMenu.Item>
          <ListMenu.Item>
            <NavLink href="/template">{isOpen ? "Template" : "Te"}</NavLink>
          </ListMenu.Item>
          <ListMenu.Item>
            <NavLink href="/picture">{isOpen ? "Picture" : "Pi"}</NavLink>
          </ListMenu.Item>
        </ListMenu.Root>
      </nav>
    </aside>
  );
};
