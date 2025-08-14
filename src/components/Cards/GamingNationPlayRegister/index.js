import React from "react";
import { GamingNationPlayRegisterCardWrap } from "./styled";
import Network from "@/components/Icons/Network";
import Calender from "@/components/Icons/Calender";
import DownArrow from "@/components/Icons/ArrowDown";
import { Buttons } from "@/components";
import { useState } from "react";

export function _Accordion({ details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion_container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="more_details_toggle"
      >
        รายละเอียดเพิ่มเติม
        <DownArrow />
      </button>

      {isOpen && (
        <div className="showed_details">{details}</div>
      )}
    </div>
  );
}

function GamingNationPlayRegisterCard({data}) {

  return (
    <GamingNationPlayRegisterCardWrap>
      <div key={data.id} className="register_card_container">
        <div className="package_header">
          <img src={data.image} alt={data.title} />
          <div className="header_title">
            <p className="header_detail">{data.title}</p>
            <p className="header_price">{data.price}</p>
          </div>
        </div>
        <div className="package_details">
          <div className="main_details">
            <div className="details_left">
              <div className="head_limited_container">
                <Network />
                <p className="head_limited">{data.speedLimit}</p>
              </div>
              <p className="detail_limited">เน็ตความเร็วสูง</p>
            </div>
            <div className="details_right">
              <div className="head_detail_container">
                <Calender />
                <p className="head_period">{data.period}</p>
              </div>
              <p className="detail_period">ระยะเวลาการใช้งาน</p>
            </div>
          </div>
          <div className="register_btn_container">
            <Buttons.Register />
          </div>
        </div>
        <div className="package_footer">
          <_Accordion details={data.details} />
        </div>
      </div>
    </GamingNationPlayRegisterCardWrap>
  );
}

export default GamingNationPlayRegisterCard;
