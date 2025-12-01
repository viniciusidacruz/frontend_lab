import { getPostBySlug } from "@/shared/queries";

import { NotFound, PostContent, PostFooter, PostHeader } from "./components";

interface PostDetailPageProps {
  params: Promise<{ slug: string }>;
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
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-x-hidden">
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
