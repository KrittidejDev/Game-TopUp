import React from "react";
import { PromotionCardWrap } from "./styled";


function PromotionCard({data}) {
    return (
        <PromotionCardWrap>
             <div key={data.id} className="promotionCardContainer">
                <a href="#"><img src="" alt="" /></a>
                <div className="labelContainer">
                <p className="dateStyle">{data.date}</p>
                <p className="labelStyle">{data.label}</p>
            </div>
            <a href="#">{data.title}</a></div>
        </PromotionCardWrap>
    );
}

export default PromotionCard;