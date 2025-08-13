import styled from "styled-components";

export const PromotionCardWrap = styled.div`
    width: 100vw;
    cursor: pointer;

        .promotion_card_container {
            display: flex;
            flex-direction: column;
            padding: 12px;

                .promotion_card_img {
                width: 374px;
                height: 187px;
                background-color: #ffffff;
        }

            .label_container {
                width: 374px;
                height: fit-content;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;
                margin: 8px 0;

                    .date_style {
                        background-color: rgba(255, 255, 255, 0.2);
                        padding: 4px 12px;
                        border-radius: 12px;
                    }

                    .label_style {
                        background-color: #DFA50E;
                        padding: 4px 12px;
                        border-radius: 4px;
                    }
            }

            .promotion_title {
                width: fit-content;
                color: #ffffff;
                font-size: 20px;
                font-weight: 700;
                display: inline-flex;
            }
    }
`
  