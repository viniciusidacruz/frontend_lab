/**
 * Eventos do PostHog relacionados ao módulo Donate
 */

export const DONATE_EVENTS = {
  PIX_COPIED: "pix_copied",
  PLATFORM_CLICKED: "donation_platform_clicked",
} as const;

export type DonateEventName =
  (typeof DONATE_EVENTS)[keyof typeof DONATE_EVENTS];

/**
 * Propriedades do evento de cópia do Pix
 */
export interface PixCopiedEventProperties {
  readonly has_payload: boolean;
}

/**
 * Propriedades do evento de clique em plataforma de doação
 */
export interface PlatformClickedEventProperties {
  readonly platform_name: string;
  readonly platform_url: string;
}

