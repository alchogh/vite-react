import { styled } from "styled-components";
import { ImageProps } from "../Product";

export const ImageShow = ({ image }: { image: ImageProps }) => {
  console.log(image);
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
