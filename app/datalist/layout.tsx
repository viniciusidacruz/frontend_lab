import { Metadata } from "next";

import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Datalist | Frontend Lab",
  description:
    "O elemento <datalist> cria autocomplete nativo para inputs.",
};

export default function DatalistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header
        title="Datalist"
        description="O elemento <datalist> fornece sugestões de autocomplete para inputs sem necessidade de JavaScript."
      />
      {children}
    </div>
  );
}

