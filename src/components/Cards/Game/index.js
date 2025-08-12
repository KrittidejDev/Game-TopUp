// import BgStandard from "./BgStandard";
import React from "react";
import { CardsGameContainer } from "./styled";

const CardsGame = ({ data }) => {
    return (
        <CardsGameContainer>
            <div className="images_card">
                <p className="discount_card">{data.discount}</p>
                <img className="images_game" src={data.image} alt={data.title} />
            </div>
            <p className="title_card">{data.title}</p>
        </CardsGameContainer >
    )
};

export default CardsGame;