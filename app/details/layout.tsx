import { Metadata } from "next";

import { SubHeader } from "@/shared/components";

export const metadata: Metadata = {
  title: "Details | Frontend Lab",
  description: "O elemento <details> cria accordions nativos sem JavaScript.",
};

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SubHeader
        title="Details"
        description="O elemento <details> cria accordions e seções expansíveis sem necessidade de JavaScript."
      />
      {children}
    </div>
  );
}
