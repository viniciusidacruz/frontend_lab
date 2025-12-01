export const DIALOG_CHARACTERISTICS = [
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

export const DIALOG_CODE_REACT = `import { Fragment, useRef } from "react";

export default function DialogExample() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Fragment>
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
    </Fragment>
  );
}`;

export const DIALOG_CODE_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Dialog HTML Nativo</title>
  <style>
    dialog {
      border: none;
      border-radius: 16px;
      padding: 24px;
      max-width: 400px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
    }

    dialog h3 {
      margin: 0 0 8px;
      font-size: 1.25rem;
    }

    dialog p {
      color: #666;
      margin-bottom: 24px;
    }

    .dialog-buttons {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .btn-cancel {
      padding: 8px 16px;
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .btn-confirm {
      padding: 8px 24px;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button onclick="meuDialog.showModal()">
    Abrir Dialog
  </button>

  <dialog id="meuDialog">
    <h3>🎉 Dialog Nativo!</h3>
    <p>Este modal usa apenas HTML e CSS puro, sem JavaScript complexo.</p>
    
    <div class="dialog-buttons">
      <button class="btn-cancel" onclick="meuDialog.close()">
        Cancelar
      </button>
      <button class="btn-confirm" onclick="meuDialog.close('confirmed')">
        Confirmar
      </button>
    </div>
  </dialog>
</body>
</html>`;
