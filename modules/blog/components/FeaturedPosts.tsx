import type { Post } from "@/shared/queries";

import { PostCard } from "./PostCard";

interface FeaturedPostsProps {
  readonly posts: ReadonlyArray<Post>;
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  const hasPosts = posts.length > 0;

  if (!hasPosts) {
    return null;
  }

  return (
    <section
      className="mt-12 pt-8 border-t border-zinc-800/50"
      aria-labelledby="featured-heading"
    >
      <div className="flex items-center gap-3 mb-6">
        <h2
          id="featured-heading"
          className="text-xl font-semibold text-zinc-100"
        >
          Artigos em destaque
        </h2>
        <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-full">
          {posts.length}
        </span>
      </div>
      <div className="overflow-x-auto -mx-2 sm:-mx-8 px-2 sm:px-8 scrollbar-hide">
        <div className="flex gap-4 min-w-max md:grid md:grid-cols-2 lg:grid-cols-3 md:min-w-0 pb-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-[280px] sm:w-[320px] md:w-auto flex-shrink-0 md:flex-shrink"
            >
              <PostCard.Composed post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

