'use client';

import SearchBar from '@/components/searchBar/searchBar';
import BooksContainer from '@/components/booksContainer/BooksContainer';
import { useEffect, useState } from 'react';
import { BookApiRepository } from '@/infrastructure/api/repositories/BookApiRepository';

export default function Home() {
  const repo: BookRepository = new BookApiRepository();
  const [allBooks, setAllBooks] = useState([] as BookInterface[]);
  const [books, setBooks] = useState([] as BookInterface[]);

  useEffect(() => {
    repo
      .findAll()
      .then((books) => {
        setAllBooks(books);
        setBooks(books);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query: string) => {
    repo.findByAuthorOrIsbnOrTitle(query).then((result) => {
      setBooks(result);
    });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <SearchBar onSearch={handleSearch} />
      <BooksContainer books={books} />
    </div>
  );
}
