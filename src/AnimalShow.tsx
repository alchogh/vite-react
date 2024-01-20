import { useState } from "react";
import { styled } from "styled-components";
import Icon from "./components/Icons/Icon";

interface AnimalShowProps {
  type: string;
}

export const AnimalShow = ({ type }: AnimalShowProps) => {
  const [width, setWidth] = useState(40);
  const hanldeBiggerHeart = () => {
    setWidth(width + 5);
  };

  return (
    <Container>
      <TypeName>{type}</TypeName>
      <IconBox>
        <AnimalBox>
          <Icon name={type} />
        </AnimalBox>
        <HeartBox>
          <Icon name="heart" onClick={hanldeBiggerHeart} width={`${width}px`} />
        </HeartBox>
      </IconBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid lightgray;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 3px 4px lightgray;
`;

const TypeName = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

const IconBox = styled.div`
  position: relative;
`;

const AnimalBox = styled.div`
  height: 200px;
`;

const HeartBox = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
`;
