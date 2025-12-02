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
  query GetPosts($where: PostWhereInput, $first: Int) {
    posts(orderBy: publishedAt_DESC, stage: PUBLISHED, where: $where, first: $first) {
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

const buildSearchWhere = (search?: string) => {
  if (!search) {
    return undefined;
  }

  return {
    OR: [
      { title_contains: search },
      { excerpt_contains: search },
    ],
  } satisfies Record<string, unknown>;
};

export async function getPosts(search?: string): Promise<Post[]> {
  const where = buildSearchWhere(search?.trim());
  const variables: Record<string, unknown> = {
    first: 1000, // Limite alto para buscar todos os posts
  };
  
  if (where) {
    variables.where = where;
  }
  
  const data = await graphqlFetch<PostsQueryData>(POSTS_QUERY, variables);
  return data.posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await graphqlFetch<PostQueryData>(POST_BY_SLUG_QUERY, { slug });
  return data.post;
}
