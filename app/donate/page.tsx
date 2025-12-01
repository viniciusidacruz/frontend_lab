import type { Metadata } from "next";

import {
  DONATE_CONTENT,
  DONATE_METADATA,
  DEFAULT_METADATA,
} from "@/shared/constants";

import {
  DonateHeader,
  DonateFAQ,
  HowToDonate,
  Important,
  Transparency,
  WhereMoneyGoes,
  WhyDonate,
} from "./components";

export const metadata = createMetadata({
  title: DONATE_METADATA.title,
  description: DONATE_METADATA.description,
  url: DONATE_METADATA.url,
});

export default function Donate() {
  return (
    <div className="max-w-5xl mx-auto px-2 py-4 sm:px-8 sm:py-12">
      <DonateHeader
        title={DONATE_CONTENT.hero.title}
        subtitle={DONATE_CONTENT.hero.subtitle}
        ctaButton={DONATE_CONTENT.hero.ctaButton}
      />

      <WhyDonate
        title={DONATE_CONTENT.whyDonate.title}
        paragraphs={DONATE_CONTENT.whyDonate.paragraphs}
      />

      <WhereMoneyGoes
        title={DONATE_CONTENT.whereMoneyGoes.title}
        description={DONATE_CONTENT.whereMoneyGoes.description}
        items={DONATE_CONTENT.whereMoneyGoes.items}
        transparencyNote={DONATE_CONTENT.whereMoneyGoes.transparencyNote}
      />

      <HowToDonate
        title={DONATE_CONTENT.howToDonate.title}
        description={DONATE_CONTENT.howToDonate.description}
        pix={DONATE_CONTENT.howToDonate.pix}
        platforms={DONATE_CONTENT.howToDonate.platforms}
        note={DONATE_CONTENT.howToDonate.note}
      />

      <Transparency
        title={DONATE_CONTENT.transparency.title}
        description={DONATE_CONTENT.transparency.description}
        options={DONATE_CONTENT.transparency.options}
      />

      <DonateFAQ
        title={DONATE_CONTENT.faq.title}
        items={DONATE_CONTENT.faq.items}
      />

      <Important
        title={DONATE_CONTENT.important.title}
        items={DONATE_CONTENT.important.items}
      />
    </div>
  );
}
