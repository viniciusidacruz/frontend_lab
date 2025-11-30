export const DIALOG_CARACTERS = [
  {
    title: "Acessibilidade nativa",
    description: "Gerencia foco automaticamente e suporta leitores de tela",
  },
  {
    title: "Backdrop integrado",
    description: "Estilize o fundo com o pseudo-elemento ::backdrop",
  },
  {
    title: "Fechamento com ESC",
    description: "Usuários podem fechar o modal pressionando a tecla Escape",
  },
  {
    title: "Top Layer",
    description:
      "O modal fica acima de todo o conteúdo, sem problemas de z-index",
  },
];

export const DIALOG_METHODS = [
  {
    title: "showModal()",
    description:
      "Abre o dialog como modal, com backdrop e bloqueando interação externa",
  },
  {
    title: "show()",
    description:
      "Abre o dialog sem backdrop, permitindo interação com o resto da página",
  },
  {
    title: "close()",
    description:
      "Fecha o dialog. Pode receber um valor de retorno como parâmetro",
  },
];

export const DIALOG_CODE = `import { useRef } from "react";

export default function DialogExample() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button onClick={() => dialogRef.current?.showModal()}>
        Abrir Dialog
      </button>

      <dialog ref={dialogRef}>
        <h3>Título do Modal</h3>
        <p>Conteúdo do modal...</p>
        
        <div>
          <button onClick={() => dialogRef.current?.close()}>
            Cancelar
          </button>
          <button onClick={() => dialogRef.current?.close("confirmed")}>
            Confirmar
          </button>
        </div>
      </dialog>
    </>
  );
}`;
