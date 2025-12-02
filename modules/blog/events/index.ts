/**
 * Eventos do PostHog relacionados ao módulo Blog
 */

export const BLOG_EVENTS = {
  SEARCH: "blog_search",
  POST_CLICKED: "post_clicked",
} as const;

export type BlogEventName = (typeof BLOG_EVENTS)[keyof typeof BLOG_EVENTS];

/**
 * Propriedades do evento de busca no blog
 */
export interface BlogSearchEventProperties {
  readonly search_term: string;
  readonly has_term: boolean;
}

/**
 * Propriedades do evento de clique em post
 */
export interface PostClickedEventProperties {
  readonly post_slug: string;
  readonly post_title: string;
  readonly is_featured: boolean;
}

