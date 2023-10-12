import styled from "styled-components";
import { ContentContainer } from "..";

export const StyledContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 6% 15%;

  h1 {
    text-align: center;
    width: 100%;
  }
`;
