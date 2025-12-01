import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const PostFooter = () => (
  <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800">
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg transition-colors"
    >
      <ArrowLeft size={16} />
      Ver todos os artigos
    </Link>
  </footer>
);

