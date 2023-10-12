import { StyledContainer } from "./styles";

interface ITimelineSimpleContentProps {
  title: string;
  content: string;
}

export function TimelineSimpleContent({
  title,
  content,
}: ITimelineSimpleContentProps) {
  return (
    <StyledContainer>
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledContainer>
  );
}
