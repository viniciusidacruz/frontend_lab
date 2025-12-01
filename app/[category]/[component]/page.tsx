import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentRenderer } from "./ContentRenderer";
import { getContentDefinition } from "@/shared/content";

type PageProps = {
  params: {
    category: string;
    component: string;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const content = getContentDefinition(params.category, params.component);

  if (!content) {
    return {};
  }

  return {
    title: `${content.title} | Frontend Lab`,
    description: content.description,
  };
}

export default function Page({ params }: PageProps) {
  const content = getContentDefinition(params.category, params.component);

  if (!content) {
    notFound();
  }

  return <ContentRenderer content={content} />;
}
