"use client";

import { useState } from "react";

import { Document } from "@/components";

import {
  PICTURE_CHARACTERISTICS,
  PICTURE_ELEMENTS,
  PICTURE_CODE_REACT,
  PICTURE_CODE_HTML,
  Language,
} from "@/constants";

import { PictureDemo } from "./components";

export default function PicturePage() {
  const [language, setLanguage] = useState<Language>(Language.REACT);

  const isHTML = language === Language.HTML;

  return (
    <Document.Root>
      <Document.Heading2>Principais Características</Document.Heading2>

      <Document.List>
        {PICTURE_CHARACTERISTICS.map((characteristic) => (
          <Document.ListItem key={characteristic.title}>
            <Document.Dot />
            <span>{characteristic.description}</span>
          </Document.ListItem>
        ))}
      </Document.List>

      <Document.Heading2>Elementos Filhos</Document.Heading2>

      <Document.BlockquoteContainer>
        {PICTURE_ELEMENTS.map((element) => (
          <Document.Blockquote key={element.title}>
            <Document.Code>{element.title}</Document.Code>
            <Document.Paragraph>{element.description}</Document.Paragraph>
          </Document.Blockquote>
        ))}
      </Document.BlockquoteContainer>

      <Document.Heading2>Como Funciona</Document.Heading2>

      <Document.Paragraph>
        O <Document.Code>&lt;picture&gt;</Document.Code> contém múltiplos{" "}
        <Document.Code>&lt;source&gt;</Document.Code> e um{" "}
        <Document.Code>&lt;img&gt;</Document.Code> obrigatório. O navegador
        avalia as condições de cada source de cima para baixo e usa a primeira
        que corresponder.
      </Document.Paragraph>

      <Document.BlockquoteContainer>
        <Document.Blockquote>
          <Document.Code>Media Queries</Document.Code>
          <Document.Paragraph>
            Use o atributo <Document.Code>media</Document.Code> para servir
            imagens diferentes baseado no tamanho da viewport:{" "}
            <Document.Code>media=&quot;(min-width: 768px)&quot;</Document.Code>
          </Document.Paragraph>
        </Document.Blockquote>

        <Document.Blockquote>
          <Document.Code>Formatos de Imagem</Document.Code>
          <Document.Paragraph>
            Use o atributo <Document.Code>type</Document.Code> para formatos
            modernos com fallback:{" "}
            <Document.Code>type=&quot;image/webp&quot;</Document.Code>
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

      <Document.Pre>{isHTML ? PICTURE_CODE_HTML : PICTURE_CODE_REACT}</Document.Pre>

      <PictureDemo />
    </Document.Root>
  );
}

