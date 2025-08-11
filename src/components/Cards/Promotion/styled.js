import styled from "styled-components";

export const PromotionCardWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

        .promotionCardContainer {
            dispaly: flex;
            flex-direction: column;
            width: 376px;
            height: 285px;
            padding: 12px;

                img {
                width: 374px;
                height: 187px;
                background-color: #ffffff;
        }

            .labelContainer {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;

                    .dateStyle {
                        background-color: rgba(255, 255, 255, 0.2);
                        padding: 4px 12px;
                        border-radius: 12px;
                    }

                    .labelStyle {
                        background-color: #DFA50E;
                        padding: 4px 12px;
                        border-radius: 4px;
                    }
            }

            a {
                color: #ffffff;
                font-size: 20px;
                font-weight: 700;
            }
    }

        
`
  