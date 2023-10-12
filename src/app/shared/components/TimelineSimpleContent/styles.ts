import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  h2 {
    font-size: 1.5em;
    font-family: "Russo One", sans-serif;
    font-weight: 400 !important;
    color: #3a3a3a;
  }

  p {
    font-size: 1.2em;
    text-align: justify;
    line-height: 150%;
  }
`;
