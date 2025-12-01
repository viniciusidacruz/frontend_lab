import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

interface PixResponse {
  readonly payload?: string;
  readonly error?: string;
}

async function fetchPixPayload(): Promise<string> {
  const response = await fetch("/api/pix", { cache: "no-store" });

  if (!response.ok) {
    await response.json().catch(() => ({}));
    let errorMessage = "Falha ao carregar o Pix. Tente novamente mais tarde.";

    if (response.status === 429) {
      errorMessage = "Muitas requisições. Tente novamente em alguns instantes.";
    } else if (response.status === 500) {
      errorMessage =
        "Configuração do servidor incompleta. Entre em contato com o administrador.";
    }

    throw new Error(errorMessage);
  }

  const data: PixResponse = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  if (!data.payload) {
    throw new Error("Payload inválido");
  }

  return data.payload;
}

export function usePixDonation() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pix-payload"],
    queryFn: fetchPixPayload,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  const qrCodeUrl = useMemo(() => {
    if (!payload) return "";

    const encodedPayload = encodeURIComponent(payload);
    return `https://quickchart.io/qr?text=${encodedPayload}&margin=2&size=192`;
  }, [payload]);

  const handleCopy = () => {
    if (!payload) return;
    copyToClipboard(payload);
  };

  const errorMessage = error instanceof Error ? error.message : null;

  return {
    payload: payload ?? "",
    qrCodeUrl,
    isLoading,
    error: errorMessage,
    copied: isCopied,
    handleCopy,
  };
}
