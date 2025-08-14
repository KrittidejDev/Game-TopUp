import styled from "styled-components";

export const GameRecommendCardWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .game_recommend_style {
        width: 294px;
        height: 193px;
        dispaly: flex;
        position: relative;
        clip-path: polygon(15% 0, 100% 0, 85% 100%, 0 100%);
    }

    .game_recommend_title_style {
            width: 244px;
            position: absolute;
            display: flex;
            flex-wrap: wrap;
        }
`