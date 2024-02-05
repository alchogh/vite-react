import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";

export interface Book {
  id: number;
  title: string;
}

export const Book = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const onSubmit = (title: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onSubmit={onSubmit} />
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
};
