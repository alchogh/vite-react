import { useState, useContext } from "react";
import BooksContext from "@/context/books";
import { Book } from "@/context/books";
import styled from "styled-components";

interface EditProps {
  book: Book;
  handleEditSubmit: () => void;
}

export const BookEdit = ({ book, handleEditSubmit }: EditProps) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEditSubmit();
    editBookById(book.id, title);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelTitle>Title</LabelTitle>
      <FormInput value={title} onChange={handleChange} />
      <FormButton type="submit">Save</FormButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  /* flex-direction: column; */
`;

const LabelTitle = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: inherit;
`;

const FormButton = styled.button`
  margin-left: 20px;
  background-color: inherit;
  border: none;
`;
