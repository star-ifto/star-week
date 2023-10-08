import { StyledContainer } from "./styles";

interface ITitleProps {
  content: string;
  color?: "white" | "black";
}

export function Title({ content, color = "black" }: ITitleProps) {
  return <StyledContainer color={color}>{content}</StyledContainer>;
}
