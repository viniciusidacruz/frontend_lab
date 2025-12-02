/**
 * Eventos do PostHog compartilhados/globais
 */

export const SHARED_EVENTS = {
  ACTION_BUTTON_CLICKED: "action_button_clicked",
  CONTENT_CARD_VIEWED: "content_card_viewed",
} as const;

export type SharedEventName =
  (typeof SHARED_EVENTS)[keyof typeof SHARED_EVENTS];

/**
 * Propriedades do evento de clique em botão de ação
 */
export interface ActionButtonClickedEventProperties {
  readonly href: string;
  readonly variant: "primary" | "secondary";
  readonly label: string;
}

/**
 * Propriedades do evento de visualização de card de conteúdo
 */
export interface ContentCardViewedEventProperties {
  readonly topic_id: string;
  readonly topic_title: string;
  readonly topic_variant: string;
  readonly topic_status: string;
}
