import Link from "next/link";
import Image from "next/image";
import { ExternalLink, User } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-8">
      <div className="text-center max-w-2xl">
        <Image
          src="/logo-large.svg"
          alt="Frontend Lab"
          width={120}
          height={120}
          className="drop-shadow-2xl mx-auto mb-8"
        />

        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
          Frontend Lab
        </h1>

        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
          Um repositório de estudos e experimentos com{" "}
          <span className="text-orange-400 font-semibold">HTML</span>,{" "}
          <span className="text-yellow-400 font-semibold">JavaScript</span> e{" "}
          <span className="text-cyan-400 font-semibold">React</span>. Criado
          para compartilhar conhecimento e facilitar o dia a dia de
          desenvolvedores frontend.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Link
            href="https://github.com/viniciusidacruz"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-300 text-sm transition-colors border border-zinc-700"
          >
            <User className="w-4 h-4" />
            Autor
          </Link>

          <Link
            href="https://github.com/viniciusidacruz/frontend_lab"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg text-white text-sm font-medium transition-all"
          >
            <Image src="/github.svg" alt="GitHub" width={16} height={16} />
            Repositório
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
            <div className="text-2xl mb-1">🏷️</div>
            <div className="text-sm text-zinc-400">HTML</div>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-sm text-zinc-400">JavaScript</div>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
            <div className="text-2xl mb-1">⚛️</div>
            <div className="text-sm text-zinc-400">React</div>
          </div>
        </div>
      </div>
    </div>
  );
}
