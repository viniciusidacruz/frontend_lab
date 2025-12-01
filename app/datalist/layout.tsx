import { Metadata } from "next";

import { SubHeader } from "@/shared/components";

export const metadata: Metadata = {
  title: "Datalist | Frontend Lab",
  description: "O elemento <datalist> cria autocomplete nativo para inputs.",
};

export default function DatalistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SubHeader
        title="Datalist"
        description="O elemento <datalist> fornece sugestões de autocomplete para inputs sem necessidade de JavaScript."
      />
      {children}
    </div>
  );
}
