import { graphqlFetch } from "@/shared/config";

export type StatusTopic = "AVAILABLE" | "COMING_SOON";

export type VariantTopic =
  | "HTML_ADVANCED"
  | "JS_APIS"
  | "FRONTEND_ARCH"
  | "DESIGN_PATTERNS"
  | "SOLID"
  | "CLEAN_CODE";

export type ContentTopic = {
  id: string;
  title: string;
  description: string;
  statusTopic: StatusTopic;
  variantsTopic: VariantTopic;
  tags: string[];
};

type ContentTopicsQueryData = {
  contentTopics: ContentTopic[];
};

const CONTENT_TOPICS_QUERY = `
  query GetContentTopics {
    contentTopics(orderBy: createdAt_ASC, stage: PUBLISHED) {
      id
      title
      description
      statusTopic
      variantsTopic
      tags
    }
  }
`;

export async function getContentTopics(): Promise<ContentTopic[]> {
  const data = await graphqlFetch<ContentTopicsQueryData>(CONTENT_TOPICS_QUERY);
  return data.contentTopics;
}
