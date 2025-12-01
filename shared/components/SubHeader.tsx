import Link from "next/link";
import { Undo2 } from "lucide-react";

interface SubHeaderProps {
  title: string;
  description: string;
  backLink?: string;
}

export const SubHeader = ({
  title,
  description,
  backLink,
}: Readonly<SubHeaderProps>) => (
  <header>
    {backLink && (
      <Link href={backLink}>
        <Undo2 />
      </Link>
    )}

    <h1 className="text-4xl font-bold text-zinc-600">{title}</h1>

    <p className="mt-4 text-lg text-zinc-100 max-w-2xl">{description}</p>
  </header>
);
