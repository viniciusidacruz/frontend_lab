"use client";

import { Document } from "@/components";

export const PictureDemo = () => {
  return (
    <>
      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Redimensione a janela do navegador para ver o elemento picture em ação.
        Diferentes cores de fundo indicam qual source está sendo utilizado.
      </Document.Paragraph>

      <div className="max-w-2xl space-y-6">
        <div className="border border-zinc-700 rounded-lg overflow-hidden">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%233B82F6' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='32' fill='white' text-anchor='middle' dy='.3em' font-family='system-ui'%3EDesktop (≥1024px)%3C/text%3E%3C/svg%3E"
            />
            <source
              media="(min-width: 768px)"
              srcSet="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Crect fill='%238B5CF6' width='600' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='28' fill='white' text-anchor='middle' dy='.3em' font-family='system-ui'%3ETablet (≥768px)%3C/text%3E%3C/svg%3E"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23EC4899' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em' font-family='system-ui'%3EMobile (%3C768px)%3C/text%3E%3C/svg%3E"
              alt="Demonstração de imagem responsiva"
              className="w-full h-auto"
            />
          </picture>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="p-3 bg-pink-500/20 border border-pink-500/50 rounded-lg">
            <div className="text-pink-400 font-semibold">Mobile</div>
            <div className="text-zinc-400">&lt;768px</div>
          </div>
          <div className="p-3 bg-violet-500/20 border border-violet-500/50 rounded-lg">
            <div className="text-violet-400 font-semibold">Tablet</div>
            <div className="text-zinc-400">≥768px</div>
          </div>
          <div className="p-3 bg-blue-500/20 border border-blue-500/50 rounded-lg">
            <div className="text-blue-400 font-semibold">Desktop</div>
            <div className="text-zinc-400">≥1024px</div>
          </div>
        </div>

        <Document.Paragraph>
          <strong className="text-zinc-300">Dica:</strong> Abra o DevTools e
          alterne entre dispositivos para ver a troca de imagens em tempo real.
        </Document.Paragraph>
      </div>
    </>
  );
};

