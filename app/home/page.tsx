'use client';

import SearchBar from '@/components/searchBar/searchBar';
import BooksContainer from '@/components/booksContainer/BooksContainer';
import { useEffect, useState } from 'react';
import { BookApiRepository } from '@/infrastructure/api/repositories/BookApiRepository';

export default function Home() {
  const [allBooks, setAllBooks] = useState([] as BookInterface[]);
  const [books, setBooks] = useState([] as BookInterface[]);

  useEffect(() => {
    const repo = new BookApiRepository();
    repo
      .findAll()
      .then((books) => {
        setAllBooks(books);
        setBooks(books);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query: string) => {
    console.log(allBooks);
    const filtered = allBooks.filter(
      (book: BookInterface) =>
        book.getTitle().toLowerCase().includes(query.toLowerCase()) ||
        book.getIsbn().toLowerCase().includes(query.toLowerCase()) ||
        book.getAuthor()?.getName().toLowerCase().includes(query.toLowerCase()) ||
        book.getAuthor()?.getSurname().toLowerCase().includes(query.toLowerCase()),
    );
    setBooks(filtered);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <SearchBar onSearch={handleSearch} />
      <BooksContainer books={books} />
    </div>
  );
}
