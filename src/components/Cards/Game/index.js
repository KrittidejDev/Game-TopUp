// import BgStandard from "./BgStandard";
import { CardsGameContainer } from "./styled";

const CardsGame = () => {
    return (
        <CardsGameContainer>
            <div className="group_card">
                <div className="images_card">
                    <img className="images_game" src="./images/card-game/mobileLegendA.png" alt="mobileLegendA" /></div>
                <p className="title_card">Mobile Legend A</p>
                <p className="description_card">Game arena pertempuran online multipemain seluler ...</p>
                <div className="readmore_card">Lanjut<img src="/images/icons/read-more.png" alt="read more" /></div>
            </div>
        </CardsGameContainer>
    )
};

export default CardsGame;