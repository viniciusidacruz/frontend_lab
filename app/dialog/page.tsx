"use client";

import { useRef } from "react";

import { Header, Button, Document } from "@/components";

import { DIALOG_CARACTERS, DIALOG_METHODS, DIALOG_CODE } from "@/constants";

export default function DialogPage() {
  const dialogDemo = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <Header
        title="Dialog"
        description="O elemento &lt;dialog&gt; é uma forma nativa de criar modais e pop-ups no HTML."
      />

      <Document.Root>
        <Document.Heading2>Principais Características</Document.Heading2>

        <Document.List>
          {DIALOG_CARACTERS.map((character) => (
            <Document.ListItem key={character.title}>
              <Document.Dot />
              <span>{character.description}</span>
            </Document.ListItem>
          ))}
        </Document.List>

        <Document.Heading2>Métodos JavaScript</Document.Heading2>

        <Document.BlockquoteContainer>
          {DIALOG_METHODS.map((method) => (
            <Document.Blockquote key={method.title}>
              <Document.Code>{method.title}</Document.Code>
              <Document.Paragraph>{method.description}</Document.Paragraph>
            </Document.Blockquote>
          ))}
        </Document.BlockquoteContainer>

        <Document.Heading2>Código</Document.Heading2>

        <pre className="text-sm text-gray-800 p-4 mb-6 max-w-2xl bg-gray-50 rounded-lg border border-gray-200 overflow-x-auto">
          {DIALOG_CODE}
        </pre>

        <Document.Heading2>Demonstração</Document.Heading2>

        <Document.Paragraph>
          Clique no botão abaixo para ver o{" "}
          <Document.Code>&lt;dialog&gt;</Document.Code> em ação. Experimente
          fechá-lo com a tecla ESC ou clicando nos botões.
        </Document.Paragraph>

        <Button onClick={() => dialogDemo.current?.showModal()}>
          Abrir Dialog
        </Button>

        <dialog
          ref={dialogDemo}
          className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-2xl p-0 shadow-2xl max-w-md w-full m-auto"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              🎉 Dialog Nativo do HTML!
            </h3>
            <p className="text-gray-600 mb-6">
              Este modal foi criado apenas com HTML e CSS. Sem bibliotecas, sem
              JavaScript complexo. O backdrop, animação e acessibilidade vêm de
              graça!
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => dialogDemo.current?.close()}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={() => dialogDemo.current?.close("confirmed")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Confirmar
              </button>
            </div>
          </div>
        </dialog>
      </Document.Root>
    </div>
  );
}
