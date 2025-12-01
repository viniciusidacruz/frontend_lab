import { Search } from "lucide-react";

interface SearchBarProps {
  defaultValue?: string;
}

export const SearchBar = ({ defaultValue }: SearchBarProps) => (
  <form
    action="/blog"
    method="GET"
    role="search"
    className="w-full max-w-2xl"
  >
    <label htmlFor="search" className="sr-only">
      Buscar artigos
    </label>
    <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 shadow-lg backdrop-blur focus-within:border-blue-500">
      <input
        id="search"
        name="search"
        defaultValue={defaultValue}
        placeholder="Busque por título ou resumo"
        className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
      />
      <button
        type="submit"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-violet-600 text-white transition hover:from-blue-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Pesquisar"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  </form>
);
