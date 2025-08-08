import React from "react";
import Link from "next/link";
import {
  FooterContainer,
  ArticleWrapper,
  ArticleContent,
  ArrowButton,
  WarningBox,
  Copyright,
} from "./styled";

export default function Footer() {
  return (
    <FooterContainer>
      
      <ArticleWrapper>
        <ArrowButton type="button">
          <img
            src="/images/Footer/Arrowleft.svg"
            alt="ก่อนหน้า"
            width={30}
            height={30}
          />
        </ArrowButton>

        <img
          src="/images/Footer/Freefirefooter.png"
          alt="Free Fire Banner"
          width={250}
          height={180}
          style={{ borderRadius: "10px" }}
        />

        <ArticleContent>
          <h3>FREE FIRE X ASSASSINS CREED</h3>
          <p>
            Free Fire X Assassins Creed segera tiba, apa saja yang baru dalam
            kolaborasi ini? Sederet konten bertema Assassins Creed bakalan hadir
            dalam kolaborasi FF X Assassins Creed ini.
          </p>
          <Link href="/blog/free-fire-x-assassins-creed">
            Lihat Selengkapnya&nbsp;→
          </Link>
        </ArticleContent>

        <ArrowButton type="button">
          <img
            src="/images/Footer/Arrowleft.svg"
            alt="ถัดไป"
            width={30}
            height={30}
            style={{ transform: "rotate(180deg)" }}
          />
        </ArrowButton>
      </ArticleWrapper>

      <WarningBox>
        <img
          src="/images/Footer/Vector.svg"
          alt="warning"
          width={24}
          height={24}
        />
        <span>
          Berhati-hatilah ketika kamu memilih tempat Top Up, pilihlah yang
          terpercaya dan aman dalam bertransaksi
        </span>
      </WarningBox>


      <Copyright>Copyright © 2022 FUADSHOP</Copyright>
    </FooterContainer>
  );
}