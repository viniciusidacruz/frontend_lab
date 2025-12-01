import type { Metadata } from "next";

import { getPosts } from "@/shared/queries";
import { BLOG_METADATA, DEFAULT_METADATA } from "@/shared/constants";

import {
  PostsList,
  SearchBar,
  BlogHeader,
  FeaturedPosts,
} from "@/modules/blog/components";

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Artigos sobre desenvolvimento frontend, boas práticas e muito mais.";

type BlogPageSearchParams = {
  search?: string | string[];
};

type BlogPageProps = {
  searchParams?: Promise<BlogPageSearchParams>;
};

export const metadata: Metadata = {
  title: BLOG_METADATA.title,
  description: BLOG_METADATA.description,
  openGraph: {
    title: BLOG_METADATA.title,
    description: BLOG_METADATA.description,
    url: BLOG_METADATA.url,
    siteName: DEFAULT_METADATA.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_METADATA.title,
    description: BLOG_METADATA.description,
  },
};

export default async function Blog({ searchParams }: Readonly<BlogPageProps>) {
  const params = await searchParams;
  const searchValue = params?.search;
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
