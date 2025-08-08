import React, { useState } from "react";
import { CardsWidgetContainer } from "./styled";
import { Cards } from "@/components";

const CardsWidget = () => {
  const [_filterBtnActice, _setFilterBtnActive] = useState(1);

  return (
    <CardsWidgetContainer>
      <div className="filter_wrap">
        <div className="filter_btn_row">
          <div
            className={`filter_btn  ${_filterBtnActice === 1 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(1)}
          >
            Game
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 2 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(2)}
          >
            Palsa
          </div>
          <div
            className={`filter_btn  ${_filterBtnActice === 3 ? "active" : ""}`}
            onClick={() => _setFilterBtnActive(3)}
          >
            Listrik
          </div>
        </div>
      </div>
      <div className="line" />
      {_filterBtnActice === 1 && (
        <div className="card_wrap">
          {_MOCKUP_CARD_GAME && _MOCKUP_CARD_GAME.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsGame data={e} />
            </div>
          ))}

        </div>
      )}

      {_filterBtnActice === 2 && (
        <div className="card_wrap">
          {_MOCKUP_CARD_PULSA && _MOCKUP_CARD_PULSA.map((e, i) => (
            <>
              <div>
                <img className="indexSearchPhone" src={logo_images_pic_3} alt="Pulsa-Logo" />
                </div>
              <div className="card_item" key={i}>
                <Cards.CardsPulsa data={e} />
              </div>
            </>
          ))}
        </div>
      )}

      {_filterBtnActice === 3 && (
        <div className="card_wrap">
          {_MOCKUP_CARD_LISTRIK && _MOCKUP_CARD_LISTRIK.map((e, i) => (
            <div className="card_item" key={i}>
              <Cards.CardsListrik data={e} />
            </div>
          ))}
        </div>
      )}
    </CardsWidgetContainer>
  );
};

//Card Tab Game
const _MOCKUP_CARD_GAME = [
  {
    id: 1,
    title: "Mobile Legend A",
    description: "Game arena pertempuran online multipemain seluler ...",
    image: "/images/Card/card-game/mobileLegendA.png",
  },
  {
    id: 2,
    title: "Mobile Legend B",
    description: "Game arena pertempuran online multipemain seluler ...",
    image: "/images/Card/card-game/mobileLegendB.png",
  },
  {
    id: 3,
    title: "Free Fire B",
    description: "Permainan battle royale yang dikembangkan ...",
    image: "/images/Card/card-game/FreeFireB.png",
  },
  {
    id: 4,
    title: "Arena of Valor",
    description: "Permainan video berjenis arena pertarungan daring...",
    image: "/images/Card/card-game/ArenaofValor.png",
  },
  {
    id: 5,
    title: "Gensin Impact",
    description: "Permainan video yang dikembangkan dan diterbitkan oleh...",
    image: "/images/Card/card-game/GensinImpact.png",
  },
  {
    id: 6,
    title: "PUBG",
    description: "Permainan video battle royale gratis dimainkan yang...",
    image: "/images/Card/card-game/PUBG.png",
  },
  {
    id: 7,
    title: "Call of Duty",
    description: "Waralaba permainan video penembak orang pertama,,,",
    image: "/images/Card/card-game/CallofDuty.png",
  },
  {
    id: 8,
    title: "Tower Of Fantasy",
    description: "RPG aksi dunia terbuka gratis yang dikembangkan...",
    image: "/images/Card/card-game/TowerOfFantasy.png",
  },
  {
    id: 9,
    title: "Lokapala",
    description: "Game esports pertama dari Indonesia yang...",
    image: "/images/Card/card-game/Lokapala.png",
  },
  {
    id: 10,
    title: "Game Lainnya",
    description: "Cek daftar game kamu",
    image: "/images/Card/card-game/GameLainnyaMore.png",
  },
]

//Card Tab Pulsa
const logo_images_pic_3 = "/images/Card/card-pulsa/pic_3.png";
const _MOCKUP_CARD_PULSA = [
  {
    id: 1,
    title: "Mobile Legend A",
    description: "Game arena pertempuran online multipemain seluler ...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 2,
    title: "Mobile Legend B",
    description: "Game arena pertempuran online multipemain seluler ...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 3,
    title: "Free Fire B",
    description: "Permainan battle royale yang dikembangkan ...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 4,
    title: "Arena of Valor",
    description: "Permainan video berjenis arena pertarungan daring...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 5,
    title: "Gensin Impact",
    description: "Permainan video yang dikembangkan dan diterbitkan oleh...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 6,
    title: "PUBG",
    description: "Permainan video battle royale gratis dimainkan yang...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 7,
    title: "Call of Duty",
    description: "Waralaba permainan video penembak orang pertama,,,",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 8,
    title: "Tower Of Fantasy",
    description: "RPG aksi dunia terbuka gratis yang dikembangkan...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 9,
    title: "Lokapala",
    description: "Game esports pertama dari Indonesia yang...",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
  {
    id: 10,
    title: "Game Lainnya",
    description: "Cek daftar game kamu",
    image: "/images/Card/card-pulsa/pic_3.png",
  },
]

//Card Tab Listrik
const _MOCKUP_CARD_LISTRIK = [
  {
    id: 1,
    title: "Mobile Legend A",
    description: "Game arena pertempuran online multipemain seluler ...",
    image: "/images/Card/card-listrik/mobileLegendA.png",
  },
  {
    id: 2,
    title: "Mobile Legend B",
    description: "Game arena pertempuran online multipemain seluler ...",
    image: "/images/Card/card-listrik/mobileLegendB.png",
  },
  {
    id: 3,
    title: "Free Fire B",
    description: "Permainan battle royale yang dikembangkan ...",
    image: "/images/Card/card-listrik/FreeFireB.png",
  },
  {
    id: 4,
    title: "Arena of Valor",
    description: "Permainan video berjenis arena pertarungan daring...",
    image: "/images/Card/card-listrik/ArenaofValor.png",
  },
  {
    id: 5,
    title: "Gensin Impact",
    description: "Permainan video yang dikembangkan dan diterbitkan oleh...",
    image: "/images/Card/card-listrik/GensinImpact.png",
  },
  {
    id: 6,
    title: "PUBG",
    description: "Permainan video battle royale gratis dimainkan yang...",
    image: "/images/Card/card-listrik/PUBG.png",
  },
  {
    id: 7,
    title: "Call of Duty",
    description: "Waralaba permainan video penembak orang pertama,,,",
    image: "/images/Card/card-listrik/CallofDuty.png",
  },
  {
    id: 8,
    title: "Tower Of Fantasy",
    description: "RPG aksi dunia terbuka gratis yang dikembangkan...",
    image: "/images/Card/card-listrik/TowerOfFantasy.png",
  },
  {
    id: 9,
    title: "Lokapala",
    description: "Game esports pertama dari Indonesia yang...",
    image: "/images/Card/card-listrik/Lokapala.png",
  },
  {
    id: 10,
    title: "Game Lainnya",
    description: "Cek daftar game kamu",
    image: "/images/Card/card-listrik/GameLainnyaMore.png",
  },
]

export default CardsWidget;

