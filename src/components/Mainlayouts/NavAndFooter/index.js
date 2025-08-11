import React from "react";
import { NavAndFooterStyles } from "./styled";
import { NavbarWidget } from "@/widgets";
import Footer from "./footer"; // 

const NavAndFooter = ({ children }) => {
  return (
    <NavAndFooterStyles>
      <NavbarWidget />
      {children}
      <Footer />
    </NavAndFooterStyles>
  );
};

export default NavAndFooter;