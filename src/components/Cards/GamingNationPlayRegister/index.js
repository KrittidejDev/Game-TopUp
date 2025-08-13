import React from "react";
import { GamingNationPlayRegisterCardWrap } from "./styled";
import Network from "@/components/Icons/Network";
import Calender from "@/components/Icons/Calender";
import { Buttons } from "@/components";

function GamingNationPlayRegisterCard() {
  return (
    <GamingNationPlayRegisterCardWrap>
      <div className="register_card_container">
        <div className="package_header">
          <img src="" alt="" />
          <div className="header_title">
            <p className="header_detail">เล่นฟรี 1 วัน จ่าย 9 บาท/วัน</p>
            <p className="header_price">9 บาท</p>
          </div>
        </div>
        <div className="package_details">
          <div className="main_details">
            <div className="details_left">
              <div className="head_limited_container">
                <Network />
                <p className="head_limited">ไม่จำกัด</p>
              </div>
              <p className="detail_limited">เน็ตความเร็วสูง</p>
            </div>
            <div className="details_right">
              <div className="head_detail_container">
                <Calender />
                <p className="head_period">1 วัน</p>
              </div>
              <p className="detail_period">ระยะเวลาการใช้งาน</p>
            </div>
          </div>
          <div className="register_btn_container">
            <Buttons.Register />
          </div>
        </div>
        <div className="package_footer">
          <button>รายละเอียดเพิ่มเติม</button>
        </div>
      </div>
    </GamingNationPlayRegisterCardWrap>
  );
}

export default GamingNationPlayRegisterCard;
