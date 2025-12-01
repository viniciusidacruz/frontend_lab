import Link from "next/link";
import { Calendar, Clock, Star, ArrowRight } from "lucide-react";

import { cn } from "@/shared/config";
import type { Post } from "@/shared/queries";

const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
};

const estimateReadTime = (html: string): number => {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

interface PostCardRootProps {
  post: Post;
  children: React.ReactNode;
}

const Root = ({ post, children }: PostCardRootProps) => {
  const isFeatured = post.featured;

  return (
    <article
      className={cn(
        "group relative rounded-xl border p-4 sm:p-6 transition-all duration-300",
        "bg-zinc-900/50 border-zinc-800/50",
        "hover:bg-zinc-900 hover:border-zinc-700/50 hover:shadow-lg hover:shadow-blue-500/5",
        "w-full min-w-0",
        isFeatured && "border-l-2 border-l-amber-500"
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Ler artigo: ${post.title}`}
      />
      {children}
    </article>
  );
};

interface PostCardHeaderProps {
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

const Header = ({ publishedAt, readTime, featured }: PostCardHeaderProps) => {
  const formattedDate = formatDate(publishedAt);
  const readTimeLabel = `${readTime} min de leitura`;

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-500">
        <time
          dateTime={publishedAt}
          className="flex items-center gap-1.5 whitespace-nowrap"
        >
          <Calendar size={12} />
          <span className="hidden sm:inline">{formattedDate}</span>
          <span className="sm:hidden">{formattedDate}</span>
        </time>
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <Clock size={12} />
          {readTimeLabel}
        </span>
      </div>

      {featured && (
        <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 self-start sm:self-auto">
          <Star size={10} className="fill-current" />
          Destaque
        </span>
      )}
    </header>
  );
};

interface PostCardContentProps {
  title: string;
  excerpt?: string | null;
}

const Content = ({ title, excerpt }: PostCardContentProps) => {
  const hasExcerpt = Boolean(excerpt);

  return (
    <div className="space-y-2 sm:space-y-3 min-w-0">
      <h2 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors line-clamp-2 wrap-break-word">
        {title}
      </h2>

      {hasExcerpt && (
        <p className="text-xs sm:text-sm text-zinc-500 line-clamp-3 leading-relaxed wrap-break-word">
          {excerpt}
        </p>
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-zinc-800/50">
    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-400 group-hover:gap-2.5 transition-all">
      Ler artigo
      <ArrowRight
        size={14}
        className="transition-transform group-hover:translate-x-1 shrink-0"
      />
    </span>
  </footer>
);

interface PostCardComposedProps {
  post: Post;
}

const Composed = ({ post }: PostCardComposedProps) => {
  const readTime = estimateReadTime(post.content.html);

  return (
    <Root post={post}>
      <Header
        publishedAt={post.publishedAt}
        readTime={readTime}
        featured={post.featured}
      />
      <Content title={post.title} excerpt={post.excerpt} />
      <Footer />
    </Root>
  );
};

export const PostCard = {
  Root,
  Header,
  Content,
  Footer,
  Composed,
  utils: {
    formatDate,
    estimateReadTime,
  },
};
