import Link from "next/link";
import { Calendar, Clock, Star, ArrowLeft } from "lucide-react";

import { estimateReadTime, formatPostDate } from "@/modules/blog/utils/post";

interface PostHeaderProps {
  readonly title: string;
  readonly publishedAt: string;
  readonly contentHtml: string;
  readonly featured: boolean;
}

export const PostHeader = ({
  title,
  publishedAt,
  contentHtml,
  featured,
}: PostHeaderProps) => {
  const formattedDate = formatPostDate(publishedAt, "long");
  const readTime = estimateReadTime(contentHtml);
  const readTimeLabel = `${readTime} min de leitura`;

  return (
    <header className="mb-8 sm:mb-10">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-6 sm:mb-8"
      >
        <ArrowLeft size={16} />
        Voltar para o blog
      </Link>

      <div className="flex items-center gap-3 mb-4">
        {featured && (
          <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400">
            <Star size={12} className="fill-current" />
            Destaque
          </span>
        )}
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 mb-4 sm:mb-6 leading-tight">
        {title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-500">
        <time dateTime={publishedAt} className="flex items-center gap-1.5">
          <Calendar size={14} />
          {formattedDate}
        </time>
        <span className="flex items-center gap-1.5">
          <Clock size={14} />
          {readTimeLabel}
        </span>
      </div>
    </header>
  );
};

