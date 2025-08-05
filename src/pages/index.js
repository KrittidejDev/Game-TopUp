import { Mainlayouts } from "@/components";
import { HomeStyled } from "@/styles/HomeStyled";
import { BannerWidget, CardsWidget } from "@/widgets";

export default function Home() {
  return (
    <Mainlayouts.NavAndFooter>
      <BannerWidget />
      <HomeStyled>
        <CardsWidget />
      </HomeStyled>
    </Mainlayouts.NavAndFooter>
  );
}
