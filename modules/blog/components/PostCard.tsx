import { Calendar, Clock, Star, ArrowRight } from "lucide-react";

import { estimateReadTime, formatPostDate } from "@/modules/blog/utils/post";
import { PostCardRoot } from "./PostCardRoot";
import type { Post } from "@/shared/queries";

interface PostCardHeaderProps {
  readonly publishedAt: string;
  readonly readTime: number;
  readonly featured?: boolean;
}

const Header = ({ publishedAt, readTime, featured }: PostCardHeaderProps) => {
  const formattedDate = formatPostDate(publishedAt);
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
  readonly title: string;
  readonly excerpt?: string | null;
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
  readonly post: Post;
}

const Composed = ({ post }: PostCardComposedProps) => {
  const readTime = estimateReadTime(post.content.html);

  return (
    <PostCardRoot post={post}>
      <Header
        publishedAt={post.publishedAt}
        readTime={readTime}
        featured={post.featured}
      />
      <Content title={post.title} excerpt={post.excerpt} />
      <Footer />
    </PostCardRoot>
  );
};

export const PostCard = {
  Root: PostCardRoot,
  Header,
  Content,
  Footer,
  Composed,
  utils: {
    formatDate: formatPostDate,
    estimateReadTime,
  },
};
