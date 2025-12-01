"use client";

import { Fragment, useState } from "react";

import { Language } from "@/shared/constants";
import { Document, SubHeader } from "@/shared/components";
import { CONTENT_DEMOS } from "@/modules/categories/components";
import { ContentResource, RichText } from "@/modules/categories/types/content";

interface ContentRendererProps {
  readonly content: ContentResource;
}

const renderRichText = (content: RichText) =>
  content.map((segment, index) =>
    segment.type === "text" ? (
      <span key={`${segment.type}-${index}`}>{segment.value}</span>
    ) : (
      <Document.Code key={`${segment.type}-${index}`}>
        {segment.value}
      </Document.Code>
    )
  );

export const ContentRenderer = ({ content }: ContentRendererProps) => {
  const [language, setLanguage] = useState<Language>(Language.REACT);
  const Demo = CONTENT_DEMOS[content.slug];
  const isHTML = language === Language.HTML;

  return (
    <Fragment>
      <SubHeader title={content.title} description={content.description} />

      <Document.Root>
        <Document.Heading2>Principais Características</Document.Heading2>

        <Document.List>
          {content.characteristics.map((characteristic) => (
            <Document.ListItem key={characteristic.title}>
              <Document.Dot />
              <span>{renderRichText(characteristic.description)}</span>
            </Document.ListItem>
          ))}
        </Document.List>

        <Document.Heading2>{content.infoSection.title}</Document.Heading2>

        <Document.BlockquoteContainer>
          {content.infoSection.items.map((item) => (
            <Document.Blockquote key={item.title}>
              <Document.Code>{item.title}</Document.Code>
              <Document.Paragraph>
                {renderRichText(item.description)}
              </Document.Paragraph>
            </Document.Blockquote>
          ))}
        </Document.BlockquoteContainer>

        <Document.Heading2>Como Funciona</Document.Heading2>

        <Document.Paragraph>
          {renderRichText(content.howItWorks)}
        </Document.Paragraph>

        <Document.BlockquoteContainer>
          {content.insights.map((insight) => (
            <Document.Blockquote key={insight.title}>
              <Document.Code>{insight.title}</Document.Code>
              <Document.Paragraph>
                {renderRichText(insight.description)}
              </Document.Paragraph>
            </Document.Blockquote>
          ))}
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
          {isHTML ? content.code.html : content.code.react}
        </Document.Pre>

        <Demo />
      </Document.Root>
    </Fragment>
  );
};
