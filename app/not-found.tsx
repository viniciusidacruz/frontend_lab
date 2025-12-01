import Image from "next/image";
import { Home, Search, ArrowRight } from "lucide-react";

import { PROJECT, QUICK_LINKS } from "@/shared/constants";
import { ErrorNumber, ActionButton, QuickLinks } from "@/shared/components";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-2 py-4 sm:px-8 sm:py-12 min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center w-full">
        <div className="mb-8">
          <Image
            src={PROJECT.logo}
            alt={PROJECT.name}
            width={80}
            height={80}
            className="drop-shadow-2xl mx-auto mb-6 opacity-50"
          />
          <ErrorNumber code="404" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
          Página não encontrada
        </h2>

        <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          Oops! A página que você está procurando não existe ou foi movida. Que
          tal explorar nosso conteúdo disponível?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <ActionButton
            href="/"
            icon={Home}
            iconRight={ArrowRight}
            variant="primary"
          >
            Voltar para o início
          </ActionButton>
          <ActionButton href="/blog" icon={Search} variant="secondary">
            Explorar conteúdo
          </ActionButton>
        </div>

        <QuickLinks links={QUICK_LINKS} />
      </div>
    </div>
  );
}
