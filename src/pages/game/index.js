import { Mainlayouts } from "@/components";
import React from "react";
import { GameContainer } from "./styled";

const index = () => {
  return (
    <Mainlayouts.NavAndFooter>
      <GameContainer>Game</GameContainer>
    </Mainlayouts.NavAndFooter>
  );
};

export default index;
