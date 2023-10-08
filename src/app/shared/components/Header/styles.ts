import styled from "styled-components";

export const StyledContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 8em;
  z-index: 1;

  img {
    width: 9em;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 3em;
    transition: all 0.2s;

    a {
      color: white;
      text-decoration: none;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      line-height: 160%;

      &:hover {
        transition: all 0.2s;
        font-weight: 600;
      }
    }
  }
`;
