import { Metadata } from "next";

import { SubHeader } from "@/shared/components";

export const metadata: Metadata = {
  title: "Dialog | Frontend Lab",
  description:
    "O elemento &lt;dialog&gt; é uma forma nativa de criar modais e pop-ups no HTML.",
};

export default function DialogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SubHeader
        title="Dialog"
        description="O elemento &lt;dialog&gt; é uma forma nativa de criar modais e pop-ups no HTML."
      />
      {children}
    </div>
  );
}
