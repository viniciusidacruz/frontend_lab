import Link from "next/link";
import Image from "next/image";
import { ExternalLink, User } from "lucide-react";

import { ContentCard } from "@/shared/components";
import { AUTHOR, PROJECT } from "@/shared/constants";
import { getContentTopics } from "@/shared/queries";

export default async function Home() {
  const topics = await getContentTopics();

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <header className="text-center mb-16">
        <Image
          src={PROJECT.logo}
          alt={PROJECT.name}
          width={100}
          height={100}
          className="drop-shadow-2xl mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
          {PROJECT.name}
        </h1>

        <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          {PROJECT.description}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href={AUTHOR.github}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-300 text-sm transition-colors border border-zinc-700"
          >
            <User className="w-4 h-4" />
            Autor
          </Link>

          <Link
            href={PROJECT.repository}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg text-white text-sm font-medium transition-all"
          >
            <Image
              src="/assets/svg/github.svg"
              alt="GitHub"
              width={16}
              height={16}
            />
            Repositório
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      <section>
        <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100">Conteúdos</h2>
            <p className="text-zinc-500 text-sm mt-1">
              Explore os temas disponíveis e futuros
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-zinc-500">Disponível</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-600" />
              <span className="text-zinc-500">Em breve</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <ContentCard.Root key={topic.id} topic={topic}>
              <ContentCard.Tags
                tags={topic.tags}
                variant={topic.variantsTopic}
              />
            </ContentCard.Root>
          ))}
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-zinc-800 text-center">
        <p className="text-zinc-500 text-sm">
          Feito com 💙 por{" "}
          <Link
            href={AUTHOR.github}
            target="_blank"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {AUTHOR.name}
          </Link>
        </p>
      </footer>
    </div>
  );
}
