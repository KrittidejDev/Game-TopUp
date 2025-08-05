import React, { useState } from "react";
import { CardsWidgetContainer } from "./styled";
import CardsGame from "../../components/Cards"

const CardsWidget = () => {
  const [_filterBtnActice, _setFilterBtnActive] = useState(1);

  return (
    <CardsWidgetContainer>
      <div className="filter_wrap">
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
            Listik
          </div>
        </div>
      </div>
      {_filterBtnActice === 1 && <div className="card_wrap"><CardsGame /></div>}

      {_filterBtnActice === 2 && (
        <div className="card_wrap">2222222222222222222222</div>
      )}

      {_filterBtnActice === 3 && (
        <div className="card_wrap">333333333333333333333333</div>
      )}
    </CardsWidgetContainer>
  );
};

export default CardsWidget;
