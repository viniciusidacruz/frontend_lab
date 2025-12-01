import { graphqlFetch } from "@/shared/config";

export type Post = {
  id: string;
  publishedAt: string;
  title: string;
  slug: string;
  content: {
    html: string;
  };
  excerpt?: string | null;
  featured: boolean;
};

type PostsQueryData = {
  posts: Post[];
};

type PostQueryData = {
  post: Post | null;
};

const POSTS_QUERY = `
  query GetPosts {
    posts(orderBy: publishedAt_DESC, stage: PUBLISHED) {
      id
      publishedAt
      title
      slug
      content {
        html
      }
      excerpt
      featured
    }
  }
`;

const POST_BY_SLUG_QUERY = `
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }, stage: PUBLISHED) {
      id
      publishedAt
      title
      slug
      content {
        html
      }
      excerpt
      featured
    }
  }
`;

export async function getPosts(): Promise<Post[]> {
  const data = await graphqlFetch<PostsQueryData>(POSTS_QUERY);
  return data.posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await graphqlFetch<PostQueryData>(POST_BY_SLUG_QUERY, { slug });
  return data.post;
}
