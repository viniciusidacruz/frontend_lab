export const DETAILS_CHARACTERISTICS = [
  {
    title: "Zero JavaScript",
    description:
      "Funciona nativamente sem necessidade de código JavaScript para abrir/fechar",
  },
  {
    title: "Acessibilidade integrada",
    description:
      "Suporte nativo a leitores de tela e navegação por teclado",
  },
  {
    title: "Estado persistente",
    description:
      "O navegador mantém o estado aberto/fechado automaticamente",
  },
  {
    title: "Estilização flexível",
    description:
      "Personalize com CSS usando o seletor [open] e o pseudo-elemento ::marker",
  },
];

export const DETAILS_ATTRIBUTES = [
  {
    title: "open",
    description:
      "Atributo booleano que define se o conteúdo está visível. Pode ser controlado via JavaScript",
  },
  {
    title: "name",
    description:
      "Agrupa múltiplos details para comportamento de accordion (apenas um aberto por vez)",
  },
];

export const DETAILS_CODE_REACT = `export default function AccordionExample() {
  return (
    <div>
      <details>
        <summary>Pergunta 1: O que é Frontend Lab?</summary>
        <p>É uma plataforma de estudos sobre recursos nativos do navegador.</p>
      </details>

      <details>
        <summary>Pergunta 2: Preciso de JavaScript?</summary>
        <p>Não! O details funciona 100% com HTML puro.</p>
      </details>

      {/* Accordion com name - apenas um aberto por vez */}
      <details name="faq">
        <summary>Grupo 1</summary>
        <p>Conteúdo do grupo 1</p>
      </details>

      <details name="faq">
        <summary>Grupo 2</summary>
        <p>Conteúdo do grupo 2</p>
      </details>
    </div>
  );
}`;

export const DETAILS_CODE_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Details HTML Nativo</title>
  <style>
    details {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 8px;
    }

    details[open] {
      background: #f9f9f9;
    }

    summary {
      cursor: pointer;
      font-weight: 600;
      list-style: none;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::before {
      content: "▶ ";
      display: inline-block;
      transition: transform 0.2s;
    }

    details[open] summary::before {
      transform: rotate(90deg);
    }

    details p {
      margin-top: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <details>
    <summary>Pergunta 1: O que é Frontend Lab?</summary>
    <p>É uma plataforma de estudos sobre recursos nativos.</p>
  </details>

  <details>
    <summary>Pergunta 2: Preciso de JavaScript?</summary>
    <p>Não! O details funciona 100% com HTML puro.</p>
  </details>

  <!-- Accordion com name - apenas um aberto por vez -->
  <details name="faq">
    <summary>Grupo 1</summary>
    <p>Conteúdo do grupo 1</p>
  </details>

  <details name="faq">
    <summary>Grupo 2</summary>
    <p>Conteúdo do grupo 2</p>
  </details>
</body>
</html>`;

