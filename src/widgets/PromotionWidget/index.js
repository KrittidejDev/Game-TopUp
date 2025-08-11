import { PromotionContainer, PromotionTabsContainer } from "./styled";
import { MOCKUP_PROMOTION_CARD } from "@/utils/dataMockup/promotionCardData";
import { Cards } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export function PromotionWidget() {
    const router = useRouter();
    const currentPath = router.pathname;


    return (
        <PromotionContainer>
        <div className="promotionContainer">
            <div className="menuContainer">
                <h2>Promotion</h2>
                <Link href={"/promotion"}>
                    <img src="/images/promotion/promotion_arrow.png" alt="arrow" />
                </Link>
            </div>
            <div className="promotionCardsWrap">
            {MOCKUP_PROMOTION_CARD && MOCKUP_PROMOTION_CARD.map((e) => {
                return <div key={e.id}><Cards.PromotionCard data={e} /></div>
            })}</div>
        </div>
        </PromotionContainer>
    );
}

export function PromotionTabsWidget() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <PromotionTabsContainer>
      <div className="buttonContainer">
        <button className={activeTab === "all" ? "active" : ""} onClick={() => handleTabClick("all")}>ทั้งหมด</button>
        <button className={activeTab === "special" ? "active" : ""} onClick={() => handleTabClick("special")}>พิเศษสำหรับคุณ</button>
      </div>

      <div>
        {activeTab === "all" && <div className="promotionCardsWrap">
            {MOCKUP_PROMOTION_CARD && MOCKUP_PROMOTION_CARD.map((e) => {
                return <div key={e.id}>
                  <Cards.PromotionCard data={e} />
                </div>
            })}</div>}
        {activeTab === "special" && <p className="specialForYouMockUp">นี่คือโปรโมชั่นพิเศษสำหรับคุณ Mockup</p>}
      </div>
    </PromotionTabsContainer>
  );
}
