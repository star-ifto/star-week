import {
  StyledContainer,
  StyledContentContainer,
  StyledImageContainer,
  StyledSpeakerInfo,
} from "./styles";

interface ITimelineContentWithImageProps {
  title: string;
  image: string;
  name: string;
  description: string;
  right?: boolean;
}

export function TimelineContentWithImage({
  title,
  image,
  name,
  description,
  right = false,
}: ITimelineContentWithImageProps) {
  return (
    <StyledContainer>
      <h1>Palestra</h1>
      <h2>{title}</h2>
      <StyledContentContainer right={right}>
        <StyledSpeakerInfo right={right}>
          <StyledImageContainer>
            <img src={image} alt={name} />
          </StyledImageContainer>

          <strong>{name}</strong>
        </StyledSpeakerInfo>

        <p>{description}</p>
      </StyledContentContainer>
    </StyledContainer>
  );
}
