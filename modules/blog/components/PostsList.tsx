import type { Post } from "@/shared/queries";

import { PostCard } from "./PostCard";
import { EmptyState } from "./EmptyState";

interface PostsListProps {
  readonly posts: ReadonlyArray<Post>;
  readonly totalCount: number;
}

export const PostsList = ({ posts, totalCount }: PostsListProps) => {
  const hasPosts = posts.length > 0;
  const isEmpty = totalCount === 0;

  return (
    <section aria-labelledby="all-posts-heading">
      <div className="flex items-center gap-3 mb-6">
        <h2
          id="all-posts-heading"
          className="text-xl font-semibold text-zinc-100"
        >
          Todos os artigos
        </h2>
        <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-full">
          {totalCount}
        </span>
      </div>

      {hasPosts && (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard.Composed key={post.id} post={post} />
          ))}
        </div>
      )}

      {isEmpty && <EmptyState />}
    </section>
  );
};

