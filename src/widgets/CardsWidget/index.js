import React, { useState } from "react";
import { CardsWidgetContainer, GameInfoCard } from "./styled";

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
      {_filterBtnActice === 1 && <div className="card_wrap">
        
        <CardMockup title="Mobile Legend A" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Mobile Legend B" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Free Fire B" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Arena of Valor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Gensin Impact" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="PUBG" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Call of Duty" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Tower Of Fantasy" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Lakapala" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        <CardMockup title="Game Lainnya" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." link="See more" />
        
        </div>}

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

function CardMockup(props) {
  return (
    <div>
      <GameInfoCard>
      <div className="imgMockup"></div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href="#">{props.link}</a>
      </GameInfoCard>
      </div>
  );
}