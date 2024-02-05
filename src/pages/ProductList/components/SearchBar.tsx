import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  onSubmit: (value: string) => void;
}

export const SearchBar = ({ onSubmit }: IProps) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
