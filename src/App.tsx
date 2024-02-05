import React, { useState } from "react";
import { AnimalShow } from "./pages/Animals/AnimalShow";
import styled from "styled-components";

function App() {
  const [id, setId] = useState("");
  const [animals, setAnimals] = useState<string[]>([]);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  const showAnimalsRandom = () => {
    animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <Container>
      <div>Personal Digital Assistant</div>
      <Input value={id} onChange={handleId} />

      <Button onClick={showAnimalsRandom}> Button</Button>
      {animals.map((animal: string, index: number) => {
        return <AnimalShow type={animal} key={index + 1} />;
      })}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 12px;
  padding: 20px;
`;

const Button = styled.button`
  background-color: lightgreen;
  border-radius: 3px;
  border: 1px solid green;
  font-size: 20px;
  padding: 10px;
  width: 30%;
`;
