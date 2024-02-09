import { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";

export interface Book {
  id: number;
  title: string;
}

export const Book = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });

    setBooks(updatedBooks);
  };

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
      <BookList books={books} setBooks={setBooks} editBookById={editBookById} />
    </div>
  );
};
