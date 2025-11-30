import { Metadata } from "next";

import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Picture | Frontend Lab",
  description:
    "O elemento <picture> permite servir imagens responsivas e otimizadas.",
};

export default function PictureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header
        title="Picture"
        description="O elemento <picture> permite servir imagens diferentes baseado em media queries, formato e resolução."
      />
      {children}
    </div>
  );
}

