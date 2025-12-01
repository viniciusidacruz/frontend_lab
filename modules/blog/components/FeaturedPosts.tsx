import type { Post } from "@/shared/queries";

import { PostCard } from "./PostCard";

interface FeaturedPostsProps {
  posts: Post[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  const hasPosts = posts.length > 0;

  if (!hasPosts) {
    return null;
  }

  return (
    <section className="mb-12" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="sr-only">
        Artigos em destaque
      </h2>
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard.Composed key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

