import { Title, AboutCard, GiantParagraph } from "..";
import CalendarImage from "../../assets/calendar.png";
import MoneyImage from "../../assets/money.png";
import CertificateImage from "../../assets/certificate.png";
import {
  StyledCardsContainer,
  StyledContainer,
  StyledTextContainer,
} from "./styles";

interface IAboutSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function AboutSection({ ...rest }: IAboutSectionProps) {
  return (
    <StyledContainer type="secondary" {...rest}>
      <Title content="Sobre o Evento" />

      <StyledTextContainer>
        <GiantParagraph className="paragraph">
          Durante a STAR, os participantes poderão conhecer as últimas
          tendências e avanços em tecnologia por meio de palestras, workshops e
          atividades interativas. É a oportunidade perfeita para aprender, fazer
          contatos e ampliar suas perspectivas profissionais e acadêmicas. Não
          perca a chance de participar e ver como a tecnologia pode moldar o
          futuro.
        </GiantParagraph>

        <GiantParagraph className="paragraph">
          Neste ano, o evento destacará três temas principais: água, cidades
          inteligentes e esportes. As atividades irão desde o desenvolvimento de
          jogos digitais e a gestão de recursos hídricos até soluções
          tecnológicas para cidades mais conectadas e eficientes. Descubra como
          essas áreas podem transformar a nossa realidade!
        </GiantParagraph>
      </StyledTextContainer>

      <StyledCardsContainer>
        <AboutCard
          image={CalendarImage}
          title="3 dias de Evento"
          description={
            <>
              <span>Dia 04 a dia 06 de Dezembro</span>
              <br />
              <span>Faça sua reserva</span>
            </>
          }
        />

        <AboutCard
          image={MoneyImage}
          title="GRATUITO"
          description={
            <>
              <span>Participação gratuita no evento!</span>
            </>
          }
        />

        <AboutCard
          image={CertificateImage}
          title={`Certificado de\n participação`}
          description={
            <>
              <span>Certificado gratuito</span>
              <br />
              <span>Necessário inscrição</span>
            </>
          }
        />
      </StyledCardsContainer>
    </StyledContainer>
  );
}
