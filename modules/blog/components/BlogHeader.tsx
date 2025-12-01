interface BlogHeaderProps {
  readonly title: string;
  readonly description: string;
}

export const BlogHeader = ({ title, description }: BlogHeaderProps) => (
  <header className="mb-12">
    <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-3">
      {title}
    </h1>
    <p className="text-zinc-500">{description}</p>
  </header>
);

