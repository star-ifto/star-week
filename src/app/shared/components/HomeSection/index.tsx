import { ContentContainer, Header, Title } from "..";
import { Configs } from "../../configs";
import { StyledMainContainer, StyledRectangleGroup } from "./styles";
// import PeoplesGroupImage from "../../assets/peoples-group.png";
import RectangleGroupImage from "../../assets/rectangle-group.svg";

export function HomeSection() {
  return (
    <ContentContainer className="home" type="primary">
      <StyledRectangleGroup
        src={RectangleGroupImage}
        alt="Grupo de Retângulos"
      />

      <Header />

      <StyledMainContainer>
        <div>
          <Title content={`Semana De Gestão \ne Tecnologia`} color="white" />

          <p>
            Assista a palestras, workshops e mesas redondas ministrados por especialistas, incluindo líderes de empresas da região.
            A oportunidade de ampliar conhecimentos e fazer networking está à sua espera!
          </p>

          <a href={`#${Configs.Navigation.Inscription}`}>Inscrição</a>
        </div>

        {/* <img src={PeoplesGroupImage} alt="Grupo de Pessoas" /> */}
      </StyledMainContainer>
    </ContentContainer>
  );
}
