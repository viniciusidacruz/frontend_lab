export const TEMPLATE_CHARACTERISTICS = [
  {
    title: "Conteúdo inerte",
    description:
      "O conteúdo dentro do template não é renderizado até ser clonado",
  },
  {
    title: "Reutilizável",
    description:
      "Permite criar estruturas HTML que podem ser clonadas múltiplas vezes",
  },
  {
    title: "Performance",
    description:
      "Elementos dentro do template não carregam recursos (imagens, scripts) até serem usados",
  },
  {
    title: "DOM limpo",
    description:
      "Mantém o HTML organizado separando estrutura de conteúdo dinâmico",
  },
];

export const TEMPLATE_METHODS = [
  {
    title: "template.content",
    description:
      "Retorna um DocumentFragment com o conteúdo do template para clonagem",
  },
  {
    title: "cloneNode(true)",
    description:
      "Cria uma cópia profunda do conteúdo do template para inserção no DOM",
  },
];

export const TEMPLATE_CODE_REACT = `import { useRef } from "react";

export default function TemplateExample() {
  const templateRef = useRef<HTMLTemplateElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const addCard = () => {
    if (!templateRef.current || !containerRef.current) return;
    
    const clone = templateRef.current.content.cloneNode(true);
    containerRef.current.appendChild(clone);
  };

  return (
    <div>
      <template ref={templateRef}>
        <div className="card">
          <h3>Novo Card</h3>
          <p>Este card foi criado a partir de um template.</p>
        </div>
      </template>

      <button onClick={addCard}>Adicionar Card</button>
      
      <div ref={containerRef} className="cards-container" />
    </div>
  );
}`;

export const TEMPLATE_CODE_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Template HTML Nativo</title>
  <style>
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin: 8px 0;
      background: #f9f9f9;
    }

    .card h3 {
      margin: 0 0 8px;
      color: #333;
    }

    .card p {
      margin: 0;
      color: #666;
    }

    button {
      padding: 12px 24px;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-bottom: 16px;
    }

    button:hover {
      background: #1d4ed8;
    }
  </style>
</head>
<body>
  <template id="card-template">
    <div class="card">
      <h3>Novo Card</h3>
      <p>Este card foi criado a partir de um template.</p>
    </div>
  </template>

  <button onclick="addCard()">Adicionar Card</button>
  
  <div id="cards-container"></div>

  <script>
    function addCard() {
      const template = document.getElementById('card-template');
      const container = document.getElementById('cards-container');
      
      const clone = template.content.cloneNode(true);
      container.appendChild(clone);
    }
  </script>
</body>
</html>`;

