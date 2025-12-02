import { ContentContainer, Header, Title } from "..";
import { Configs } from "../../configs";
import { StyledMainContainer, StyledRectangleGroup } from "./styles";
import RectangleGroupImage from "../../assets/rectangle-group.svg";
import Campus_Party_One from "../../assets/ifto-campus/campus-1.jpeg";
import Campus_Party_Two from "../../assets/ifto-campus/campus-2.jpeg";
import Campus_Party_Three from "../../assets/ifto-campus/campus-3.jpeg";
import Campus_Party_Four from "../../assets/ifto-campus/campus-4.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const carouselImages = [
  { id: 1, src: Campus_Party_One, alt: "Grupo de Pessoas" },
  { id: 2, src: Campus_Party_Two, alt: "Campus Party" }, 
  { id: 3, src: Campus_Party_Three, alt: "Minicursos" },
  { id: 4, src: Campus_Party_Four, alt: "Palestra" },   
];

export function HomeSection() {
  return (
    <ContentContainer className="home" type="primary">
      <Header />

      <StyledMainContainer>
        <div className="content-wrapper">
          <Title content="Semana de Tecnologia de Araguaína" color="white" />

          <p>
            Este evento, previsto para ocorrer anualmente, é uma celebração do conhecimento e da inovação, 
            criado por e para os alunos dos Cursos Técnico em Informática Integrado ao Ensino Médio e 
            Análise e Desenvolvimento de Sistemas, bem como sociedade araguainense em geral.
          </p>

          <a href={`#${Configs.Navigation.Inscription}`}>Inscrição</a>
        </div>

        <div className="carousel-wrapper">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true 
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false 
            }}
            loop={true}
            speed={800}
            style={{ 
              width: '100%', 
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            {carouselImages.map((image) => (
              <SwiperSlide key={image.id}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                  className="carousel-image"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 4s ease-in-out',
                    transform: 'scale(1)'
                  }} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </StyledMainContainer>

      <StyledRectangleGroup
        src={RectangleGroupImage}
        alt="Grupo de Retângulos"
      />
    </ContentContainer>
  );
}