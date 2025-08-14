import styled from "styled-components";

export const GameRecommendedWidgetContainer = styled.div`
  .game_recommended_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    .game_recommended_title {
      font-size: 30px;
      font-weight: 700;
    }

    .line_decoration {
      width: 70px;
      height: 5px;
      background: linear-gradient(to right, #fdf092, #e398c1);
      margin-bottom: 80px;
    }

    .game_recommended_cards {
      display: flex;
      margin-bottom: 200px;
    }
  }
`;
