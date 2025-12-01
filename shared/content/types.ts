import { ComponentType } from "react";

export type ContentCategorySlug = "html";

export type ContentComponentSlug =
  | "datalist"
  | "details"
  | "dialog"
  | "picture"
  | "template";

export type RichTextSegment =
  | { type: "text"; value: string }
  | { type: "code"; value: string };

export type RichText = ReadonlyArray<RichTextSegment>;

export interface ContentInfoItem {
  title: string;
  description: RichText;
}

export interface ContentInfoSection {
  title: string;
  items: ContentInfoItem[];
}

export interface ContentResource {
  slug: ContentComponentSlug;
  category: ContentCategorySlug;
  title: string;
  shortLabel: string;
  description: string;
  characteristics: ContentInfoItem[];
  infoSection: ContentInfoSection;
  howItWorks: RichText;
  insights: ContentInfoItem[];
  code: {
    html: string;
    react: string;
  };
}

export interface ContentCategoryConfig {
  slug: ContentCategorySlug;
  title: string;
  items: ContentResource[];
}

export type ContentDemoMap = Record<ContentComponentSlug, ComponentType>;
