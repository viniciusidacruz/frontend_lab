"use client";

import Link from "next/link";
import Image from "next/image";
import { PanelLeftClose, PanelLeft, NotebookPen, Heart } from "lucide-react";

import { cn } from "@/shared/config";
import { useToggleAside } from "@/shared/hooks";
import { MENU_SECTIONS } from "@/modules/categories/utils";

import { NavLink, ListMenu, AsideLink } from "@/shared/components";

export const Aside = () => {
  const { isOpen, toggleAside } = useToggleAside();

  return (
    <aside
      className={cn(
        "bg-zinc-950 h-screen shrink-0 sticky top-0 transition-all duration-300 flex flex-col border-r border-zinc-800/50",
        isOpen ? "w-64" : "w-16"
      )}
      aria-label="Menu de navegação"
    >
      <div
        className={cn(
          "flex items-center h-16 border-b border-zinc-800/50",
          isOpen ? "px-4 justify-between" : "px-2 justify-center"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/svg/logo-collapsed.svg"
            alt="Frontend Lab"
            width={32}
            height={32}
          />
          {isOpen && (
            <span className="font-semibold text-zinc-100">Frontend Lab</span>
          )}
        </Link>

        {isOpen && (
          <button
            type="button"
            onClick={toggleAside}
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors"
            aria-label="Fechar menu"
          >
            <PanelLeftClose size={18} />
          </button>
        )}
      </div>

      {!isOpen && (
        <button
          type="button"
          onClick={toggleAside}
          className="p-2 mx-auto mt-3 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-colors"
          aria-label="Abrir menu"
        >
          <PanelLeft size={18} />
        </button>
      )}

      <nav
        aria-label="Menu principal"
        className={cn("flex-1 overflow-y-auto py-4", isOpen ? "px-3" : "px-2")}
      >
        {MENU_SECTIONS.map((section) => (
          <ListMenu.Root key={section.title} className="mb-6">
            {isOpen && <ListMenu.Title>{section.title}</ListMenu.Title>}
            {section.items.map((item) => (
              <ListMenu.Item key={item.href}>
                <NavLink href={item.href} collapsed={!isOpen}>
                  {isOpen ? item.label : item.shortLabel}
                </NavLink>
              </ListMenu.Item>
            ))}
          </ListMenu.Root>
        ))}
      </nav>

      <div
        className={cn(
          "border-t border-zinc-800/50 py-4 space-y-1",
          isOpen ? "px-3" : "px-2"
        )}
      >
        <AsideLink
          href="/donate"
          label="Doar"
          icon={{ type: "lucide", icon: Heart }}
          collapsed={!isOpen}
        />

        <AsideLink
          href="/blog"
          label="Blog"
          icon={{ type: "lucide", icon: NotebookPen }}
          collapsed={!isOpen}
        />

        <AsideLink
          href="https://github.com/viniciusidacruz/frontend_lab"
          label="GitHub"
          icon={{ type: "image", src: "/assets/svg/github.svg", alt: "GitHub" }}
          collapsed={!isOpen}
          isExternal
        />
      </div>
    </aside>
  );
};
