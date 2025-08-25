'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './searchBar.module.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // TODO: hook this into your search logic
  };

  return (
    <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBar}>
        <div className={styles.searchLogo}>
          <Image src="/search.svg" alt="Search" width={30} height={30} />
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default SearchBar;
