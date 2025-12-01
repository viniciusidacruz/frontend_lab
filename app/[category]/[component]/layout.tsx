import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { SubHeader } from "@/shared/components";
import { getContentDefinition } from "@/shared/content";

type LayoutProps = {
  children: ReactNode;
  params: {
    category: string;
    component: string;
  };
};

export default function ContentLayout({ children, params }: LayoutProps) {
  const content = getContentDefinition(params.category, params.component);

  if (!content) {
    notFound();
  }

  return (
    <div>
      <SubHeader title={content.title} description={content.description} />
      {children}
    </div>
  );
}
