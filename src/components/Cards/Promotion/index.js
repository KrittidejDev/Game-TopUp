import { PromotionCardContainer } from "./styled";

function PromotionCard() {
    return (
        <PromotionCardContainer>
            <a href="#"><img src="" alt="" /></a>
            <div className="labelContainer">
                <p className="dateStyle">Date mockup</p>
                <p className="labelStyle">Label mockup</p>
            </div>
            <a href="#">Promotion Title lorem Ipsum is simply dummy text.</a>
        </PromotionCardContainer>
    );
}

export default PromotionCard;