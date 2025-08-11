import { PromotionContainer } from "./styled";
import { MOCKUP_PROMOTION_CARD } from "@/utils/dataMockup/promotionCardData";
import { Cards } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";


export function PromotionWidget() {
    const router = useRouter();
    const currentPath = router.pathname;


    return (
        <PromotionContainer>
        <div className="promotionContainer">
            <div className="menuContainer">
                <h2>Promotion</h2>
                <Link href={"/promotion"}>
                    <img src="/images/promotion/promotion_arrow.png" alt="arrow" />
                </Link>
            </div>
            <div className="promotionCardsWrap">
            {MOCKUP_PROMOTION_CARD && MOCKUP_PROMOTION_CARD.map((e) => {
                return <div key={e.id}><Cards.PromotionCard data={e} /></div>
            })}</div>
        </div>
        </PromotionContainer>
    );
}