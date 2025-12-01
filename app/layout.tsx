import { Poppins } from "next/font/google";

import { Aside } from "@/shared/components";
import { Providers } from "@/shared/providers";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Frontend Lab | Estudos de Vinicius Italo da Cruz",
  description:
    "Laboratório de estudos e experimentos focado em recursos nativos, arquiteturas e boas práticas para desenvolvedores frontend.",
  icons: {
    icon: "/assets/svg/logo-collapsed.svg",
    apple: "/assets/svg/logo-collapsed.svg",
  },
  keywords: [
    "HTML",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Frontend",
    "Desenvolvimento Web",
    "Arquitetura de Software",
  ],
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
      <body className={`${poppins.variable} antialiased flex min-h-screen`}>
        <Providers>
          <Aside />

          <main className="flex-1 p-4 sm:p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
