import { ImageShow } from "./ImageShow";
import { ImageProps } from "../Product";
import styled from "styled-components";

interface ImagesListProps {
  images: ImageProps[];
}

export const ImagesList = ({ images }: ImagesListProps) => {
  return (
    <Container>
      {images.map((image, index) => {
        return <ImageShow image={image} key={index} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  columns: 6 50px;
  column-gap: 10px;
`;
