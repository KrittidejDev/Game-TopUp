import styled from "styled-components";

export const GameRecommendedCardWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  clip-path: polygon(15% 0, 100% 0, 85% 100%, 0 100%);
  overflow: hidden;
  transition: transform 0.3s, filter 0.3s;

  .game_recommended_style {
    width: 294px;
    height: 193px;
    display: flex;
    filter: brightness(25%);
  }

  .game_recommended_title_style {
    width: 80%;
    position: absolute;
    bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    filter: brightness(45%);
  }

  &:hover {
    transform: scale(1.05);

    .game_recommended_style,
    .game_recommended_title_style {
      filter: brightness(100%);
    }
  }
`;
