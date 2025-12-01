interface ImportantProps {
  readonly title: string;
  readonly items: ReadonlyArray<string>;
}

export const Important = ({ title, items }: ImportantProps) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
      {title}
    </h2>

    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 space-y-4">
      {items.map((item, index) => (
        <p
          key={index}
          className="text-zinc-300 text-base sm:text-lg leading-relaxed"
        >
          {item}
        </p>
      ))}
    </div>
  </section>
);

