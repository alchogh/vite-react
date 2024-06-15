import { inconList } from "./IconList";
import styled from "styled-components";

interface Props {
  name: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export default function Icon({
  name,
  onClick,
  width = "inherit",
  height = "inherit",
}: Props) {
  return (
    <Container
      src={inconList[name]}
      alt={name}
      onClick={onClick}
      width={width}
      height={height}
    />
  );
}

const Container = styled.img`
  display: flex;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
