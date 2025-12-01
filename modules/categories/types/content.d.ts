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
  readonly title: string;
  readonly description: RichText;
}

export interface ContentInfoSection {
  readonly title: string;
  readonly items: ReadonlyArray<ContentInfoItem>;
}

export interface ContentResource {
  readonly slug: ContentComponentSlug;
  readonly category: ContentCategorySlug;
  readonly title: string;
  readonly shortLabel: string;
  readonly description: string;
  readonly characteristics: ReadonlyArray<ContentInfoItem>;
  readonly infoSection: ContentInfoSection;
  readonly howItWorks: RichText;
  readonly insights: ReadonlyArray<ContentInfoItem>;
  readonly code: {
    readonly html: string;
    readonly react: string;
  };
}

export interface ContentCategoryConfig {
  readonly slug: ContentCategorySlug;
  readonly title: string;
  readonly items: ReadonlyArray<ContentResource>;
}

export type ContentDemoMap = Record<ContentComponentSlug, ComponentType>;
