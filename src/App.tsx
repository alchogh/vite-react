import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <DropDownContainer onClick={handleDropDown}>Click here</DropDownContainer>
      {isOpen &&
        DROPDOWN_LIST.map((list) => {
          return <LinkContainer to={list.link}>{list.title}</LinkContainer>;
        })}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  font-size: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropDownContainer = styled.div`
  border-radius: 12px;
  padding: 20px;
`;

const LinkContainer = styled(Link)`
  background-color: lightblue;
  border-radius: 3px;
  border: none;
  font-size: 20px;
  color: black;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  width: 30%;
`;

const DROPDOWN_LIST = [
  { id: 1, title: "bookList", link: "book" },
  { id: 2, title: "reducer", link: "reducer" },
  { id: 3, title: "redux", link: "redux" },
];
