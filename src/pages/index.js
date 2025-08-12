import { Mainlayouts } from "@/components";
import { HomeStyled } from "@/styles/HomeStyled";
import { BannerWidget, CardsWidget } from "@/widgets";
import { ContactUs } from "@/widgets/ContactUsWidget";
import { PromotionWidget } from "@/widgets/PromotionWidget";

export default function Home() {
  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <CardsWidget />
      <PromotionWidget />
    </Mainlayouts.NavAndFooterWithBanner>
  );
}
