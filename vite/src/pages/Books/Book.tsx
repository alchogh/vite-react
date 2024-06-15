import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import styled from "styled-components";

export const Book = () => {
  return (
    <>
      <BookCreate />
      <BookListTitle>books List</BookListTitle>
      <BookList />
    </>
  );
};

const BookListTitle = styled.h2`
  font-size: 30px;
  padding: 10px;
`;
