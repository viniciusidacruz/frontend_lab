"use client";

import { Document } from "@/shared/components";

export const DetailsDemo = () => {
  return (
    <>
      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Clique nos itens abaixo para expandir/recolher. Note que os dois últimos
        usam o atributo <Document.Code>name</Document.Code> para funcionar como
        accordion (apenas um aberto por vez).
      </Document.Paragraph>

      <div className="space-y-3 max-w-2xl">
        <details className="border border-zinc-700 rounded-lg p-4 bg-zinc-800/50">
          <summary className="cursor-pointer font-semibold text-zinc-100 list-none flex items-center gap-2">
            <span className="transition-transform duration-200 details-marker">
              ▶
            </span>
            O que é o Frontend Lab?
          </summary>
          <p className="mt-3 text-zinc-400">
            É uma plataforma de estudos práticos focada em recursos nativos do
            navegador que muitos desenvolvedores desconhecem.
          </p>
        </details>

        <details className="border border-zinc-700 rounded-lg p-4 bg-zinc-800/50">
          <summary className="cursor-pointer font-semibold text-zinc-100 list-none flex items-center gap-2">
            <span className="transition-transform duration-200 details-marker">
              ▶
            </span>
            Preciso de JavaScript para usar details?
          </summary>
          <p className="mt-3 text-zinc-400">
            Não! O elemento details funciona 100% com HTML puro. JavaScript é
            opcional para casos avançados.
          </p>
        </details>

        <Document.Paragraph>
          <strong className="text-zinc-300">
            Accordion com atributo name:
          </strong>
        </Document.Paragraph>

        <details
          name="accordion-demo"
          className="border border-blue-600/50 rounded-lg p-4 bg-blue-900/20"
        >
          <summary className="cursor-pointer font-semibold text-zinc-100 list-none flex items-center gap-2">
            <span className="transition-transform duration-200 details-marker">
              ▶
            </span>
            Seção 1 (grupo accordion)
          </summary>
          <p className="mt-3 text-zinc-400">
            Ao abrir esta seção, a outra do mesmo grupo fecha automaticamente.
          </p>
        </details>

        <details
          name="accordion-demo"
          className="border border-blue-600/50 rounded-lg p-4 bg-blue-900/20"
        >
          <summary className="cursor-pointer font-semibold text-zinc-100 list-none flex items-center gap-2">
            <span className="transition-transform duration-200 details-marker">
              ▶
            </span>
            Seção 2 (grupo accordion)
          </summary>
          <p className="mt-3 text-zinc-400">
            Este comportamento é nativo do HTML usando o atributo name.
          </p>
        </details>
      </div>
    </>
  );
};
