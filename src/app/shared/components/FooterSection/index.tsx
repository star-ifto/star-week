import GETECLogoImage from "../../assets/getec-logo.svg";
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
          <img src={GETECLogoImage} alt="GETEC" />

          <p>
            Explorando Inovações em TI e Gestão para Acadêmicos e Comunidade.
            Este ano, foco em "Inovações Tecnológicas na Indústria".
          </p>
        </StyledFirstContent>

        <StyledSecondContent>
          <StyledIFTOLogoContainer>
            <img src={IFTOLogoImage} alt="IFTO" />
          </StyledIFTOLogoContainer>

          <StyledTextsContainer>
            <p>
              <a href="https://www.instagram.com/getec.ifto/" target="_blank">
                <img src={InstagramLogoImage} alt="instagram" /> <p>@getec.ifto</p>
              </a>
            </p>

            <p>
              <a
                href="https://www.instagram.com/ifto.araguaina/"
                target="_blank"
              >
                <img src={InstagramLogoImage} alt="instagram" /> <p>@ifto.araguaina</p>
              </a>
            </p>

            <p>
              <a href="https://www.instagram.com/ifto.oficial/" target="_blank">
                <img src={InstagramLogoImage} alt="instagram" /> <p>@ifto.oficial</p>
              </a>
            </p>
          </StyledTextsContainer>
        </StyledSecondContent>
      </StyledContent>

      <StyledCopyright>Copyright &copy; 2023 GETEC.</StyledCopyright>
    </StyledContainer>
  );
}

// 12.5%
