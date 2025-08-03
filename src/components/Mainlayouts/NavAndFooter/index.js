import React from "react";
import { NavAndFooterStyles } from "./styled";
import { NavbarWidget } from "@/widgets";

const NavAndFooter = ({ children }) => {
  return (
    <NavAndFooterStyles>
      <NavbarWidget />
      {children}
    </NavAndFooterStyles>
  );
};

export default NavAndFooter;
