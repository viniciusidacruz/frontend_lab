/**
 * Configurações e constantes de eventos do PostHog
 *
 * Eventos globais/compartilhados devem estar em shared/constants/events.ts
 * Eventos específicos de módulos devem estar em modules/[modulo]/events/index.ts
 */

import posthog from "posthog-js";

/**
 * Função utilitária para capturar eventos do PostHog
 * Pode ser usada fora de componentes React
 */
export function capturePostHogEvent(
  eventName: string,
  properties?: Record<string, unknown>
) {
  if (globalThis.window !== undefined) {
    try {
      posthog.capture(eventName, properties);
    } catch (error) {
      console.error("PostHog capture error:", error);
    }
  }
}
