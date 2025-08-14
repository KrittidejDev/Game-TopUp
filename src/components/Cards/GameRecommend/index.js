import React from "react";
import { GameRecommendCardWrap } from "./styled";

export function GameRecommendCards(props) {
    const {title, image} = props

  return (
    <GameRecommendCardWrap>
        <img
          src={image}
          alt=""
          className="game_recommend_style"
        />
        <h3 className="game_recommend_title_style">
          {title}
        </h3>
    </GameRecommendCardWrap>
  );
}
