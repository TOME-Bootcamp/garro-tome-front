'use client';

import React from 'react';
import Image from 'next/image';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="my-2 flex h-[10vh] w-full items-center justify-center">
      <div className="flex h-full w-2/3 items-center rounded-[var(--radius-lg)] border-[3px] border-[var(--color-border)] focus-within:border-[var(--color-border)]">
        <div className="mr-2 ml-2 flex h-fit w-fit">
          <Image src="/search.svg" alt="Search" width={30} height={30} />
        </div>
        <input
          type="text"
          placeholder="Search by title, author or ISBN"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-full flex-1 text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] caret-[var(--color-primary)] focus:outline-none"
        />
      </div>
    </div>
  );
}
