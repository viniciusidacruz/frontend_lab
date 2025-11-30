"use client";

import { useState } from "react";

import { Document } from "@/components";

import {
  DATALIST_CHARACTERISTICS,
  DATALIST_ATTRIBUTES,
  DATALIST_CODE_REACT,
  DATALIST_CODE_HTML,
  Language,
} from "@/constants";

import { DatalistDemo } from "./components";

export default function DatalistPage() {
  const [language, setLanguage] = useState<Language>(Language.REACT);

  const isHTML = language === Language.HTML;

  return (
    <Document.Root>
      <Document.Heading2>Principais Características</Document.Heading2>

      <Document.List>
        {DATALIST_CHARACTERISTICS.map((characteristic) => (
          <Document.ListItem key={characteristic.title}>
            <Document.Dot />
            <span>{characteristic.description}</span>
          </Document.ListItem>
        ))}
      </Document.List>

      <Document.Heading2>Atributos</Document.Heading2>

      <Document.BlockquoteContainer>
        {DATALIST_ATTRIBUTES.map((attr) => (
          <Document.Blockquote key={attr.title}>
            <Document.Code>{attr.title}</Document.Code>
            <Document.Paragraph>{attr.description}</Document.Paragraph>
          </Document.Blockquote>
        ))}
      </Document.BlockquoteContainer>

      <Document.Heading2>Como Funciona</Document.Heading2>

      <Document.Paragraph>
        O <Document.Code>&lt;datalist&gt;</Document.Code> é conectado a um input
        através do atributo <Document.Code>list</Document.Code>. As opções
        dentro do datalist são sugeridas ao usuário conforme ele digita.
      </Document.Paragraph>

      <Document.BlockquoteContainer>
        <Document.Blockquote>
          <Document.Code>Conexão input + datalist</Document.Code>
          <Document.Paragraph>
            O input precisa ter o atributo{" "}
            <Document.Code>list=&quot;id-do-datalist&quot;</Document.Code> e o
            datalist precisa ter o <Document.Code>id</Document.Code>{" "}
            correspondente.
          </Document.Paragraph>
        </Document.Blockquote>

        <Document.Blockquote>
          <Document.Code>Tipos compatíveis</Document.Code>
          <Document.Paragraph>
            Funciona com diversos tipos de input: text, search, url, email, tel,
            number, range e até color!
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

      <Document.Pre>
        {isHTML ? DATALIST_CODE_HTML : DATALIST_CODE_REACT}
      </Document.Pre>

      <DatalistDemo />
    </Document.Root>
  );
}
