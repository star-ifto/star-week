import styled from "styled-components";

interface IStyledContainerProps {
  color: "primary" | "secondary";
}

const DISTANCIA_DO_INDICADOR_DE_HORA = "-30px";

export const StyledContainer = styled.div<IStyledContainerProps>`
  padding: 10px 50px;
  position: relative;
  width: 50%;

  .rounded {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    border-radius: 0.3em;
    background-color: ${({ color }) =>
      color === "primary" ? "#0CA2EF" : "#0F3B51"};

    width: 60px;
    height: 40px;

    position: absolute;
    right: ${DISTANCIA_DO_INDICADOR_DE_HORA};
    top: 32px;
    z-index: 10;
  }

  .text-box {
    padding: 20px 30px;
    background-color: #f3f3f3;
    position: relative;
    border-radius: 6px;
    font-size: 15px;

    h2 {
      font-weight: 600;
    }

    small {
      display: inline-block;
      margin-bottom: 15px;
    }
  }

  .left-container-arrow,
  .right-container-arrow {
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }

  .left-container-arrow {
    border-left: 15px solid #f3f3f3;
    right: -15px;
  }

  .right-container-arrow {
    border-right: 15px solid #f3f3f3;
    left: -15px;
  }

  &.left-container {
    left: 0;
  }

  &.right-container {
    left: 50%;

    .rounded {
      left: ${DISTANCIA_DO_INDICADOR_DE_HORA};
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 80px;
    padding-right: 25px;

    .text-box {
      font-size: 13px;

      small {
        margin-bottom: 10px;
      }
    }

    &.right-container {
      left: 0;
    }

    &.left-container .rounded,
    &.right-container .rounded {
      left: 10px;
    }

    .left-container-arrow,
    .right-container-arrow {
      border-right: 15px solid #f3f3f3;
      border-left: 0;
      left: -15px;
    }
  }
`;
