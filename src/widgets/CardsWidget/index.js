import React, { useState } from "react";
import { CardsWidgetContainer } from "./styled";
import { Cards } from "@/components";

const CardsWidget = () => {
  const [_filterBtnActice, _setFilterBtnActive] = useState(1);

  return (
    <CardsWidgetContainer>
      {/* <div className="filter_wrap">
        <div className="filter_btn_row">
          <div
            className={`filter_btn  ${_filterBtnActice === 1 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(1)}
          >
            Game
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 2 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(2)}
          >
            Palsa
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 3 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(3)}
          >
            Listrik
          </div>
        </div>
      </div>
      <div className="line" />
      {_filterBtnActice === 1 && (
        <div className="card_wrap">
          {_MOCKUP_CARD_GAME && _MOCKUP_CARD_GAME.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsGame data={e} />
            </div>
          ))}

        </div>
      )}

      {_filterBtnActice === 2 && (
        <div className="card_wrap">
          {_MOCKUP_CARD_PULSA && _MOCKUP_CARD_PULSA.map((e, i) => (
            <>
              <div>
                <img className="indexSearchPhone" src={logo_images_pic_3} alt="Pulsa-Logo" />
                </div>
              <div className="card_item" key={i}>
                <Cards.CardsPulsa data={e} />
              </div>
            </>
          ))}
        </div>
      )}

      {_filterBtnActice === 3 && (
        <div className="card_wrap">
          {_MOCKUP_CARD_LISTRIK && _MOCKUP_CARD_LISTRIK.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsListrik data={e} />
            </div>
          ))}
        </div>
      )} */}
    </CardsWidgetContainer>
  );
};

export default CardsWidget;

