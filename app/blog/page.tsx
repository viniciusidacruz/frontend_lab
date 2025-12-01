import { getPosts } from "@/shared/queries";

import {
  BlogHeader,
  FeaturedPosts,
  PostsList,
  SearchBar,
} from "./components";

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Artigos sobre desenvolvimento frontend, boas práticas e muito mais.";

type BlogPageSearchParams = {
  search?: string | string[];
};

type BlogPageProps = {
  searchParams?: BlogPageSearchParams;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const searchValue = searchParams?.search;
  const searchTerm = Array.isArray(searchValue)
    ? searchValue[0]?.trim()
    : searchValue?.trim();

  const posts = await getPosts(searchTerm);

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  const totalPosts = posts.length;

  return (
    <div className="w-full px-6 py-12">
      <BlogHeader title={BLOG_TITLE} description={BLOG_DESCRIPTION} />

      <div className="mb-10 flex w-full justify-center">
        <SearchBar defaultValue={searchTerm} />
      </div>

      <FeaturedPosts posts={featuredPosts} />

      <PostsList posts={regularPosts} totalCount={totalPosts} />
    </div>
  );
}
