import React, { useState } from "react";
import { PromotionContainer, PromotionTabsContainer } from "./styled";
import { Mainlayouts, Cards } from "@/components";
import { MOCKUP_PROMOTION_CARD } from "@/utils/dataMockup/promotionCardData";

function PromotionTabs() {
  const [activeTab, setActiveTab] = useState("all");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Mainlayouts.NavAndFooter>
      <PromotionContainer>
        <h1 className="promotion_page_title">โปรโมชั่น</h1>
          <PromotionTabsContainer>
      <div className="button_container">
        <button className={activeTab === "all" ? "active" : ""} onClick={() => handleTabClick("all")}>ทั้งหมด</button>
        <button className={activeTab === "special" ? "active" : ""} onClick={() => handleTabClick("special")}>พิเศษสำหรับคุณ</button>
      </div>

      <div>
        {activeTab === "all" && <div className="promotion_cards_wrap">
            {MOCKUP_PROMOTION_CARD && MOCKUP_PROMOTION_CARD.map((e) => {
                return <div className="promotion_cards" key={e.id}>
                  <Cards.PromotionCard data={e} />
                </div>
            })}</div>}
        {activeTab === "special" && <p className="special_for_you">นี่คือโปรโมชั่นพิเศษสำหรับคุณ</p>}
      </div>
    </PromotionTabsContainer>
      </PromotionContainer>
    </Mainlayouts.NavAndFooter>
  );
};

export default PromotionTabs 
