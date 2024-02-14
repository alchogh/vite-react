import { useState } from "react";
import useBooksContext from "@/hooks/useBooksContext";
import styled from "styled-components";

export const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { onSubmit } = useBooksContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCreateList = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(title);
    setTitle("");
  };

  return (
    <Container>
      <Title>Add a book</Title>

      <FormContainer onSubmit={handleCreateList}>
        <FormLabel>Ttile</FormLabel>
        <FormInput onChange={handleChange} value={title} />
        <FormButton>Create!</FormButton>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkcyan;
  padding: 20px;
`;

const Title = styled.h2`
  font-weight: 700;
  color: white;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 24px;
`;

const FormInput = styled.input`
  background-color: white;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: none;
`;

const FormButton = styled.button`
  width: 140px;
  padding: 10px 5px;
  border: none;
  font-size: 24px;
`;
