"use client";

import { ChevronLeft, Menu } from "lucide-react";

import { cn } from "@/config/cn";
import { MENU_SECTIONS } from "@/constants";
import { useToggleAside } from "@/hooks/useToggleAside";

import { NavLink, ListMenu, Logo } from "@/components";

export const Aside = () => {
  const { isOpen, toggleAside } = useToggleAside();

  return (
    <aside
      className={cn(
        "bg-zinc-900 h-screen shrink-0 sticky top-0 transition-all duration-300 flex flex-col",
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
        {MENU_SECTIONS.map((section) => (
          <ListMenu.Root key={section.title}>
            <ListMenu.Title>{isOpen ? section.title : ""}</ListMenu.Title>
            {section.items.map((item) => (
              <ListMenu.Item key={item.href}>
                <NavLink href={item.href}>
                  {isOpen ? item.label : item.shortLabel}
                </NavLink>
              </ListMenu.Item>
            ))}
          </ListMenu.Root>
        ))}
      </nav>
    </aside>
  );
};
