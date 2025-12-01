import { Heart } from "lucide-react";

interface DonateHeaderProps {
  readonly title: string;
  readonly subtitle: string;
  readonly ctaButton: string;
}

export const DonateHeader = ({
  title,
  subtitle,
  ctaButton,
}: DonateHeaderProps) => (
  <header className="text-center mb-12 sm:mb-16">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
      <Heart className="w-8 h-8 text-blue-400 fill-blue-400" />
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
      {title}
    </h1>

    <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
      {subtitle}
    </p>

    <a
      href="#como-doar"
      className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg text-white font-medium transition-all"
    >
      {ctaButton}
    </a>
  </header>
);
