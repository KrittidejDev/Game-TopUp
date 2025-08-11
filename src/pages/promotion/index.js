import { React,  useState } from "react";
import { PromotionContainer } from "./styled";
import { Mainlayouts } from "@/components";
import { PromotionTabsWidget } from "@/widgets/PromotionWidget";

function PromotionTabs() {

  return (
    <Mainlayouts.NavAndFooter>
      <PromotionContainer>
        <h1>โปรโมชั่น</h1>
          <PromotionTabsWidget />
      </PromotionContainer>
    </Mainlayouts.NavAndFooter>
  );
};

export default PromotionTabs 
