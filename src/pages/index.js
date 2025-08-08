import { Mainlayouts } from "@/components";
import { HomeStyled } from "@/styles/HomeStyled";
import { BannerWidget, CardsWidget } from "@/widgets";
import { ContactUs } from "@/widgets/ContactUsWidget";

export default function Home() {
  return (
    <Mainlayouts.NavAndFooter>
      <BannerWidget />
      <ContactUs />
      <HomeStyled>
        <CardsWidget />
      </HomeStyled>
    </Mainlayouts.NavAndFooter>
  );
}
