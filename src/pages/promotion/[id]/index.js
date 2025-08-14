import React from "react";
import { Mainlayouts } from "@/components";
import { PromotionDetailsId } from "./styled";
import { Cards } from "@/components";
import { Buttons } from "@/components";
import { MOCKUP_PACKAGE_DATA } from "@/utils/dataMockup/packageData";
import { GameRecommendCards } from "@/components/Cards/GameRecommend";

const PromotionDetails = () => {
  return (
    <Mainlayouts.NavAndFooterWithBanner>
      <PromotionDetailsId>
        <div className="promotion_details_container">
          <h6 className="label_title">พิเศษสำหรับคุณ</h6>
          <h1 className="promotion_title">
            เกมเมอร์ดีแทค เล่นเกมกว่า 1,800 เกม เพียง 9 บาท
          </h1>

          <h4 className="details_title">
            เกมเมอร์ดีแทค สัมผัสกับประสบการณ์ใหม่ในการเล่นเกม
            มันส์ไร้ขีดจำกัดเหนือจินตนาการ
          </h4>
          <ul className="details_list">
            <li>เกมชั้นนำกว่า 1800+ เกม</li>
            <li>รับชมวิดิโอคอนเทนต์กว่า 400 คลิป</li>
            <li>ไม่ต้องดาวน์โหลด หรืออัพเดตเกม</li>
            <li>เล่นได้กับสมาร์ทโฟนทุกรุ่น</li>
            <li>ไม่มีโฆษณาคั่น หรือการซื้อเกม</li>
            <li>ยกเลิกได้ตลอดเวลา</li>
            <li>เข้าร่วมการแข่งขันสาธารณะ</li>
            <li>จัดการแข่งขันส่วนตัวกับเพื่อน</li>
          </ul>

          <h4 className="faq_title">คำถามที่พบบ่อย :</h4>
          <ul className="faq_list">
            <li className="list_margin">
              จะเข้าสู่ระบบ Gaming Nation PLAY ได้อย่างไร
              <ul>
                <li>
                  คุณจะต้องเป็นลูกค้า dtac ที่ใช้ซิมแบบรายเดือนหรือแบบเติมเงิน
                  และเชื่อมต่ออินเทอร์เน็ต (3G / 4G / 5G)
                  ลูกค้าสามารถเข้าสู่ระบบ Gaming Nation Play ได้ 2ช่องทาง
                  ผ่านลิงก์ใน SMS ทีได้รับจาก Gameloft หรือเข้าจากเว็บโดยตรง
                  &nbsp;
                  <span className="gamingnationplay_link">
                    <a href="gamingnationplay.dtac.co.th">
                      gamingnationplay.dtac.co.th
                    </a>
                  </span>
                  &nbsp; และใส่หมายเลขโทรศัพท์ของคุณบนเว็บ จากนั้นจะได้รับรหัส
                  OTP ทาง SMS และนำไปกรอกใส่ในหน้าล็อคอินเพื่อเข้าสู่ระบบ
                </li>
              </ul>
            </li>
            <li className="list_margin">
              จำเป็นต้องดาวน์โหลดเกมหรือไม่
              <ul>
                <li>
                  ลูกค้าที่ใช้อุปกรณ์มือถือ Android สามารถเล่นเกมบนเว็บไซต์
                  หรือดาวน์โหลดลงเครื่องมาเล่นได้
                  ทั้งนี้ขึ้นอยู่กับชนิดของเกมนั้นๆ ลูกค้าที่ใช้อุปกรณ์มือถือ
                  iOS สามารถเล่นเกมบนเว็บได้ อย่างเดียว
                  ไม่สามารถดาวน์โหลดลงเครื่องมาเล่นได้
                </li>
              </ul>
            </li>
            <li className="list_margin">
              ประสบปัญหากับ Game Error หรืออื่นๆ
              <ul>
                <li>
                  สามารถโทร 02-105-5711 เพื่อติดต่อเจ้าหน้าที่ Gaming Nation
                  PLAY by Gameloft
                </li>
              </ul>
            </li>
            <li className="list_margin">
              ยกเลิกบริการยังไง
              <ul>
                <li>
                  ลูกค้าพิมพ์ C ส่ง SMS ไปที่ 45100XX โดยตัวเลขของชื่อ SMS
                  จะแตกต่างกันไปขึ้นอยู่กับแพ็กเกจ Gaming Nation PLAY
                  ที่ท่านได้สมัครไป หรือถ้าลูกค้าสมัครผ่านแพ็กเกจด้านล่างนี้
                  ท่านสามารถดูข้อมูลได้ที่ข้อกำหนดและเงื่อนไขของแพ็กเกจที่ท่านเลือก
                </li>
              </ul>
            </li>
            <li className="list_margin">
              ทำไมถึงไม่ได้สิทธ์ทดลองใช้ฟรี
              <ul>
                <li>
                  ถ้ามีการยกเลิกและสมัครใหม่ระหว่างช่วงระยะเวลาทดลองฟรีของแพ็กเกจที่กำหนด
                  การทดลองใช้ฟรีของคุณจะดำเนินการต่อจากครั้งที่กดยกเลิกไป
                  ในกรณีที่การทดลองใช้ฟรีครบตาม แพ็กเกจที่กำหนด
                  ท่านจะไม่ได้สิทธ์ทดลองใช้ฟรีแล้ว
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="package_register_card_wrap">
          {MOCKUP_PACKAGE_DATA &&
            MOCKUP_PACKAGE_DATA.map((e) => {
              return (
                <div className="package_register_cards" key={e.id}>
                  <Cards.GamingNationPlayRegisterCard
                    data={e}
                    onClickCard={() => _handleClickPromotion(e.id)}
                  />
                </div>
              );
            })}
        </div>
        <div className="btn_wrap">
          <Buttons.BgStandard
            theme_grow_pink
            type="submit"
            className="btn_submit"
            label={"เติมเกมกันเลย"}
          />
        </div>

        <div className="game_recommend_container">
          <h1>เกมแนะนำ</h1>
          <div className="line_decoration"></div>
          <div className="game_recommend_list">
              <GameRecommendCards image="/images/game-recommend/game_recommend_01.png" title="Ragnarok X: Next Generation" />
          </div>
        </div>
      </PromotionDetailsId>
    </Mainlayouts.NavAndFooterWithBanner>
  );
};

export default PromotionDetails;
