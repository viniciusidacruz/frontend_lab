import { CONTENT_CATEGORIES } from "./content";

export interface MenuItem {
  label: string;
  shortLabel: string;
  href: string;
  tag?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const MENU_SECTIONS: MenuSection[] = CONTENT_CATEGORIES.map(
  (category) => ({
    title: category.title,
    items: category.items.map((item) => ({
      label: item.title,
      shortLabel: item.shortLabel,
      href: `/${item.category}/${item.slug}`,
    })),
  })
);

