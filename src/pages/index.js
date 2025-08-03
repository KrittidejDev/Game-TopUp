import { Mainlayouts } from "@/components";
import { HomeStyled } from "@/styles/HomeStyled";
import { BannerWidget } from "@/widgets";

export default function Home() {
  return (
    <Mainlayouts.NavAndFooter>
      <BannerWidget />
      <HomeStyled>home</HomeStyled>
    </Mainlayouts.NavAndFooter>
  );
}
