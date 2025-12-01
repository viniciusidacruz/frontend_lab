interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

interface FAQProps {
  readonly title: string;
  readonly items: ReadonlyArray<FAQItem>;
}

export const DonateFAQ = ({ title, items }: FAQProps) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
      {title}
    </h2>

    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4"
        >
          <summary className="cursor-pointer font-semibold text-zinc-100 list-none flex items-center gap-2">
            <span className="transition-transform duration-200 details-marker">
              ▶
            </span>
            {item.question}
          </summary>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </section>
);
