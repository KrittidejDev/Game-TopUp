import React from "react";
import { VipZoneContainer } from "./styled";
import { Mainlayouts } from "@/components";

const VipZone = () => {
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
  return (
    <Mainlayouts.NavAndFooter>
      <VipZoneContainer>
        <div className="vip-zone-banner">
            {/* <img src="/images/vip-zone/AdsImg.png" alt="vip-zone" /> */}
        </div>
        <section>
          <div className="vip-zone-header">
            <div>
              <img src="/images/vip-zone/GameNation.png" alt="vip-zone"></img>
            </div>
             <h1> เปิดตัวแล้วกับ Gaming Nation VIP </h1>
          </div>
          <div className="vip-zone-content"> 
            <p>
              <span >เติมเกมสนุกยิ่งขี้น คุ้มกว่าเดิม!!</span>
            </p>
            <p>
              เติมเกมสนุกยิ่งขึ้น คุ้มกว่าเดิม!! เพียงเติมเกมครบ 600 บาท ใน 6 เดือน รับรางวัลพิเศษมากมาย
            </p>
          </div>
          <main className="vip-zone-main">
            <div className="top-up-privileges">
              <h2>สิทธิพิเศษต่างๆของเหล่านักเติม</h2>
              {/* <Privileges /> */}
            </div>
            <div className="vip-zone-benefits">
              <h2>สิทธิพิเศษตามเงื่อนไขการใช้งาน</h2>
              <p>
                ยิ่งเติมมาก ยิ่งได้มาก สิทธิพิเศษตามยอดสะสมที่มากขึ้นยิ่งได้รับความคุ้มค่าในทุกการใช้จ่าย
              </p>
            </div>
            <div className="vip-zone-levels">
              <h2>ระดับของเหล่านักเติม</h2>
              <div className="vip-levels">
                <div> Bronze </div>
                <div> Silver </div>
                <div> Gold</div>
                <div> Ultimate Black Member</div>
              </div>
            </div>
          </main>
          <footer className="vip-zone-footer">
            <p>เงื่อนไขและข้อตกลง</p>
            <ul className="terms-conditions">
            {termsData.map((term, index) => (
              <li key={index} className="text-gray-700 leading-relaxed">
                {term}
              </li>
              ))}
            </ul>
          </footer>
        </section>
      </VipZoneContainer>
    </Mainlayouts.NavAndFooter>
  );
};

export default VipZone;
