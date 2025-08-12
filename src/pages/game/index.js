import { Mainlayouts } from "@/components";
import React from "react";
import { GameContainer } from "./styled";

const index = () => {
  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <GameContainer>Game</GameContainer>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

export default index;
