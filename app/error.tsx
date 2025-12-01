"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Home, RefreshCw, ArrowRight } from "lucide-react";

import { PROJECT, QUICK_LINKS } from "@/shared/constants";
import { ErrorNumber, ActionButton, QuickLinks } from "@/shared/components";
import { ErrorMessage, ResetButton } from "@/modules/error/components";

interface ErrorBoundaryProps {
  readonly error: Error & { readonly digest?: string };
  readonly reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: Readonly<ErrorBoundaryProps>) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="max-w-5xl mx-auto px-8 py-12 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center w-full">
        <div className="mb-8">
          <Image
            src={PROJECT.logo}
            alt={PROJECT.name}
            width={80}
            height={80}
            className="drop-shadow-2xl mx-auto mb-6 opacity-50"
          />
          <ErrorNumber code="500" />
        </div>

        <ErrorMessage
          title="Algo deu errado"
          description="Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <ActionButton
            href="/"
            icon={Home}
            iconRight={ArrowRight}
            variant="primary"
          >
            Voltar para o início
          </ActionButton>
          <ResetButton icon={RefreshCw} variant="secondary" onClick={reset}>
            Tentar novamente
          </ResetButton>
        </div>

        <QuickLinks links={QUICK_LINKS} />
      </div>
    </div>
  );
}
