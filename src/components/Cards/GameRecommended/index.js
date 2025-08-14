import React from "react";
import { GameRecommendedCardWrap } from "./styled";

export function GameRecommendedCards({data}) {
  return (
    <GameRecommendedCardWrap>
        <img
          src={data.image}
          alt={data.title}
          className="game_recommended_style"
        />
        <h3 className="game_recommended_title_style">
          {data.title}
        </h3>
    </GameRecommendedCardWrap>
  );
}
