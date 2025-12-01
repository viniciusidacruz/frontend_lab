import type { Metadata } from "next";

import { getPostBySlug } from "@/shared/queries";
import { DEFAULT_METADATA, createMetadata } from "@/shared/constants";

import {
  NotFound,
  PostContent,
  PostFooter,
  PostHeader,
} from "@/modules/blog/components";

interface PostDetailPageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export async function generateMetadata({
  params,
}: Readonly<PostDetailPageProps>): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: `Post não encontrado | ${DEFAULT_METADATA.siteName}`,
      description: "O post que você está procurando não foi encontrado.",
    });
  }

  const title = `${post.title} | ${DEFAULT_METADATA.siteName}`;
  const description =
    post.excerpt ||
    "Artigo sobre desenvolvimento frontend, boas práticas e muito mais.";

  return createMetadata({
    title,
    description,
    url: `${DEFAULT_METADATA.url}/blog/${slug}`,
    type: "article",
  });
}

export default async function PostDetailPage({
  params,
}: Readonly<PostDetailPageProps>) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const postNotFound = !post;

  if (postNotFound) {
    return <NotFound />;
  }

  return (
    <div className="max-w-5xl mx-auto px-2 py-4 sm:px-8 sm:py-12">
      <PostHeader
        title={post.title}
        publishedAt={post.publishedAt}
        contentHtml={post.content.html}
        featured={post.featured}
      />

      <PostContent html={post.content.html} />

      <PostFooter />
    </div>
  );
}
