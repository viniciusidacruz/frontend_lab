"use client";

import Link from "next/link";
import { cn, capturePostHogEvent } from "@/shared/config";
import { BLOG_EVENTS } from "@/modules/blog/events";
import type { Post } from "@/shared/queries";

interface PostCardRootProps {
  readonly post: Post;
  readonly children: React.ReactNode;
}

export const PostCardRoot = ({ post, children }: PostCardRootProps) => {
  const isFeatured = post.featured;

  const handleClick = () => {
    capturePostHogEvent(BLOG_EVENTS.POST_CLICKED, {
      post_slug: post.slug,
      post_title: post.title,
      is_featured: isFeatured,
    });
  };

  return (
    <article
      className={cn(
        "relative rounded-xl border p-4 sm:p-6 transition-all duration-300",
        "bg-zinc-900/50 border-zinc-800/50",
        "hover:bg-zinc-900 hover:border-zinc-700/50 hover:shadow-lg hover:shadow-blue-500/5",
        "w-full min-w-0",
        isFeatured && "border-l-2 border-l-amber-500"
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        onClick={handleClick}
        className="absolute inset-0 z-10"
        aria-label={`Ler artigo: ${post.title}`}
      />
      {children}
    </article>
  );
};
