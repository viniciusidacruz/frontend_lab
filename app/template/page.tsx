"use client";

import { useState } from "react";

import { Document } from "@/components";

import {
  TEMPLATE_CHARACTERISTICS,
  TEMPLATE_METHODS,
  TEMPLATE_CODE_REACT,
  TEMPLATE_CODE_HTML,
  Language,
} from "@/constants";

import { TemplateDemo } from "./components";

export default function TemplatePage() {
  const [language, setLanguage] = useState<Language>(Language.REACT);

  const isHTML = language === Language.HTML;

  return (
    <Document.Root>
      <Document.Heading2>Principais Características</Document.Heading2>

      <Document.List>
        {TEMPLATE_CHARACTERISTICS.map((characteristic) => (
          <Document.ListItem key={characteristic.title}>
            <Document.Dot />
            <span>{characteristic.description}</span>
          </Document.ListItem>
        ))}
      </Document.List>

      <Document.Heading2>Métodos e Propriedades</Document.Heading2>

      <Document.BlockquoteContainer>
        {TEMPLATE_METHODS.map((method) => (
          <Document.Blockquote key={method.title}>
            <Document.Code>{method.title}</Document.Code>
            <Document.Paragraph>{method.description}</Document.Paragraph>
          </Document.Blockquote>
        ))}
      </Document.BlockquoteContainer>

      <Document.Heading2>Como Funciona</Document.Heading2>

      <Document.Paragraph>
        O elemento <Document.Code>&lt;template&gt;</Document.Code> armazena
        conteúdo HTML que não é exibido na página. Para usar o conteúdo, você
        precisa cloná-lo e inserí-lo no DOM via JavaScript.
      </Document.Paragraph>

      <Document.BlockquoteContainer>
        <Document.Blockquote>
          <Document.Code>Conteúdo inerte</Document.Code>
          <Document.Paragraph>
            Scripts não executam, imagens não carregam, estilos não aplicam
            até o template ser clonado e inserido no documento.
          </Document.Paragraph>
        </Document.Blockquote>

        <Document.Blockquote>
          <Document.Code>Casos de uso</Document.Code>
          <Document.Paragraph>
            Ideal para listas dinâmicas, cards repetitivos, linhas de tabela e
            qualquer conteúdo que precisa ser criado múltiplas vezes.
          </Document.Paragraph>
        </Document.Blockquote>
      </Document.BlockquoteContainer>

      <div className="flex gap-2 items-center justify-between max-w-2xl">
        <Document.Heading2>Código</Document.Heading2>

        <div className="flex gap-6 items-center">
          <Document.IconLanguage
            language={Language.HTML}
            onClick={() => setLanguage(Language.HTML)}
            aria-label="Ver código HTML"
          />
          <Document.IconLanguage
            language={Language.REACT}
            onClick={() => setLanguage(Language.REACT)}
            aria-label="Ver código React"
          />
        </div>
      </div>

      <Document.Pre>{isHTML ? TEMPLATE_CODE_HTML : TEMPLATE_CODE_REACT}</Document.Pre>

      <TemplateDemo />
    </Document.Root>
  );
}

