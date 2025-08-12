import React from "react";
import { NavAndFooterWithBannerStyles } from "./styled";
import { BannerWidget, NavbarWidget } from "@/widgets";
// import Footer from "./Footer"; //

const NavAndFooterWithBanner = ({ children }) => {
  return (
    <NavAndFooterWithBannerStyles>
      <NavbarWidget />
      <BannerWidget />
      {children}
      {/* <Footer /> */}
    </NavAndFooterWithBannerStyles>
  );
};

export default NavAndFooterWithBanner;
