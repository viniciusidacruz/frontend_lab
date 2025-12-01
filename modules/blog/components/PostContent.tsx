interface PostContentProps {
  html: string;
}

export const PostContent = ({ html }: PostContentProps) => (
  <article className="prose-custom w-full">
    <div className="w-full min-w-0" dangerouslySetInnerHTML={{ __html: html }} />
  </article>
);
