import React from "react";
import { VipZoneContainer } from "./styled";
import { Mainlayouts } from "@/components";

const VipZone = () => {
  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <VipZoneContainer>
        <div className="vip_zone">
          <div className="vip_zone_header">
            <div className="vip_zone_logo">
              <img src="/images/vip-zone/GameNation.png" alt="vip-zone"></img>
            </div>
            <div className="vip_zone_line">
              <div className="vip_zone_title"> เปิดตัวแล้วกับ Gaming Nation  </div>
              <div className="vip_zone_subtitle">VIP</div>
            </div>
          </div>
          <div className="vip_zone_content"> 
            <div className="vip_zone_content_title">
              <span >เติมเกมสนุกยิ่งขี้น คุ้มกว่าเดิม!!</span>
            </div>
            <div className="vip_zone_content_subtitle">
              เติมเกมสนุกยิ่งขึ้น คุ้มกว่าเดิม!! เพียงเติมเกมครบ 600 บาท ใน 6 เดือน รับรางวัลพิเศษมากมาย
            </div>
          </div>
          <div className="vip_zone_main">
            <div className="top_up_privileges">
              <div className="top_up_privileges_title">สิทธิพิเศษต่างๆของเหล่านักเติม</div>
              {/* <Privileges /> */}
            </div>
            <div className="vip_zone_benefits">
              <div className="vip_zone_benefits_title">สิทธิพิเศษตามเงื่อนไขการใช้งาน</div>
              <div className="vip_zone_benefits_subtitle">
                ยิ่งเติมมาก ยิ่งได้มาก สิทธิพิเศษตามยอดสะสมที่มากขึ้นยิ่งได้รับความคุ้มค่าในทุกการใช้จ่าย
              </div>
            </div>
            <div className="vip_zone_levels">
              <div className="vip_zone_levels_title">ระดับของเหล่านักเติม</div>
              <div className="vip_levels">
                {memberships.map((item) => (
              <div key={item.id} className="vip_level">
                <img src={item.img} alt={item.text} />
                <span>{item.text}</span>
                <span>{item.price}</span>
              </div>
      ))}
              </div>
            </div>
          </div>
          <div className="vip_zone_footer">
            <p>เงื่อนไขและข้อตกลง</p>
            <ul className="terms_conditions">
            {termsData.map((term, index) => (
              <li key={index} className="terms_condition">
                {term}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </VipZoneContainer>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

const termsData = [
    "สำหรับลูกค้า Gaming Nation ที่ใช้บริการในนามบุคคลธรรมดาเท่านั้น",
    "ลูกค้าที่มีประวัติการใช้งานโค้ดส่วนลดสำหรับตัวแทนจำหน่ายจะไม่สามารถเข้าร่วม Gaming Nation VIP ได้",
    "ลูกค้าจะได้รับสิทธิพิเศษเป็น Bronze Member, Silver Member, Gold Member และ Ultimate Black Member เมื่อมียอดเติมเกมสะสมครบ 600, 3000, 10000 และ 30000 บาท ในระยะเวลา 6 เดือน โดยคำนวณจาก ระหว่างวันที่ 1 ม.ค. – 30 มิ.ย. 66 เพื่อรับสิทธิ พิเศษ ระหว่างวันที่ 1 ก.ค. – 31 ธ.ค. 66 และ ยอดสะสม ระหว่างวันที่ 1 ก.ค. – 31 ธ.ค. 66 เพื่อรับสิทธิ พิเศษ ระหว่างวันที่ วันที่ 1 ม.ค. – 30 มิ.ย. ของปีถัดไป **ลูกค้าจะได้รับการเปลี่ยนแปลงระดับสมาชิกสูงขึ้นทันที เมื่อมียอดเติมเกมสะสมถึงระดับที่กำหนด",
    "GN Coin และคูปองส่วนลด ที่ได้รับจะไม่สามารถแลกเปลี่ยนเป็นเงินสดได้ทุกกรณี",
    "GN Coin สามารถใช้เป็นส่วนลดในการเติมเกมบนเว็บ Gaming Nation ได้ไม่เกิน 20% ของยอดซื้อเท่านั้น",
    "กรณีมีแคมเปญพิเศษรับ GN Coin Cash Back หรือ รับ Coin เพิ่ม จะไม่สามารถร่วมรายการกับการได้รับ GN Coin เพิ่ม 1.1, 1.2, 1.5 และ 2 เท่า สำหรับ Bronze Member, Silver Member, Gold Member และ Ultimate Black Member แล้ว",
    "เมื่อทำรายการใช้ GN Coin และคูปองส่วนลดแล้ว จะไม่สามารถยกเลิกรายการได้ทุกกรณี",
    "GN Coin และคูปองส่วนลด ไม่สามารถโอนเปลี่ยนสิทธิ์ให้แก่บุคคลอื่นได้",
    "ลูกค้าจะได้รับสิทธิพิเศษสำหรับสมาชิกเมื่อได้รับการแจ้งจากบริษัทเท่านั้น",
    "คูปองส่วนลดจะได้รับทุกวันจันทร์ โดยมีระยะเวลาการใช้งานได้ 7 วันเท่านั้น",
    "สิทธิพิเศษต่างๆจะสิ้นสุดตามระยะเวลาที่บริษัทกำหนด",
    "ลูกค้าสามารถใช้สิทธิ์ได้ตามเงื่อนไขและสถานที่ที่บริษัทได้ระบุไว้เท่านั้น",
    "บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงคุณสมบัติของผู้ได้รับสิทธิ์รวมถึงการเปลี่ยนแปลง แก้ไข หรือยกเลิกบริการหรือสิทธิพิเศษโดยไม่ต้องแจ้งให้ทราบล่วงหน้า"
  ];

const memberships = [
    {
      id: 1,
      img: "/images/vip-zone/Bronze.svg",
      text: "Bronze Member",
      price: "600 THB"
    },
    {
      id: 2,
      img: "/images/vip-zone/Silver.svg",
      text: "Silver Member",
      price: "3,000 THB"
    },
    {
      id: 3,
      img: "/images/vip-zone/Gold.svg",
      text: "Gold Member",
      price: "10,000 THB"
    },
    {
      id: 4,
      img: "/images/vip-zone/UltimateBlack.svg",
      text: "Ultimate Black Member",
      price: "30,000 THB"
    }
  ];
export default VipZone;
