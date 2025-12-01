import {
  DATALIST_ATTRIBUTES,
  DATALIST_CHARACTERISTICS,
  DATALIST_CODE_HTML,
  DATALIST_CODE_REACT,
  DETAILS_ATTRIBUTES,
  DETAILS_CHARACTERISTICS,
  DETAILS_CODE_HTML,
  DETAILS_CODE_REACT,
  DIALOG_CHARACTERISTICS,
  DIALOG_CODE_HTML,
  DIALOG_CODE_REACT,
  DIALOG_METHODS,
  PICTURE_CHARACTERISTICS,
  PICTURE_CODE_HTML,
  PICTURE_CODE_REACT,
  PICTURE_ELEMENTS,
  TEMPLATE_CHARACTERISTICS,
  TEMPLATE_CODE_HTML,
  TEMPLATE_CODE_REACT,
  TEMPLATE_METHODS,
} from "@/modules/categories/constants";

import { code, text, toRichText } from "./rich-text";
import { ContentCategoryConfig } from "../types/content";

export const HTML_CATEGORY: ContentCategoryConfig = {
  slug: "html",
  title: "HTML",
  items: [
    {
      slug: "dialog",
      category: "html",
      title: "Dialog",
      shortLabel: "Di",
      description:
        "O elemento <dialog> é uma forma nativa de criar modais e pop-ups no HTML.",
      characteristics: DIALOG_CHARACTERISTICS.map((item) => ({
        title: item.title,
        description: toRichText(item.description),
      })),
      infoSection: {
        title: "Métodos JavaScript",
        items: DIALOG_METHODS.map((item) => ({
          title: item.title,
          description: toRichText(item.description),
        })),
      },
      howItWorks: [
        text("Para utilizar os métodos nativos do "),
        code("<dialog>"),
        text(
          ", você precisa ter uma referência ao elemento. A forma de obter essa referência varia dependendo do ambiente:"
        ),
      ],
      insights: [
        {
          title: "HTML - Usando id",
          description: [
            text("No HTML puro, basta adicionar um "),
            code("id"),
            text(
              " ao elemento. O navegador cria automaticamente uma variável global com o mesmo nome, permitindo acessar diretamente: "
            ),
            code("meuDialog.showModal()"),
          ],
        },
        {
          title: "React - Usando useRef",
          description: [
            text("No React, usamos o hook "),
            code("useRef"),
            text(" para criar uma referência e a passamos via prop "),
            code("ref"),
            text(". Acessamos o elemento através de "),
            code("dialogRef.current?.showModal()"),
          ],
        },
      ],
      code: {
        html: DIALOG_CODE_HTML,
        react: DIALOG_CODE_REACT,
      },
    },
    {
      slug: "details",
      category: "html",
      title: "Details",
      shortLabel: "De",
      description:
        "O elemento <details> cria accordions e seções expansíveis sem necessidade de JavaScript.",
      characteristics: DETAILS_CHARACTERISTICS.map((item) => ({
        title: item.title,
        description: toRichText(item.description),
      })),
      infoSection: {
        title: "Atributos",
        items: DETAILS_ATTRIBUTES.map((item) => ({
          title: item.title,
          description: toRichText(item.description),
        })),
      },
      howItWorks: [
        text("O elemento "),
        code("<details>"),
        text(
          " é um container que pode ser expandido ou recolhido. Ele deve conter um elemento "
        ),
        code("<summary>"),
        text(" que serve como título clicável."),
      ],
      insights: [
        {
          title: "<summary>",
          description: [
            text(
              "Define o título visível do accordion. É o elemento clicável que expande/recolhe o conteúdo. Sempre deve ser o primeiro filho de details."
            ),
          ],
        },
        {
          title: "Atributo name",
          description: [
            text(
              "Quando múltiplos details possuem o mesmo valor no atributo name, eles funcionam como um accordion exclusivo: abrir um fecha os outros automaticamente."
            ),
          ],
        },
      ],
      code: {
        html: DETAILS_CODE_HTML,
        react: DETAILS_CODE_REACT,
      },
    },
    {
      slug: "datalist",
      category: "html",
      title: "Datalist",
      shortLabel: "Da",
      description:
        "O elemento <datalist> fornece sugestões de autocomplete para inputs sem necessidade de JavaScript.",
      characteristics: DATALIST_CHARACTERISTICS.map((item) => ({
        title: item.title,
        description: toRichText(item.description),
      })),
      infoSection: {
        title: "Atributos",
        items: DATALIST_ATTRIBUTES.map((item) => ({
          title: item.title,
          description: toRichText(item.description),
        })),
      },
      howItWorks: [
        text("O "),
        code("<datalist>"),
        text(" é conectado a um input através do atributo "),
        code("list"),
        text(
          ". As opções dentro do datalist são sugeridas ao usuário conforme ele digita."
        ),
      ],
      insights: [
        {
          title: "Conexão input + datalist",
          description: [
            text("O input precisa ter o atributo "),
            code('list="id-do-datalist"'),
            text(" e o datalist precisa ter o "),
            code("id"),
            text(" correspondente."),
          ],
        },
        {
          title: "Tipos compatíveis",
          description: [
            text(
              "Funciona com diversos tipos de input: text, search, url, email, tel, number, range e até color!"
            ),
          ],
        },
      ],
      code: {
        html: DATALIST_CODE_HTML,
        react: DATALIST_CODE_REACT,
      },
    },
    {
      slug: "template",
      category: "html",
      title: "Template",
      shortLabel: "Te",
      description:
        "O elemento <template> define fragmentos de HTML que não são renderizados até serem clonados via JavaScript.",
      characteristics: TEMPLATE_CHARACTERISTICS.map((item) => ({
        title: item.title,
        description: toRichText(item.description),
      })),
      infoSection: {
        title: "Métodos e Propriedades",
        items: TEMPLATE_METHODS.map((item) => ({
          title: item.title,
          description: toRichText(item.description),
        })),
      },
      howItWorks: [
        text("O elemento "),
        code("<template>"),
        text(
          " armazena conteúdo HTML que não é exibido na página. Para usar o conteúdo, você precisa cloná-lo e inserí-lo no DOM via JavaScript."
        ),
      ],
      insights: [
        {
          title: "Conteúdo inerte",
          description: [
            text(
              "Scripts não executam, imagens não carregam, estilos não aplicam até o template ser clonado e inserido no documento."
            ),
          ],
        },
        {
          title: "Casos de uso",
          description: [
            text(
              "Ideal para listas dinâmicas, cards repetitivos, linhas de tabela e qualquer conteúdo que precisa ser criado múltiplas vezes."
            ),
          ],
        },
      ],
      code: {
        html: TEMPLATE_CODE_HTML,
        react: TEMPLATE_CODE_REACT,
      },
    },
    {
      slug: "picture",
      category: "html",
      title: "Picture",
      shortLabel: "Pi",
      description:
        "O elemento <picture> permite servir imagens diferentes baseado em media queries, formato e resolução.",
      characteristics: PICTURE_CHARACTERISTICS.map((item) => ({
        title: item.title,
        description: toRichText(item.description),
      })),
      infoSection: {
        title: "Elementos Filhos",
        items: PICTURE_ELEMENTS.map((item) => ({
          title: item.title,
          description: toRichText(item.description),
        })),
      },
      howItWorks: [
        text("O "),
        code("<picture>"),
        text(" contém múltiplos "),
        code("<source>"),
        text(" e um "),
        code("<img>"),
        text(
          " obrigatório. O navegador avalia as condições de cada source de cima para baixo e usa a primeira que corresponder."
        ),
      ],
      insights: [
        {
          title: "Media Queries",
          description: [
            text("Use o atributo "),
            code("media"),
            text(
              " para servir imagens diferentes baseado no tamanho da viewport: "
            ),
            code('media="(min-width: 768px)"'),
          ],
        },
        {
          title: "Formatos de Imagem",
          description: [
            text("Use o atributo "),
            code("type"),
            text(" para formatos modernos com fallback: "),
            code('type="image/webp"'),
          ],
        },
      ],
      code: {
        html: PICTURE_CODE_HTML,
        react: PICTURE_CODE_REACT,
      },
    },
  ],
};
