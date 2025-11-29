import EventLogoImage from "../../assets/event-logo-white.svg";
import IFTOLogoImage from "../../assets/ifto-logo.png";
import InstagramLogoImage from "../../assets/instagram-logo.png";
import {
  StyledContainer,
  StyledContent,
  StyledCopyright,
  StyledFirstContent,
  StyledIFTOLogoContainer,
  StyledSecondContent,
  StyledTextsContainer,
} from "./styles";

export function FooterSection() {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledFirstContent>
          <img src={EventLogoImage} alt="STAR" />

          <p>
            Não perca a oportunidade de participar da STAR e descobrir como a
            tecnologia pode transformar o nosso futuro!
          </p>
        </StyledFirstContent>

        <StyledSecondContent>
          <StyledIFTOLogoContainer>
            <img src={IFTOLogoImage} alt="IFTO" />
          </StyledIFTOLogoContainer>

          <StyledTextsContainer>
            <p>
              <a href="https://www.instagram.com/ads.ifto/" target="_blank">
                <img src={InstagramLogoImage} alt="instagram" />{" "}
                <p>@ads.ifto</p>{" "}
                {
                  // TODO: Change instagram link
                }
              </a>
            </p>

            <p>
              <a
                href="https://www.instagram.com/ifto.araguaina/"
                target="_blank"
              >
                <img src={InstagramLogoImage} alt="instagram" />{" "}
                <p>@ifto.araguaina</p>
              </a>
            </p>

            <p>
              <a href="https://www.instagram.com/ifto.oficial/" target="_blank">
                <img src={InstagramLogoImage} alt="instagram" />{" "}
                <p>@ifto.oficial</p>
              </a>
            </p>
          </StyledTextsContainer>
        </StyledSecondContent>
      </StyledContent>

      <StyledCopyright>Copyright &copy; 2025 STAR.</StyledCopyright>
    </StyledContainer>
  );
}

// 12.5%
