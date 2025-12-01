import {
  ContentResource,
  ContentCategoryConfig,
} from "@/modules/categories/types/content";
import { HTML_CATEGORY } from "./html";

export const CONTENT_CATEGORIES: ContentCategoryConfig[] = [HTML_CATEGORY];

export function getContentCategory(slug: string): ContentCategoryConfig | null {
  return CONTENT_CATEGORIES.find((category) => category.slug === slug) ?? null;
}

export function getContentDefinition(
  categorySlug: string,
  componentSlug: string
): ContentResource | null {
  const category = getContentCategory(categorySlug);
  if (!category) {
    return null;
  }

  return category.items.find((item) => item.slug === componentSlug) ?? null;
}
