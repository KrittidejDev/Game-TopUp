import React from "react";
import { NavAndFooterStyles } from "./styled";
import { NavbarWidget } from "@/widgets";
import Footer from "./Footer";

const NavAndFooter = ({ children }) => {
  return (
    <NavAndFooterStyles>
      <NavbarWidget />
      {children}
      {/* footerwidgets */}
    </NavAndFooterStyles>
  );
};

export default NavAndFooter;
