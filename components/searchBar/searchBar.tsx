'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="my-2 flex h-[10vh] w-full items-center justify-center" onSubmit={handleSubmit}>
      <div className="flex h-full w-2/3 items-center rounded-[var(--radius-lg)] border-[3px] border-[var(--color-border)] focus-within:border-[var(--color-border)]">
        <div className="mr-2 ml-2 flex h-fit w-fit">
          <Image src="/search.svg" alt="Search" width={30} height={30} />
        </div>
        <input
          type="text"
          placeholder="Search by title, author or ISBN"
          value={query}
          onChange={handleChange}
          className="h-full flex-1 text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] caret-[var(--color-primary)] focus:outline-none"
        />
      </div>
    </form>
  );
}
