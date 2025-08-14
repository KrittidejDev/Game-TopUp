import React from "react";
import { GameRecommendedWidgetContainer } from "./styled";
import { RECOMMENDED_GAMES } from "@/utils/dataMockup/recommendedGamesData";
import { GameRecommendedCards } from "@/components/Cards/GameRecommended";

function GameRecommendedWidget() {
  return (
    <GameRecommendedWidgetContainer>
      <div className="game_recommended_wrap">
        <h1 className="game_recommended_title">เกมแนะนำ</h1>
        <div className="line_decoration"></div>
        <div className="game_recommended_cards">
          {RECOMMENDED_GAMES &&
            RECOMMENDED_GAMES.map((e) => (
              <div key={e.id}>
                <GameRecommendedCards
                  data={e}
                  image={e.image}
                  title={e.title}
                />
              </div>
            ))}
        </div>
      </div>
    </GameRecommendedWidgetContainer>
  );
}

export default GameRecommendedWidget;
