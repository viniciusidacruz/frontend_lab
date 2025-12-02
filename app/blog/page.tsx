import { getPosts } from "@/shared/queries";
import { BLOG_METADATA, createMetadata } from "@/shared/constants";

import {
  PostsList,
  SearchBar,
  BlogHeader,
  FeaturedPosts,
} from "@/modules/blog/components";

type BlogPageSearchParams = {
  search?: string | string[];
};

type BlogPageProps = {
  searchParams?: Promise<BlogPageSearchParams>;
};

export const metadata = createMetadata({
  title: BLOG_METADATA.title,
  description: BLOG_METADATA.description,
  url: BLOG_METADATA.url,
});

export default async function Blog({ searchParams }: Readonly<BlogPageProps>) {
  const params = await searchParams;
  const searchValue = params?.search;
  const searchTerm = Array.isArray(searchValue)
    ? searchValue[0]?.trim()
    : searchValue?.trim();

  const posts = await getPosts(searchTerm);

  console.log(posts);

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  const allPosts = [...regularPosts, ...featuredPosts];
  const totalPosts = posts.length;

  return (
    <div className="max-w-5xl mx-auto px-2 py-4 sm:px-8 sm:py-12">
      <BlogHeader title="Blog" description={BLOG_METADATA.description} />

      <div className="mb-10 flex w-full justify-center">
        <SearchBar defaultValue={searchTerm} />
      </div>

      <PostsList posts={allPosts} totalCount={totalPosts} />

      {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}
    </div>
  );
}
