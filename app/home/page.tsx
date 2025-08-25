'use client';

import BookMockRepository from '@/infrastructure/mock/repositories/BookMockRepository';
import SearchBar from '@/components/searchBar/searchBar';
import BooksContainer from '@/components/booksContainer/BooksContainer';
import { useState } from 'react';

export default function Home() {
  const allBooks = new BookMockRepository().findAll();
  const [books, setBooks] = useState(allBooks);

  const handleSearch = (query: string) => {
    console.log(allBooks);
    const filtered = allBooks.filter(
      (book: BookInterface) =>
        book.getTitle().toLowerCase().includes(query.toLowerCase()) ||
        book.getIsbn().toLowerCase().includes(query.toLowerCase()) ||
        book.getAuthor()?.getName().toLowerCase().includes(query.toLowerCase()),
    );
    setBooks(filtered);
    console.log(filtered);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <SearchBar onSearch={handleSearch} />
      <BooksContainer books={books} />
    </div>
  );
}
