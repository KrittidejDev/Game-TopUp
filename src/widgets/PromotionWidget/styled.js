import styled from "styled-components";

export const PromotionContainer = styled.div`

    .menu_container {
        display: flex;
        justify-content: space-between;
        align-items: center;

            .promotion_title {
                background: linear-gradient(to right, rgba(84, 13, 30, 1), rgba(84, 13, 30, 0));
                padding: 5.5px 0 6.5px 24px;
                font-weight: 700;
                font-size: 28px;
            }

            .promotion_arrow {
                width: 7.41px;
                height: 12px;
                background: linear-gradient(to left, rgba(1, 64, 100, 1), rgba(1, 64, 100, 0));
                padding: 19px 16.02px 19px 40.58px;
                display: flex;
                align-items: center;
                border-right: 2px solid #0286FF;
            }
    }

    .promotion_card_wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .promotion_cards {
            display: flex;
            width: 400px;
            height: 309px;
        }
    }
`;