"use client";

import { useState } from "react";

import { Document } from "@/components";

import {
  DETAILS_CHARACTERISTICS,
  DETAILS_ATTRIBUTES,
  DETAILS_CODE_REACT,
  DETAILS_CODE_HTML,
  Language,
} from "@/constants";

import { DetailsDemo } from "./components";

export default function DetailsPage() {
  const [language, setLanguage] = useState<Language>(Language.REACT);

  const isHTML = language === Language.HTML;

  return (
    <Document.Root>
      <Document.Heading2>Principais Características</Document.Heading2>

      <Document.List>
        {DETAILS_CHARACTERISTICS.map((characteristic) => (
          <Document.ListItem key={characteristic.title}>
            <Document.Dot />
            <span>{characteristic.description}</span>
          </Document.ListItem>
        ))}
      </Document.List>

      <Document.Heading2>Atributos</Document.Heading2>

      <Document.BlockquoteContainer>
        {DETAILS_ATTRIBUTES.map((attr) => (
          <Document.Blockquote key={attr.title}>
            <Document.Code>{attr.title}</Document.Code>
            <Document.Paragraph>{attr.description}</Document.Paragraph>
          </Document.Blockquote>
        ))}
      </Document.BlockquoteContainer>

      <Document.Heading2>Como Funciona</Document.Heading2>

      <Document.Paragraph>
        O elemento <Document.Code>&lt;details&gt;</Document.Code> é um container
        que pode ser expandido ou recolhido. Ele deve conter um elemento{" "}
        <Document.Code>&lt;summary&gt;</Document.Code> que serve como título
        clicável.
      </Document.Paragraph>

      <Document.BlockquoteContainer>
        <Document.Blockquote>
          <Document.Code>&lt;summary&gt;</Document.Code>
          <Document.Paragraph>
            Define o título visível do accordion. É o elemento clicável que
            expande/recolhe o conteúdo. Sempre deve ser o primeiro filho de
            details.
          </Document.Paragraph>
        </Document.Blockquote>

        <Document.Blockquote>
          <Document.Code>Atributo name</Document.Code>
          <Document.Paragraph>
            Quando múltiplos details possuem o mesmo valor no atributo name,
            eles funcionam como um accordion exclusivo: abrir um fecha os outros
            automaticamente.
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

      <Document.Pre>{isHTML ? DETAILS_CODE_HTML : DETAILS_CODE_REACT}</Document.Pre>

      <DetailsDemo />
    </Document.Root>
  );
}

