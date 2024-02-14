import { useContext, useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import styled from "styled-components";
import BooksContext from "@/context/books";

export interface Book {
  id: number;
  title: string;
}

export const Book = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { count, incrementCount } = useContext(BooksContext);
  const editBookById = (id: number, newTitle: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });

    setBooks(updatedBooks);
  };
  console.log(count);
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
      <BookListTitle>books List</BookListTitle>
      {count}
      <button onClick={incrementCount}>버튼</button>
      <BookList books={books} setBooks={setBooks} editBookById={editBookById} />
    </div>
  );
};

const BookListTitle = styled.h2`
  font-size: 30px;
  padding: 10px;
`;
