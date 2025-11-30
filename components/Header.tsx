import { Undo2 } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  description: string;
  backLink?: string;
}

export const Header = ({
  title,
  description,
  backLink,
}: Readonly<HeaderProps>) => (
  <header>
    {backLink && (
      <Link href={backLink}>
        <Undo2 />
      </Link>
    )}

    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>

    <p className="mt-4 text-lg text-gray-600 max-w-2xl">{description}</p>
  </header>
);
