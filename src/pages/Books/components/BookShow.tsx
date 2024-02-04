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
      <button onClick={deleteList}>삭제</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: orange;
  margin-top: 10px;
`;
