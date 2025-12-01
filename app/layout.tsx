import { Poppins } from "next/font/google";

import { Aside } from "@/shared/components";
import { Providers } from "@/shared/providers";
import { DEFAULT_METADATA, createMetadata, AUTHOR } from "@/shared/constants";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  ...createMetadata({
    title: DEFAULT_METADATA.title,
    description: DEFAULT_METADATA.description,
    url: DEFAULT_METADATA.url,
  }),
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
      name: AUTHOR.name,
      url: AUTHOR.github,
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
