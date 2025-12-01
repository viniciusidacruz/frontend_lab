import { Metadata } from "next";

import { SubHeader } from "@/shared/components";

export const metadata: Metadata = {
  title: "Template | Frontend Lab",
  description:
    "O elemento <template> permite criar estruturas HTML reutilizáveis.",
};

export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SubHeader
        title="Template"
        description="O elemento <template> define fragmentos de HTML que não são renderizados até serem clonados via JavaScript."
      />
      {children}
    </div>
  );
}
