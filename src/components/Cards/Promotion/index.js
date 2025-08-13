import React from "react";
import { PromotionCardWrap } from "./styled";

function PromotionCard({ data, onClickCard }) {
  return (
    <PromotionCardWrap onClick={onClickCard}>
      <div key={data.id} className="promotion_card_container">
        <img src={data.image} alt={data.title} className="promotion_card_img" />
        <div className="label_container">
          <p className="date_style">{data.date}</p>
          <p className="label_style">{data.label}</p>
        </div>
        <div className="promotion_title">{data.title}</div>
      </div>
    </PromotionCardWrap>
  );
}

export default PromotionCard;
