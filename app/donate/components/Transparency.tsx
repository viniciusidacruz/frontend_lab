interface TransparencyProps {
  readonly title: string;
  readonly description: string;
  readonly options: ReadonlyArray<string>;
}

export const Transparency = ({
  title,
  description,
  options,
}: TransparencyProps) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
      {title}
    </h2>

    <p className="text-zinc-400 mb-4 text-base sm:text-lg">{description}</p>

    <ul className="space-y-2">
      {options.map((option, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-zinc-500 text-sm sm:text-base"
        >
          <span className="text-blue-400 mt-1">•</span>
          <span>{option}</span>
        </li>
      ))}
    </ul>
  </section>
);

