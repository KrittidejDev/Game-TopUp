import React from "react";
import Link from "next/link";
import { FooterStyles } from "./styled";

const FOOTER_MENU = [
  { label: "Home", routePath: "/" },
  { label: "Game", routePath: "/game" },
  { label: "Promotion", routePath: "/promotion" },
  { label: "VIP Zone", routePath: "/vip-zone" },
  { label: "About Us", routePath: "/about-us" },
  { label: "Bonus", routePath: "/bonus" },
];

export default function Footer() {
  return (
    <FooterStyles>
      <div className="inner">
        {/* Top row */}
        <div className="top">
          <div className="left">
            <Link className="logo" href="/">
              <img src="/images/footer/logo.png" alt="FUADSHOP" />
            </Link>

            <nav className="footer-menu">
              {FOOTER_MENU.map((item) => (
                <Link key={item.routePath} href={item.routePath}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="right">
            <div className="actions">
              <button type="button" className="btn">
                <img src="/images/footer/facebookicon.png" alt="" width={16} height={16} />
                ติดตามข่าวสาร
              </button>
              <button type="button" className="btn">
                <img src="/images/footer/callicon.png" alt="" width={16} height={16} />
                แจ้งเหตุขัดข้อง
              </button>
            </div>

            <div className="call">
              <span className="label">Call Center</span>
              <span className="number">1678</span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="company-info">
            2568 บมจ.โทเทิ่ล แอ็คเซ็ส คอมมูนิเคชั่น บริษัทในกลุ่มเทเลนอร์ | Operated by dtac
          </div>
          <div className="policy">
            <Link href="/terms">เงื่อนไขการใช้งาน</Link>
            <Link href="/privacy">นโยบายความเป็นส่วนตัว</Link>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}