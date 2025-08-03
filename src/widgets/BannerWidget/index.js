import { BannerWidgetContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const BannerWidget = (
  {
    /* data */
  }
) => {
  const data = [
    {
      title: "Termurah, Terpercaya, dan Aman",
      desc: "Supplier Top Up Instant Game & Voucher legal 100% open 24 Jam dengan payment terlengkap Indonesia",
      img_path: "/images/background/banner-bg.png",
      icon_img: "/images/icons/banner-game-1.png",
    },
    {
      title: "Termurah, Terpercaya, dan Aman",
      desc: "Supplier Top Up Instant Game & Voucher legal 100% open 24 Jam dengan payment terlengkap Indonesia",
      img_path: "/images/background/banner-bg.png",
      icon_img: "/images/icons/banner-game-1.png",
    },
    {
      title: "Termurah, Terpercaya, dan Aman",
      desc: "Supplier Top Up Instant Game & Voucher legal 100% open 24 Jam dengan payment terlengkap Indonesia",
      img_path: "/images/background/banner-bg.png",
      icon_img: "/images/icons/banner-game-1.png",
    },
  ];

  return (
    <BannerWidgetContainer>
      <Swiper
        className="mySwiper"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={3000}
        slidesPerView={"auto"}
        modules={[Autoplay]}
      >
        {data &&
          data.map((e, i) => (
            <SwiperSlide key={i} className="banner_item">
              <img className="banner_img" alt={e.alt} src={e.img_path} />
              <div className="bn_content_block">
                <div className="row_left">
                  <div className="bn_title">{e.title}</div>
                  <div className="bn_desc">{e.desc}</div>
                  <div className="bn_bottom_desc">
                    <span>Easy</span>
                    <div className="circle" />
                    <span>Fast</span>
                    <div className="circle" />
                    <span>24/7 Service</span>
                  </div>
                </div>
                <div className="bn_icon_wrap">
                  <img src={e.icon_img} alt="banner icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </BannerWidgetContainer>
  );
};

export default BannerWidget;
