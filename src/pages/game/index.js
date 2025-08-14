import { Mainlayouts } from "@/components";
import React from "react";
import { MOCK_CARD_GAME } from "@/utils/dataMockup/cardMockup";
import { Cards } from "@/components";
import { GameContainer } from "./styled";
import { CardsWidgetContainer } from "@/widgets/CardsWidget/styled";

const index = () => {
  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <CardsWidgetContainer>
        <GameContainer>
          <div className="title_list_card">เกมทั้งหมด</div>
          <div className="card_wrap">
            {MOCK_CARD_GAME && MOCK_CARD_GAME.map((e, i) => (
              <div className="card_item" key={i}>
                <Cards.CardsGame data={e} />
              </div>
            ))}
            <div className="end_list_card">สิ้นสุดรายการ</div>
          </div>
        </GameContainer>
      </CardsWidgetContainer>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

export default index;
