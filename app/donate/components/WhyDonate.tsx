interface WhyDonateProps {
  readonly title: string;
  readonly paragraphs: ReadonlyArray<string>;
}

export const WhyDonate = ({ title, paragraphs }: WhyDonateProps) => (
  <section className="mb-12 sm:mb-16">
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
      {title}
    </h2>

    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-zinc-400 leading-relaxed text-base sm:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </div>
  </section>
);

