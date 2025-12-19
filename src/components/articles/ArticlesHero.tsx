"use client";

import { useState } from "react";

interface ArticlesHeroProps {
  title?: string;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

export function ArticlesHero({
  title = "Artigos CBI",
  searchPlaceholder = "Busque por artigo",
}: ArticlesHeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="section mb-0">
      <div className="container">
        {}
        <div className="mb-10 flex h-10 items-center overflow-hidden rounded-xs border border-primary-dark">
          <div className="flex h-full items-center px-3">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-full flex-1 bg-transparent px-2 text-md text-primary-dark placeholder:text-primary-dark/60 focus:outline-none"
          />
        </div>

        {}
        <h1 className="text-4xl font-bold leading-tight text-primary-dark">{title}</h1>
      </div>
    </section>
  );
}

export default ArticlesHero;

