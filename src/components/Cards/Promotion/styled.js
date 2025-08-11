import styled from "styled-components";

export const PromotionCardWrap = styled.div`
    width: 100vw;

        .promotionCardContainer {
            display: flex;
            flex-direction: column;
            padding: 12px;

                img {
                width: 374px;
                height: 187px;
                background-color: #ffffff;
        }

            .labelContainer {
                width: 374px;
                height: fit-content;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;
                margin: 8px 0;

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
                width: 374px;
                display: flex;
            }
    }
`
  