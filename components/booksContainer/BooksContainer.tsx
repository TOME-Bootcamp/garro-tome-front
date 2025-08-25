'use client';

import BookCard from './BookCard';

interface BooksContainerProps {
  books: BookInterface[];
}

export default function BooksContainer({ books }: BooksContainerProps) {
  return (
    <div className="scrollbar-none flex h-full max-h-full w-2/3 flex-wrap items-start justify-start gap-x-[5%] gap-y-[3%] overflow-y-scroll">
      {books.map((book: BookInterface, index) => (
        <BookCard key={book.getId()} book={book} index={index} />
      ))}
    </div>
  );
}
