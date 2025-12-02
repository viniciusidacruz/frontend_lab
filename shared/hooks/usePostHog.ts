"use client";

import { capturePostHogEvent as captureEvent } from "@/shared/config";

/**
 * Hook para capturar eventos do PostHog
 *
 * @deprecated Use capturePostHogEvent de @/shared/config diretamente
 * Este hook é mantido apenas para compatibilidade
 */
export function usePostHog() {
  const capture = (eventName: string, properties?: Record<string, unknown>) => {
    captureEvent(eventName, properties);
  };

  return { capture };
}

/**
 * Função utilitária para capturar eventos do PostHog
 *
 * @deprecated Use capturePostHogEvent de @/shared/config diretamente
 * Esta função é mantida apenas para compatibilidade
 */
export function capturePostHogEvent(
  eventName: string,
  properties?: Record<string, unknown>
) {
  captureEvent(eventName, properties);
}
