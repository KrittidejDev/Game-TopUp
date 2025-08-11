import { React,  useState } from "react";
import { PromotionContainer } from "./styled";
import { Mainlayouts } from "@/components";

function PromotionTabs() {
  const [activeTab, setActiveTab] = useState("all");
  const handleTabClick = () => {
    setActiveTab(tab);
  };

  return (
    <Mainlayouts.NavAndFooter>
      <PromotionContainer>
        <h1>โปรโมชั่น</h1>
        <div>
          <button></button>
        </div>
      </PromotionContainer>
    </Mainlayouts.NavAndFooter>
  );
};

export default PromotionTabs 
