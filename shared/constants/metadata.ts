import type { Metadata } from "next";
import { PROJECT, AUTHOR } from "./author";

export const BASE_URL = "https://frontendlab.dev";

export const DEFAULT_METADATA = {
  title: `${PROJECT.name} | ${PROJECT.description}`,
  description: PROJECT.description,
  url: BASE_URL,
  siteName: PROJECT.name,
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
} as const;

export const BLOG_METADATA = {
  title: `Blog | ${PROJECT.name}`,
  description:
    "Artigos sobre desenvolvimento frontend, boas práticas e muito mais.",
  url: `${BASE_URL}/blog`,
} as const;

export const DONATE_METADATA = {
  title: `Doar | ${PROJECT.name}`,
  description:
    "Ajude a manter este projeto vivo e crescendo. Esta aplicação é sem fins lucrativos e foi criada para compartilhar conhecimento em frontend de forma aberta e acessível.",
  url: `${BASE_URL}/donate`,
} as const;

/**
 * Cria metadados padronizados com OpenGraph
 */
export function createMetadata({
  title,
  description,
  url,
  type = "website",
}: {
  title: string;
  description: string;
  url?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: url || DEFAULT_METADATA.url,
      siteName: DEFAULT_METADATA.siteName,
      type,
    },
  };
}

