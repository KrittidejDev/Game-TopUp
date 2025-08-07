// import BgStandard from "./BgStandard";
import React from "react";
import { CardsGameContainer } from "./styled";

const CardsGame = ({ data }) => {
    return (
        <CardsGameContainer>
            <div className="images_card">
                <img className="images_game" src={data.image} alt="mobileLegendA" />
            </div>
            <p className="title_card">{data.title}</p>
            <p className="description_card">{data.description}</p>
            <div className="readmore_card">Lanjut<img src="/images/icons/read-more.png" alt="read more" /></div>
        </CardsGameContainer >
    )
};

export default CardsGame;