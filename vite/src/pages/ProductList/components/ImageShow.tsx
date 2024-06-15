import { ImageProps } from "../Product";
import styled from "styled-components";

export const ImageShow = ({ image }: { image: ImageProps }) => {
  return (
    <>
      <Image src={image.urls.small} alt={image.alt_description} />
    </>
  );
};

const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
