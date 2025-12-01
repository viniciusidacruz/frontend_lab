import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  readonly collapsed?: boolean;
}

export const Logo = ({ collapsed = false }: LogoProps) => {
  if (collapsed) {
    return (
      <Link href="/" className="mb-10">
        <Image
          src="/assets/svg/logo-collapsed.svg"
          alt="Frontend Lab"
          width={40}
          height={40}
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center gap-3 mb-10">
      <Image src="/assets/svg/logo.svg" alt="Frontend Lab" width={44} height={44} />

      <div className="flex flex-col">
        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent leading-tight">
          Frontend
        </span>
        <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase">
          Lab
        </span>
      </div>
    </Link>
  );
};
