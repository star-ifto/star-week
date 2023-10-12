import ExemploPalestranteImage from "../../assets/exemplo-palestrante.jpg";
import { TimelineContainer, TimelineDate, TimelineSimpleContent } from "..";
import { TimelineContentWithImage } from "../TimelineContentWithImage";
import { StyledTimeline } from "./styles";
import { Fragment } from "react";

export function Timeline() {
  return (
    <StyledTimeline>
      {/* // ? DIA 22 / 11 */}
      <Fragment>
        <TimelineDate date="22 de novembro de 2023" />

        <TimelineContainer hour="18:30">
          <TimelineSimpleContent
            title="Boas vindas"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="19:00" right>
          <TimelineSimpleContent
            title="Abertura"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="19:30">
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" right>
          <TimelineSimpleContent
            title="Intervalo"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00">
          <TimelineSimpleContent
            title="Mesa Redonda / Workshop"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" right>
          <TimelineSimpleContent
            title="Sorteio de Brindes"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 23 / 11 */}
      <Fragment>
        <TimelineDate date="23 de novembro de 2023" color="secondary" />

        <TimelineContainer hour="19:00" color="secondary">
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00" right color="secondary">
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
            right
          />
        </TimelineContainer>

        <TimelineContainer hour="20:50" color="secondary">
          <TimelineSimpleContent
            title="Intervalo"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:00" right color="secondary">
          <TimelineSimpleContent
            title="Mesa Redonda / Workshop / Oficina"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00" color="secondary">
          <TimelineSimpleContent
            title="Encerramento"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 24 / 11 */}
      <Fragment>
        <TimelineDate date="24 de novembro de 2023" />

        <TimelineContainer hour="19:00" right>
          <TimelineContentWithImage
            title="Políticas Públicas em Saúde – Sistema único de Saúde/SUS"
            image={ExemploPalestranteImage}
            name="Joaquim Nascimento Fonseca da Cruz"
            description="Graduada em Direito especialista em Direito Civil pela PUC Minas, cursou Docência no Ensino Superior no Instituto Federal do Sul de Minas e é mestranda em Gestão Pública pela Universidade Federal de Alfenas. Consultora e docente na área da Infância e Juventude e políticas públicas em Assistência Social."
            right
          />
        </TimelineContainer>

        <TimelineContainer hour="20:00">
          <TimelineSimpleContent
            title="Mostra"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="21:30" right>
          <TimelineSimpleContent
            title="Sorteios"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>

        <TimelineContainer hour="22:00">
          <TimelineSimpleContent
            title="Encerramento"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          />
        </TimelineContainer>
      </Fragment>
    </StyledTimeline>
  );
}
