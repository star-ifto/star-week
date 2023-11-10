import styled from "styled-components";

export const StyledContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #051114;
  color: #ffffffb3;
  padding: 4.6875em 12.5% 5.3125em 12.5%;

  @media screen and (max-width: 755px) {
    padding: 4.5em 5%;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.6875em;
  border-bottom: 1px solid #ffffff33;

  @media screen and (max-width: 1110px) {
    flex-direction: column;
    gap: 3em;
    padding-bottom: 3em;
    align-items: center;
  }
`;

export const StyledFirstContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875em;

  img {
    width: 25em;
  }

  p {
    max-width: 21.25em;
    line-height: 160%;
    font-size: 1em !important;
  }

  @media screen and (max-width: 1110px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 1065px) {
    img {
      width: 30vw;
    }
  }

  @media screen and (max-width: 630px) {
    flex-direction: column;
    gap: 2em;
    text-align: center;
  }
`;

export const StyledSecondContent = styled.div`
  display: flex;
  gap: 3.75em;

  @media screen and (max-width: 1110px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 630px) {
    justify-content: space-evenly;
  }
`;

export const StyledIFTOLogoContainer = styled.div`
  padding: 2.1875em 1.5625em;
  background-color: white;
  border-radius: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    img {
      width: 10vw;
    }
  }

  @media screen and (max-width: 630px) {
    img {
      width: 12vw;
    }
  }
`;

export const StyledTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375em;

  p {
    line-height: 160%;
    font-size: 1.125em;
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  @media screen and (max-width: 630px) {
    font-size: 0.8em;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 1.25em;
      height: 1.25em;
    }
  }
`;

export const StyledCopyright = styled.p`
  margin-top: 1.875em;
`;
