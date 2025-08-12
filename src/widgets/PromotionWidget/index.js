import { PromotionContainer } from "./styled";
import { MOCKUP_PROMOTION_CARD } from "@/utils/dataMockup/promotionCardData";
import { Cards } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export function PromotionWidget() {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <PromotionContainer>
        <div className="promotion_container">
            <div className="menu_container">
                <h2 className="promotion_title">Promotion</h2>
                <Link href={"/promotion"}>
                    <img className="promotion_arrow" src="/images/promotion/promotion_arrow.png" alt="arrow" />
                </Link>
            </div>
            <div className="promotion_card_wrap">
            {MOCKUP_PROMOTION_CARD && MOCKUP_PROMOTION_CARD.map((e) => {
                return <div className="promotion_cards" key={e.id}><Cards.PromotionCard data={e} /></div>
            })}</div>
        </div>
        </PromotionContainer>
    );
}