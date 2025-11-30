import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Aside } from "@/components";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Frontend Lab | Estudos de Vinicius Italo da Cruz",
  description: "Frontend Lab| Estudos de Vinicius Italo da Cruz",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["HTML", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  authors: [
    {
      name: "Vinicius Italo da Cruz",
      url: "https://github.com/viniciusidacruz",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased flex h-screen`}>
        <Aside />

        <main className="flex-1 h-full overflow-y-auto p-8">{children}</main>
      </body>
    </html>
  );
}
