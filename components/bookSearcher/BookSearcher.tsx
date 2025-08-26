'use client';

import { useEffect, useMemo, useState } from 'react';
import SearchBar from '@/components/searchBar/searchBar';
import BooksContainer from '@/components/booksContainer/BooksContainer';
import { BookApiRepository } from '@/infrastructure/api/repositories/BookApiRepository';

function BookSearcher() {
  const bookRepository = useMemo<BookRepository>(() => new BookApiRepository(), []);
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([] as BookInterface[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      bookRepository.findAll().then((books) => setBooks(books));
      return;
    }

    const timeout = setTimeout(() => {
      setLoading(true);
      bookRepository
        .findByAuthorOrIsbnOrTitle(query)
        .then((book) => {
          setBooks(book);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(timeout);
  }, [bookRepository, query]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <SearchBar query={query} setQuery={setQuery} />
      <BooksContainer books={books} />
    </div>
  );
}
export default BookSearcher;
