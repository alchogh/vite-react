import { useState } from "react";
import { Book } from "../Book";
import { BookEdit } from "./BookEdit";
import { styled } from "styled-components";
interface BookShowProps {
  books: Book[];
  book: Book;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BookShow = ({ book, setBooks, books }: BookShowProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const deleteList = (id: number) => {
    const filterList = books.filter((v: Book) => v.id !== id);
    return setBooks(filterList);
  };

  const handleDeleteClick = () => {
    deleteList(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit />;
  }

  console.log(showEdit);
  return (
    <Container>
      <div>{content}</div>
      <ButtonBox>
        <EditButton onClick={handleEditClick}>수정</EditButton>
        <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: orange;
  margin-top: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const EditButton = styled.button`
  border: none;
  padding: 10px;
  width: 70px;
  height: 40px;
  border-radius: 6px;
  background-color: gray;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: black;
    font-weight: 700;
    transition: 0.5s;
  }
`;

const DeleteButton = styled.button`
  border: none;
  padding: 10px;
  width: 70px;
  height: 40px;
  border-radius: 6px;
  background-color: gray;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: black;
    font-weight: 700;
    transition: 0.5s;
  }
`;
