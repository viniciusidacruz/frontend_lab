"use client";

import { useRef, useState } from "react";

import { Button, Document } from "@/components";

export const TemplateDemo = () => {
  const templateRef = useRef<HTMLTemplateElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  const addCard = () => {
    if (!templateRef.current || !containerRef.current) return;

    const clone = templateRef.current.content.cloneNode(true) as DocumentFragment;
    const card = clone.querySelector(".card");
    const title = clone.querySelector("h4");

    if (title) {
      title.textContent = `Card ${count + 1}`;
    }

    if (card) {
      card.id = `card-${count}`;
    }

    containerRef.current.appendChild(clone);
    setCount((prev) => prev + 1);
  };

  const clearCards = () => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      setCount(0);
    }
  };

  return (
    <>
      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Clique no botão para criar novos cards a partir do template. O conteúdo
        do template é clonado e inserido no DOM dinamicamente.
      </Document.Paragraph>

      <template ref={templateRef}>
        <div className="card border border-zinc-700 rounded-lg p-4 bg-zinc-800/50 mb-3">
          <h4 className="text-zinc-100 font-semibold mb-2">Novo Card</h4>
          <p className="text-zinc-400 text-sm">
            Este card foi criado a partir de um template HTML nativo.
          </p>
        </div>
      </template>

      <div className="flex gap-3 mb-6">
        <Button onClick={addCard}>Adicionar Card</Button>
        <Button variant="secondary" onClick={clearCards}>
          Limpar
        </Button>
      </div>

      <div className="max-w-md">
        <p className="text-zinc-500 text-sm mb-3">
          Cards criados: {count}
        </p>
        <div ref={containerRef} className="space-y-3" />
      </div>
    </>
  );
};

