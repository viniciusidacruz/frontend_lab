import Link from "next/link";

import { NavLink } from "@/components";

export const Aside = () => (
  <aside className="w-sm bg-blue-600 h-full p-8 shrink-0">
    <Link href="/" className="text-white font-bold text-3xl">
      HTML ADVANCED
    </Link>

    <ul className="mt-8 text-white">
      <li className="w-full">
        <NavLink href="/dialog">Dialog</NavLink>
      </li>
    </ul>
  </aside>
);
