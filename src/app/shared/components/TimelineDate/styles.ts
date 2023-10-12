import styled from "styled-components";

interface IStyledContainerProps {
  color: "primary" | "secondary";
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: relative;
  z-index: 10;

  span {
    color: white;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    border-radius: 0.3em;
    background-color: ${({ color }) =>
      color === "primary" ? "#0CA2EF" : "#0F3B51"};
    padding: 10px 30px;
  }
`;
