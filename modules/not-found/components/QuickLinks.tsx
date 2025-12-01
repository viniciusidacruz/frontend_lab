import Link from "next/link";

interface QuickLink {
  href: string;
  label: string;
}

interface QuickLinksProps {
  links: QuickLink[];
}

export const QuickLinks = ({ links }: QuickLinksProps) => (
  <div className="mt-12 pt-8 border-t border-zinc-800">
    <p className="text-sm text-zinc-500 mb-4">
      Você também pode estar procurando por:
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((link, index) => (
        <div key={link.href} className="flex items-center gap-3">
          {index > 0 && <span className="text-zinc-700">•</span>}
          <Link
            href={link.href}
            className="text-sm text-zinc-400 hover:text-blue-400 transition-colors px-3 py-1.5 rounded-md hover:bg-zinc-900/50"
          >
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

