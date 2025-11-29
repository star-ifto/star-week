import { TimelineContainer, TimelineDate, TimelineSimpleContent } from "..";
import { TimelineContentWithImage } from "../TimelineContentWithImage";
import { StyledTimeline } from "./styles";
import { Fragment } from "react";
import GeanSharly from "../../assets/speakers/gean-sharly.jpg";
import CharlesJefferson from "../../assets/speakers/professor-charles.jpeg";

export function Timeline() {
  return (
    <StyledTimeline>
      {/* // ? DIA 04 / 12 */}
      <Fragment>
        <TimelineDate date="04 de dezembro de 2025" />

        <TimelineContainer hour="18:30 - 19:30">
          <TimelineSimpleContent
            title="Credenciamento"
            content="Entrega de crachás e materias."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>

        <TimelineContainer hour="19:30 - 19:40" right>
          <TimelineSimpleContent
            title="Cerimônia de Abertura"
            content="Boas vindas e Apresentação do evento."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>

        <TimelineContainer hour="19:50 - 20:30">
          <TimelineContentWithImage
            title="Palestra de Abertura."
            image={GeanSharly}
            name="Gean Sharly"
            about_name="CEO da Nortesys"
            description="Mercado de trabalho na área de tecnologia: tendências e oportunidades para os próximos anos."
            address="Área de Convivência (Bloco 2)"
            />
        </TimelineContainer>

        <TimelineContainer hour="20:40 - 21:20" right>
          <TimelineContentWithImage
            title="💻 Palestra: Saúde 4.0: Indicadores em Tempo Real com Blockchain"
            image={CharlesJefferson}
            name="Charles Jefferson Rodrigres Alves"
            about_name="Doutorando em Engenharia de Produção e Sistemas, Me. Modelagem Computacional e Bsc. Análise de Sistemas"
            description="Resumo: Uma visão estratégica da saúde digital: transformar dados hospitalares fragmentados em indicadores confiáveis e em tempo real. Uma abordagem prática inovadora que fortalece decisões clínicas e gerenciais, promovendo mais segurança, agilidade e transparência por meio das tecnologias da Saúde 4.0."
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>

        <TimelineContainer hour="21:30 - 22:00">
          <TimelineSimpleContent
            title="☕ Coffee Break."
            content={`Visita aos estandes`}
            address="Área de Convivência (Bloco 2)"
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 05 / 12 */}
      <Fragment>
        <TimelineDate date="05 de dezembro de 2025" color="secondary" />

        <TimelineContainer hour="13:00 - 14:00" color="secondary">
          <TimelineSimpleContent
            title="👨🏻‍💻 Orientações para o Torneio de Programação"
            content="Limite de 20 vagas."
            address="Laboratório 2"
          />
        </TimelineContainer>

        <TimelineContainer hour="14:00 - 17:00" right color="secondary">
          <TimelineContentWithImage
            course={true}
            title="🖲️ Minicurso: Introdução ao Arduíno"
            image=""
            name="Juan Felipe"
            about_name="Dev na Nortesys e Formando em ADS - IFTO Araguaína"
            description="Aprenda os conceitos básicos do Arduíno, uma plataforma de prototipagem eletrônica de código aberto. Neste minicurso, você será introduzido ao ambiente de desenvolvimento, componentes eletrônicos e programação básica para criar seus próprios projetos interativos."
            address="Laboratório Maker"
            vacancy="Vagas disponíveis: 10"
            womanSpeaker
          />

            <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />

        <TimelineContentWithImage
            course={true}
            title="🤖 Minicurso: Desenvolvimento de um Bot no Discord"
            image=""
            name="Jhon Henrique e Flávio Manoel"
            about_name="Devs e Formandos em ADS - IFTO Araguaína"
            description="Mergulhe no mundo do desenvolvimento de bots para o Discord! Neste minicurso, você aprenderá a criar um bot funcional, integrando com 
            inteligência artificial e api do Discord,desde a configuração inicial até a implementação de comandos personalizados.
             Descubra como interagir com a API do Discord e adicionar funcionalidades divertidas e úteis ao seu servidor."
            vacancy="Vagas disponíveis: 25"
            address="Laboratório 1"
            womanSpeaker
            twoSpeakers={true}
          />

           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


          <TimelineContentWithImage
            course={true}
            title="🖥️ Minicurso: Introdução à Experiência de Usuário (UX)"
            image=""
            name="Aghata Magno"
            about_name="Dev Front-End e Formanda em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Experiência do Usuário (UX)! Neste minicurso, você aprenderá os princípios fundamentais de design centrado no usuário, incluindo pesquisa, prototipagem e testes de usabilidade. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Laboratório 2"
            vacancy="Vagas disponíveis: 20"
            womanSpeaker
            twoSpeakers={false}
          />


           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


            <TimelineContentWithImage
            course={true}
            title="🛜 Minicurso: Prática de Redes"
            image=""
            name="Danilo Borges"
            about_name="Técnico em Redes e Formando em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Prática de Redes! Neste minicurso, você aprenderá os princípios fundamentais de redes de computadores, incluindo topologias, protocolos e segurança. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Laboratório 4"
            vacancy="Vagas disponíveis: 15"
            womanSpeaker
            twoSpeakers={false}
          />

        </TimelineContainer>

        <TimelineContainer hour="17:00 - 18:00" color="secondary">
            <TimelineSimpleContent
            title="👨🏻‍💻 Orientações para o Torneio de Programação"
            content="Limite de 20 vagas."
            address="Laboratório 2"
          />
        </TimelineContainer>

        <TimelineContainer hour="19:00 - 21:00" right color="secondary">
          <TimelineContentWithImage
            course={true}
            title="🖲️ Minicurso: Introdução ao Arduíno"
            image=""
            name="Juan Felipe"
            about_name="Dev na Nortesys e Formando em ADS - IFTO Araguaína"
            description="Aprenda os conceitos básicos do Arduíno, uma plataforma de prototipagem eletrônica de código aberto. Neste minicurso, você será introduzido ao ambiente de desenvolvimento, componentes eletrônicos e programação básica para criar seus próprios projetos interativos."
            address="Laboratório Maker"
            vacancy="Vagas disponíveis: 10"
            womanSpeaker
          />

            <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />

        <TimelineContentWithImage
            course={true}
            title="🤖 Minicurso: Desenvolvimento de um Bot no Discord"
            image=""
            name="Jhon Henrique e Flávio Manoel"
            about_name="Devs e Formandos em ADS - IFTO Araguaína"
            description="Mergulhe no mundo do desenvolvimento de bots para o Discord! Neste minicurso, você aprenderá a criar um bot funcional, integrando com 
            inteligência artificial e api do Discord,desde a configuração inicial até a implementação de comandos personalizados.
             Descubra como interagir com a API do Discord e adicionar funcionalidades divertidas e úteis ao seu servidor."
            vacancy="Vagas disponíveis: 25"
            address="Laboratório 1"
            womanSpeaker
            twoSpeakers={true}
          />

           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


          <TimelineContentWithImage
            course={true}
            title="🖥️ Minicurso: Introdução à Experiência de Usuário (UX)"
            image=""
            name="Aghata Magno"
            about_name="Dev Front-End e Formanda em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Experiência do Usuário (UX)! Neste minicurso, você aprenderá os princípios fundamentais de design centrado no usuário, incluindo pesquisa, prototipagem e testes de usabilidade. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Laboratório 2"
            vacancy="Vagas disponíveis: 20"
            womanSpeaker
            twoSpeakers={false}
          />


           <hr style={{ 
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "20px 0" 
            }} />


            <TimelineContentWithImage
            course={true}
            title="🛜 Minicurso: Prática de Redes"
            image=""
            name="Danilo Borges"
            about_name="Técnico em Redes e Formando em ADS - IFTO Araguaína"
            description="Mergulhe no mundo da Prática de Redes! Neste minicurso, você aprenderá os princípios fundamentais de redes de computadores, incluindo topologias, protocolos e segurança. Prepare-se para criar experiências digitais que realmente atendam às necessidades dos usuários."
            address="Laboratório 4"
            vacancy="Vagas disponíveis: 15"
            womanSpeaker
            twoSpeakers={false}
          />
        </TimelineContainer>
      </Fragment>

      {/* // ? DIA 06 / 12 */}
      <Fragment>
        <TimelineDate date="06 de Dezembro de 2025" />

        <TimelineContainer hour="14:00 - 16:00">
            <TimelineSimpleContent  
              title="🧑‍💻 Torneio de Programação"
              content="Limite de 20 vagas."
              address="Laboratório 2"
            />
        </TimelineContainer>

        <TimelineContainer hour="20:00">
          <TimelineSimpleContent
            title="🧑‍🎓 Mesa redonda com egressos dos cursos Técnico em Informática Integrado ao Ensino Médio e Superior de Tecnologia em Análise e Desenvolvimento de Sistemas"
            content="Momento para interação entre os discentes dos cursos, com perguntas e respostas."
          />
        </TimelineContainer>
      </Fragment>
    </StyledTimeline>
  );
}
