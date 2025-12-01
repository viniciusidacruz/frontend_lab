export interface QuickLink {
  readonly href: string;
  readonly label: string;
}

export const QUICK_LINKS: ReadonlyArray<QuickLink> = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/donate", label: "Doar" },
] as const;
