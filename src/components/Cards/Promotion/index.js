import { PromotionCardWrap } from "./styled";
import { MOCKUP_PROMOTION_CARD } from "@/utils/dataMockup/promotionCardData";

function PromotionCards() {
    return (
        <PromotionCardWrap>
            {
            MOCKUP_PROMOTION_CARD.map((e) => {
                return <div key={e.id} className="promotionCardContainer">
                <a href="#"><img src="" alt="" /></a>
                <div className="labelContainer">
                <p className="dateStyle">{e.date}</p>
                <p className="labelStyle">{e.label}</p>
            </div>
            <a href="#">{e.title}</a></div>
            })
            }
        </PromotionCardWrap>
    );
}

export default PromotionCards;