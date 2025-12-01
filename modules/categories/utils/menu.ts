import { CONTENT_CATEGORIES } from "./content";

export interface MenuItem {
  readonly label: string;
  readonly shortLabel: string;
  readonly href: string;
  readonly tag?: string;
}

export interface MenuSection {
  readonly title: string;
  readonly items: ReadonlyArray<MenuItem>;
}

export const MENU_SECTIONS: ReadonlyArray<MenuSection> = CONTENT_CATEGORIES.map(
  (category) => ({
    title: category.title,
    items: category.items.map((item) => ({
      label: item.title,
      shortLabel: item.shortLabel,
      href: `/${item.category}/${item.slug}`,
    })),
  })
);

