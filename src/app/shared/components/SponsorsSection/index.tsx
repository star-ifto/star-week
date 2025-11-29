import { Title } from "..";
import { SponsorCard } from "../SponsorCard";
import { StyledContainer, StyledSponsorsContainer } from "./styles";

import nortesys from "../../assets/sponsors/logo nortesys.png";


interface ISponsorProps {
  image: string;
  title: string;
  description: string;
  instagram: string;
}

interface ISponsorsSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const SPONSORS: ISponsorProps[] = [
  {
    title: "Nortesys",
    image: nortesys,
    description:
      "Imagine uma empresa que não vende apenas software, mas sim um futuro melhor para o Brasil. Essa é a Nortesys! Não estamos aqui apenas para lucrar, mas para fazer a diferença.",
    instagram: "nortesystec",
  },
  
];

export function SponsorsSection({ ...rest }: ISponsorsSectionProps) {
  return (
    <StyledContainer type="tertiary" {...rest}>
      <Title content="Conheça nossos patrocinadores" />

      <StyledSponsorsContainer>
        {SPONSORS.map((sponsor, k) => (
          <SponsorCard
            key={k}
            image={sponsor.image}
            title={sponsor.title}
            description={sponsor.description}
            instagram={sponsor.instagram}
          />
        ))}
      </StyledSponsorsContainer>
    </StyledContainer>
  );
}
