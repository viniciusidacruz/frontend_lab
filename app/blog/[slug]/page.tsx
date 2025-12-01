import { getPostBySlug } from "@/shared/queries";

import {
  NotFound,
  PostContent,
  PostFooter,
  PostHeader,
} from "@/modules/blog/components";

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
    <div className="max-w-5xl mx-auto px-8 py-12">
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
