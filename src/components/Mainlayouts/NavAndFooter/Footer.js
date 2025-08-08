import React from "react";
import Link from "next/link";
import { FooterStyles } from "./styled";

export default function Footer() {
  return (
    <FooterStyles>
      <div className="inner">

<div className="article">
  <button className="arrow-btn left"  type="button">
    <img src="/images/Footer/Arrowleft.svg" alt="previous" width={45} />
  </button>

          <img
            src="/images/Footer/Freefirefooter.png"
            alt="Free Fire X Assassins Creed"
            className="image"
          />

          <div className="content">
            <h3>FREE FIRE X ASSASSINS CREED</h3>
            <p>
              Free Fire X Assassins Creed segera tiba, apa saja yang baru dalam
              kolaborasi ini? Sederet konten bertema Assassins Creed bakalan hadir
              dalam kolaborasi FF X Assassins Creed ini.
            </p>
            <Link href="/blog/free-fire-x-assassins-creed">
              Lihat Selengkapnya →
            </Link>
          </div>

          <button className="arrow-btn" type="button">
            <img src="/images/Footer/Arrowright.svg" alt="next" width={45} />
          </button>
        </div>


        <div className="warning">
          <img src="/images/Footer/Vector.svg" alt="info" />
          Berhati-hatilah ketika kamu memilih tempat Top Up, pilihlah yang terpercaya
          dan aman dalam bertransaksi
        </div>

      </div>
      <div className="copy">Copyright © 2022 FUADSHOP</div>
    </FooterStyles>
  );
}