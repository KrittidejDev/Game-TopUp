import React, { useReducer, useState } from "react";
import { CardsWidgetContainer } from "./styled";
import { Cards } from "@/components";
import { Buttons } from "@/components"
import { MOCK_CARD_GAME } from "@/utils/dataMockup/cardMockup";
import { useRouter } from "next/router";

const CardsWidget = () => {
  const [_filterBtnActice, _setFilterBtnActive] = useState(1);

  const router = useRouter();

  const _handleClickGame = (id) => {
    router.push(`/purchase/${id}`);
  }

  const _handleViewMore = () => {
    router.push(`/game`);
  }

  return (
    <CardsWidgetContainer>
      <div className="filter_wrap">
        <div className="filter_btn_row">
          <div
            className={`filter_btn  ${_filterBtnActice === 1 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(1)}
          >
            <img src="/images/icons/Home/direct-top-up.png" alt="" />
            Direct top-up
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 2 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(2)}
          >
            <img src="/images/icons/Home/vouchers.png" alt="" />
            Vouchers
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 3 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(3)}
          >
            <img src="/images/icons/Home/cloud-gaming.png" alt="" />
            Cloud Gaming
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 4 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(4)}
          >
            <img src="/images/icons/Home/game-product.png" alt="" />
            Game Product
          </div>
        </div>
      </div>

      {_filterBtnActice === 1 && (
        <div className="card_wrap">
          {MOCK_CARD_GAME && MOCK_CARD_GAME.map((e, i) => (
            <div className="card_item" key={i}>
              <div className="card_game_link" key={e.id} onClick={() => _handleClickGame(e.id)}><Cards.CardsGame data={e} /></div>
            </div>
          ))}
        </div>
      )}

      {_filterBtnActice === 2 && (
        <div className="card_wrap">
          {MOCK_CARD_GAME && MOCK_CARD_GAME.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsGame data={e} />
            </div>
          ))}
        </div>
      )}

      {_filterBtnActice === 3 && (
        <div className="card_wrap">
          {MOCK_CARD_GAME && MOCK_CARD_GAME.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsGame data={e} />
            </div>
          ))}
        </div>
      )}

      {_filterBtnActice === 4 && (
        <div className="card_wrap">
          {MOCK_CARD_GAME && MOCK_CARD_GAME.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsGame data={e} />
            </div>
          ))}
        </div>
      )}
      <Buttons.MoreGame onClickView={_handleViewMore}/>
    </CardsWidgetContainer>
  );
};

export default CardsWidget;

