import { Mainlayouts } from "@/components";
import React from "react";
import Link from "next/link";
import { AboutUsContainer } from "./styled";

const TEAM = [
  { id: 1, name: "Krittidej JangAiem", github: "" },
  { id: 2, name: "WoraKorn RueangOamPhon", github: "" },
  { id: 3, name: "PHET45", github: "" },
  { id: 4, name: "Parinthon Jeansakwattana", github: "" },
  { id: 5, name: "Lullalin Wongwatcharanara", github: "" },
];

const AboutUs = () => {
  return (
    <Mainlayouts.NavAndFooter>
      <AboutUsContainer>

       
        <div className="banner">
          <img src="/images/aboutus/banner-aboutus.png" alt="Banner" />
        </div>

      
        <section className="vip-section">
          <img
            src="/images/aboutus/VIP.png"
            alt="VIP Logo"
            className="vip-logo"
          />
          <h2 className="vip-title">TECH UP FSD 9 THEME</h2>
          <p className="vip-desc">
            ทีมพัฒนาของฟูลสแตก Full Stack Development Theme 9 ที่รวบรวมทีมเพื่อสร้างแพลตฟอร์มเติมเกมที่ตอบโจทย์ทุกความต้องการของลูกค้า
            เน้นคุณภาพ ความรวดเร็ว ความปลอดภัย และใช้งานง่ายเพื่อให้ผู้เล่นทุกคนได้รับประสบการณ์ที่ดีที่สุด
          </p>
        </section>

        
        <section className="team-section">
          <h3 className="team-title">ทีมพัฒนา</h3>
          <div className="team-list">
            {TEAM.map((member) => (
              member.github ? (
                <Link key={member.id} href={member.github} target="_blank" className="team-btn">
                  <img src="/images/aboutus/iconname.png" alt="" aria-hidden="true" />
                  <span className="name">{member.name}</span>
                </Link>
              ) : (
                <button key={member.id} className="team-btn" disabled>
                  <img src="/images/aboutus/iconname.png" alt="" aria-hidden="true" />
                  <span className="name">{member.name}</span>
                </button>
              )
            ))}
          </div>
        </section>

      </AboutUsContainer>
    </Mainlayouts.NavAndFooter>
  );
};

export default AboutUs;