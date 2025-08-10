import styled from "styled-components";

export const PromotionCardContainer = styled.div`
    dispaly: flex;
    flex-direction: column;
    width: 376px;
    height: 285px;
    padding: 12px;
    margin-top: 8px;
    border: 1px solid red;

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
`
  