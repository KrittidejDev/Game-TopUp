import PromotionCard from "@/components/Cards/Promotion";
import { PromotionContainer } from "./styled";

export function PromotionWidget() {
    return (
        <PromotionContainer>
        <div className="promotionContainer">
            <div className="menuContainer">
                <h2>Promotion</h2>
                <a href="#">
                    <img src="/images/promotion/promotion_arrow.png" alt="arrow" />
                </a>
            </div>
            <PromotionCard />
        </div>
        </PromotionContainer>
    );
}