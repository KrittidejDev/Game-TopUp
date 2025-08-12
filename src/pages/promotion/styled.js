import styled from "styled-components";

export const PromotionContainer = styled.div`
  padding: 80px 20px;
  width: 100%
  max-width: 1200px;
  
    .promotion_page_title {
      font-size: 40px;
    }
`;

export const PromotionTabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .button_container {
        margin-top: 32px;

        button {
            color: white;
            font-size: 14px;
            font-weight: 600;
            padding: 3.5px 20.85px;
            margin-bottom: 32px;

            &.active {
                color: #D6214C;
                border-bottom: 3px solid #D6214C;
            }
        }
    }

    .promotion_cards_wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        

        .promotion_cards {
            display: flex;
            width: 400px;
            height: 309px;
        }
    }

    .special_for_you {
            display: flex;
            justify-content: center;
            font-size: 50px;
            font-weight: bold;
            margin-top: 50px;
        }
`;