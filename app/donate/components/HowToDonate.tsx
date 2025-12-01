import { PixDonation } from "./PixDonation";
import { PlatformDonation } from "./PlatformDonation";

interface Platform {
  readonly name: string;
  readonly url: string;
  readonly description: string;
}

interface HowToDonateProps {
  readonly title: string;
  readonly description: string;
  readonly pix: {
    readonly label: string;
  };
  readonly platforms: ReadonlyArray<Platform>;
  readonly note: string;
}

export const HowToDonate = ({
  title,
  description,
  pix,
  platforms,
  note,
}: HowToDonateProps) => (
  <section id="como-doar" className="mb-12 sm:mb-16 scroll-mt-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
      {title}
    </h2>

    <p className="text-zinc-400 mb-8 text-base sm:text-lg">{description}</p>

    <div className="space-y-8">
      <PixDonation label={pix.label} />

      {platforms.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-4">
            Plataformas de apoio recorrente
          </h3>
          <PlatformDonation platforms={platforms} />
        </div>
      )}
    </div>

    <p className="mt-8 text-center text-zinc-500 text-base sm:text-lg italic">
      {note}
    </p>
  </section>
);
