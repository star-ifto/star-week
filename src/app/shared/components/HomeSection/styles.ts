import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4em;
  padding: 6em 8em;
  z-index: 1;
  flex: 1;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
    flex: 1;
    max-width: 600px;
  }

  .title {
    width: 100%;
    max-width: 21ch;
  }

  p {
    font-size: 1.125em;
    line-height: 160%;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
  }

  a {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1.25em;
    text-decoration: none;
    line-height: 160%;
    color: #ffffff;
    text-align: center;
    background-color: #0f3b51;
    padding: 0.9em 3.5em;
    border-radius: 0.5em;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      box-shadow: 0px 0px 20px 0px rgba(15, 59, 81, 0.7);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .carousel-wrapper {
    flex: 1;
    max-width: 550px;
    min-width: 400px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 1560px) {
    padding: 5em 6em;
    gap: 3em;

    .carousel-wrapper {
      min-width: 350px;
      max-width: 450px;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 4em;
    gap: 2.5em;

    .title {
      max-width: 100%;
    }

    .carousel-wrapper {
      min-width: 300px;
      max-width: 400px;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    padding: 4em 2em;
    gap: 3em;

    .content-wrapper {
      align-items: center;
      max-width: 100%;
    }

    .title {
      width: auto;
      max-width: 100%;
    }

    p {
      text-align: center;
      font-size: 1.2em;
      max-width: 700px;
    }

    .carousel-wrapper {
      max-width: 600px;
      min-width: unset;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3em 1.5em;

    p {
      font-size: 1.1em;
    }

    a {
      font-size: 1.1em;
      padding: 0.8em 2.5em;
    }
  }

  @media screen and (max-width: 605px) {
    padding: 2.5em 1.2em;

    .title {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

    a {
      font-size: 1em;
      padding: 0.7em 2em;
    }

    .carousel-wrapper {
      border-radius: 12px;
    }
  }

.swiper-slide-active .carousel-image {
  transform: scale(1.08) !important;
}
.swiper-slide .carousel-image {
  transform: scale(1) !important;
}
`;

export const StyledRectangleGroup = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  opacity: 0.8;

  @media screen and (max-width: 1700px) {
    display: none;
  }
`;