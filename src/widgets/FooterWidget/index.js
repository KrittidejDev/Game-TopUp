import React from "react";
import Link from "next/link";
import { FooterStyles } from "./styled"; //

const FOOTER_MENU = [
  { label: "Home", routePath: "/" },
  { label: "Game", routePath: "/game" },
  { label: "Promotion", routePath: "/promotion" },
  { label: "VIP Zone", routePath: "/vip-zone" },
  { label: "About Us", routePath: "/about-us" },
  { label: "Bonus", routePath: "/bonus" },
];

export default function FooterWidget() {
  return (
    <FooterStyles>
      <div className="inner">
        {/* ===== TOP ===== */}
        <div className="top">
          <div className="left">
            <Link href="/" className="logo">
              <img
                src="/images/footer/logo.png"
                alt="FUADSHOP"
                className="logo_img"
              />
            </Link>

            <nav className="footer_menu">
              {FOOTER_MENU.map((item) => (
                <Link
                  key={item.routePath}
                  href={item.routePath}
                  className="footer_menu_link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <p className="muted">
              2568 บมจ.โทเทิ่ล แอ็คเซ็ส คอมมูนิเคชั่น บริษัทในกลุ่มเทเลนอร์ |
              Operated by dtac
            </p>
          </div>

          <div className="right">
            <div className="actions">
              <button type="button" className="btn">
                <img
                  src="/images/footer/facebookicon.png"
                  alt=""
                  width={16}
                  height={16}
                />
                ติดตามข่าวสาร
              </button>
              <button type="button" className="btn">
                <img
                  src="/images/footer/callicon.png"
                  alt=""
                  width={16}
                  height={16}
                />
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
          <div className="policy">
            <Link href="/terms" className="policy_link">
              เงื่อนไขการใช้งาน
            </Link>
            <Link href="/privacy" className="policy_link">
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
