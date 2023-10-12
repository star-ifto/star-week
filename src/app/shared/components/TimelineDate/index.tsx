import { StyledContainer } from "./styles";

interface ITimelineDateProps {
  date: string;
  color?: "primary" | "secondary";
}

export function TimelineDate({ date, color = "primary" }: ITimelineDateProps) {
  return (
    <StyledContainer color={color}>
      <span>{date}</span>
    </StyledContainer>
  );
}
