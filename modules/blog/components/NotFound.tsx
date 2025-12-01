import Link from "next/link";
import { FileX, ArrowLeft } from "lucide-react";

export const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
    <FileX size={48} className="text-zinc-600 mb-4" />
    <h1 className="text-2xl font-bold text-zinc-100 mb-2">
      Artigo não encontrado
    </h1>
    <p className="text-zinc-500 mb-6">
      O artigo que você está procurando não existe ou foi removido.
    </p>
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg transition-all"
    >
      <ArrowLeft size={16} />
      Voltar para o blog
    </Link>
  </div>
);

