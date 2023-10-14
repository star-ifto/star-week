import styled from "styled-components";

export const StyledTimeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 100px auto;

  @keyframes moveline {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: #3A3A3A;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 0;
    /* animation: moveline 5s linear forwards; */
  }

  @media screen and (max-width: 1205px) {
    margin: 50px auto;

    &::after {
      left: 31px;
    }
  }
`;
