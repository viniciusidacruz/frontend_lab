interface WhereMoneyGoesProps {
  readonly title: string;
  readonly description: string;
  readonly items: ReadonlyArray<string>;
  readonly transparencyNote: string;
}

export const WhereMoneyGoes = ({
  title,
  description,
  items,
  transparencyNote,
}: WhereMoneyGoesProps) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
      {title}
    </h2>

    <p className="text-zinc-400 mb-6 text-base sm:text-lg">{description}</p>

    <ul className="space-y-3 mb-6">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-zinc-400 text-base sm:text-lg"
        >
          <span className="text-blue-400 mt-1.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <p className="text-zinc-500 text-sm sm:text-base italic">{transparencyNote}</p>
  </section>
);

