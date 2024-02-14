import { useContext } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import styled from "styled-components";
import BooksContext from "@/context/books";

export const Book = () => {
  const { books } = useContext(BooksContext);

  console.log(books);
  return (
    <div>
      <BookCreate />
      <BookListTitle>books List</BookListTitle>

      <BookList />
    </div>
  );
};

const BookListTitle = styled.h2`
  font-size: 30px;
  padding: 10px;
`;
