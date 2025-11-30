"use client";

import { useRef } from "react";

import { Button, Document } from "@/components";

export const DialogDemo = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();
  const confirmDialog = () => dialogRef.current?.close("confirmed");

  return (
    <>
      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Clique no botão abaixo para ver o{" "}
        <Document.Code>&lt;dialog&gt;</Document.Code> em ação. Experimente
        fechá-lo com a tecla ESC ou clicando nos botões.
      </Document.Paragraph>

      <Button onClick={openDialog}>Abrir Dialog</Button>

      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-2xl p-0 shadow-2xl max-w-md w-full m-auto"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div className="p-6">
          <h3
            id="dialog-title"
            className="text-xl font-bold text-gray-800 mb-2"
          >
            🎉 Dialog Nativo do HTML!
          </h3>
          <p id="dialog-description" className="text-gray-600 mb-6">
            Este modal foi criado apenas com HTML e CSS. Sem bibliotecas, sem
            JavaScript complexo. O backdrop, animação e acessibilidade vêm de
            graça!
          </p>
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={closeDialog}>
              Cancelar
            </Button>
            <Button onClick={confirmDialog}>Confirmar</Button>
          </div>
        </div>
      </dialog>
    </>
  );
};
