import { Timeline, Title } from "..";
import { StyledContainer } from "./styles";

interface ITimelineSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function TimelineSection({ ...rest }: ITimelineSectionProps) {
  return (
    <StyledContainer type="secondary" {...rest}>
      <Title content="Cronograma" />

      <Timeline />
    </StyledContainer>
  );
}
