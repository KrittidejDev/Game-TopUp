import React from "react";
import { PromotionCardWrap } from "./styled";


function PromotionCard({data}) {
    return (
        <PromotionCardWrap>
             <div key={data.id} className="promotion_card_container">
                <a href="#"><img src={data.image} alt={data.title} className="promotion_card_img" /></a>
                <div className="label_container">
                <p className="date_style">{data.date}</p>
                <p className="label_style">{data.label}</p>
            </div>
            <a href="#" className="promotion_title">{data.title}</a></div>
        </PromotionCardWrap>
    );
}

export default PromotionCard;