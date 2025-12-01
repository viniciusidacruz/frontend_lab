import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Platform {
  readonly name: string;
  readonly url: string;
  readonly description: string;
}

interface PlatformDonationProps {
  readonly platforms: ReadonlyArray<Platform>;
}

export const PlatformDonation = ({
  platforms,
}: PlatformDonationProps) => (
  <div className="space-y-4">
    {platforms.map((platform) => (
      <Link
        key={platform.name}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors group"
      >
        <div>
          <h3 className="text-base font-semibold text-zinc-100 mb-1 group-hover:text-blue-400 transition-colors">
            {platform.name}
          </h3>
          <p className="text-sm text-zinc-500">{platform.description}</p>
        </div>
        <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
      </Link>
    ))}
  </div>
);

