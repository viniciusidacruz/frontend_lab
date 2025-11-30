"use client";

import { useState } from "react";

import { Document } from "@/components";

import {
  DIALOG_CHARACTERISTICS,
  DIALOG_METHODS,
  DIALOG_CODE_REACT,
  DIALOG_CODE_HTML,
  Language,
} from "@/constants";

import { DialogDemo } from "./components";

export default function DialogPage() {
  const [language, setLanguage] = useState<Language>(Language.REACT);

  const isHTML = language === Language.HTML;

  return (
    <Document.Root>
      <Document.Heading2>Principais Características</Document.Heading2>

      <Document.List>
        {DIALOG_CHARACTERISTICS.map((characteristic) => (
          <Document.ListItem key={characteristic.title}>
            <Document.Dot />
            <span>{characteristic.description}</span>
          </Document.ListItem>
        ))}
      </Document.List>

      <Document.Heading2>Métodos JavaScript</Document.Heading2>

      <Document.BlockquoteContainer>
        {DIALOG_METHODS.map((method) => (
          <Document.Blockquote key={method.title}>
            <Document.Code>{method.title}</Document.Code>
            <Document.Paragraph>{method.description}</Document.Paragraph>
          </Document.Blockquote>
        ))}
      </Document.BlockquoteContainer>

      <Document.Heading2>Como Funciona</Document.Heading2>

      <Document.Paragraph>
        Para utilizar os métodos nativos do{" "}
        <Document.Code>&lt;dialog&gt;</Document.Code>, você precisa ter uma
        referência ao elemento. A forma de obter essa referência varia
        dependendo do ambiente:
      </Document.Paragraph>

      <Document.BlockquoteContainer>
        <Document.Blockquote>
          <Document.Code>HTML - Usando id</Document.Code>
          <Document.Paragraph>
            No HTML puro, basta adicionar um <Document.Code>id</Document.Code>{" "}
            ao elemento. O navegador cria automaticamente uma variável global
            com o mesmo nome, permitindo acessar diretamente:{" "}
            <Document.Code>meuDialog.showModal()</Document.Code>
          </Document.Paragraph>
        </Document.Blockquote>

        <Document.Blockquote>
          <Document.Code>React - Usando useRef</Document.Code>
          <Document.Paragraph>
            No React, usamos o hook <Document.Code>useRef</Document.Code> para
            criar uma referência e a passamos via prop{" "}
            <Document.Code>ref</Document.Code>. Acessamos o elemento através de{" "}
            <Document.Code>dialogRef.current?.showModal()</Document.Code>
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
        {isHTML ? DIALOG_CODE_HTML : DIALOG_CODE_REACT}
      </Document.Pre>

      <DialogDemo />
    </Document.Root>
  );
}
