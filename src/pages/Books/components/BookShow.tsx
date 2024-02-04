import { Book } from "../Book";
import { styled } from "styled-components";
interface BookShowProps {
  books: Book[];
  book: Book;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BookShow = ({ book, setBooks, books }: BookShowProps) => {
  const deleteList = () => {
    const filterList = books.filter((v: any) => v.title !== book.title);
    return setBooks(filterList);
  };

  return (
    <Container>
      <p>{book.title}</p>
      <DeleteButton onClick={deleteList}>삭제</DeleteButton>
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
