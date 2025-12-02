"use client";

import { Search } from "lucide-react";
import { useRef } from "react";
import { capturePostHogEvent } from "@/shared/config";
import { BLOG_EVENTS } from "@/modules/blog/events";

interface SearchBarProps {
  readonly defaultValue?: string;
}

export const SearchBar = ({ defaultValue }: SearchBarProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("search") as string;

    if (searchTerm?.trim()) {
      capturePostHogEvent(BLOG_EVENTS.SEARCH, {
        search_term: searchTerm.trim(),
        has_term: true,
      });
    } else {
      capturePostHogEvent(BLOG_EVENTS.SEARCH, {
        search_term: "",
        has_term: false,
      });
    }
  };

  return (
    <form
      ref={formRef}
      action="/blog"
      method="GET"
      role="search"
      onSubmit={handleSubmit}
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
};
