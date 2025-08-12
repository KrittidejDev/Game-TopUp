import React from "react";
import { NavAndFooterWithBannerStyles } from "./styled";
import { BannerWidget, NavbarWidget } from "@/widgets";
import FooterWidget from "@/widgets/FooterWidget";

const NavAndFooterWithBanner = ({ children }) => {
  return (
    <NavAndFooterWithBannerStyles>
      <NavbarWidget />
      <BannerWidget />
      {children}
      <FooterWidget />
    </NavAndFooterWithBannerStyles>
  );
};

export default NavAndFooterWithBanner;
