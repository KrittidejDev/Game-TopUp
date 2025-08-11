import React from "react";
import Link from "next/link";
import { Mainlayouts } from "@/components";
import { BonusContainer } from "./styled";

const HOW_TO_USE = [
  "100 GN Coin แลกส่วนลด 10 บาท",
  "500 GN Coin แลกส่วนลด 50 บาท",
  "1500 GN Coin แลกส่วนลด 150 บาท",
  "3000 GN Coin แลกส่วนลด 300 บาท",
  "5000 GN Coin แลกส่วนลด 500 บาท",
];

export default function Bonus() {
  return (
    <Mainlayouts.NavAndFooter>
      <BonusContainer>
       
        <div className="banner">
          <img src="/images/bonus/bonuspromo.png" alt="โบนัสพิเศษ" />
        </div>


        <section className="content">
          <div className="col">
            <h3 className="heading">วิธีเก็บ GN Coin</h3>
            <ul className="list">
              <li>รับ 1 GN Coin ทุกยอดการเติม 100 บาท</li>
              <li>
                รับ GN Coin เพิ่ม จากสิทธิสมาชิก{" "}
                <Link href="/gn-vip" className="link">
                  GN&nbsp;VIP
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h3 className="heading">วิธีใช้ GN Coin</h3>
            <ul className="list">
              {HOW_TO_USE.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <p className="note">
              *เงื่อนไขการใช้ GN Coin อาจมีการเปลี่ยนแปลงตามช่วงเวลา
              โปรดตรวจสอบข้อมูลล่าสุดบนหน้าเว็บไซต์
            </p>
          </div>
        </section>
      </BonusContainer>
    </Mainlayouts.NavAndFooter>
  );
}