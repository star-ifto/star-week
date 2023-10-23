import { Title, AboutCard, GiantParagraph } from "..";
import CalendarImage from "../../assets/calendar.png";
import MoneyImage from "../../assets/money.png";
import CertificateImage from "../../assets/certificate.png";
import { StyledCardsContainer, StyledContainer } from "./styles";

interface IAboutSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function AboutSection({ ...rest }: IAboutSectionProps) {
  return (
    <StyledContainer type="secondary" {...rest}>
      <Title content="Sobre o Evento" />

      <GiantParagraph>
        A GETEC visa enriquecer acadêmicos e a comunidade de Araguaína com palestras, workshops e mesas redondas dedicados à exploração de inovações nas áreas de TI e Gestão.
        Este ano, o tema central é "Inovações Tecnológicas na Indústria: Desafios e Oportunidades".
        Como um evento anual, a GETEC promove a integração entre dois cursos de graduação do IFTO: Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) e Tecnólogo em Gestão da Produção Industrial (GPI), fomentando a colaboração entre ambas as disciplinas.
        Neste ano, a Semana será gerida e organizada pelos acadêmicos dos dois cursos em parceria com a comissão de docentes do Instituto que estão envolvidos com a idealização do evento.
      </GiantParagraph>

      <StyledCardsContainer>
        <AboutCard
          image={CalendarImage}
          title="3 dias de Evento"
          description={
            <>
              <span>Dia 22 a dia 24 de Novembro</span>
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
