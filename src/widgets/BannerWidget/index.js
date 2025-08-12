import { BannerWidgetContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MOCKUP_PROMOTION_BANNER } from "@/utils/dataMockup/promotionCardData";
import { Buttons, Icons } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";

const BannerWidget = (
  {
    /* data */
  }
) => {
  const router = useRouter();
  const bannerDefault = "/images/banner/bn-default.png";
  const data = MOCKUP_PROMOTION_BANNER;

  const _handleClickPromotion = (id) => {
    router.push(`/promotion/${id}`);
  };

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
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          prevEl: ".banner_arrow_prev",
          nextEl: ".banner_arrow_next",
        }}
        pagination={{
          clickable: true,
          el: ".banner_pagination",
        }}
      >
        {data &&
          data.map((e, i) => (
            <SwiperSlide key={i} className="banner_item">
              <Image
                src={e.image}
                alt="banner background"
                fill
                style={{
                  objectFit: "cover",
                  filter: "blur(100px) brightness(0.6)",
                }}
                priority
              />
              <div className="row_left">
                <Image className="banner_image" src={e.image} alt="" fill />
              </div>
              <div className="row_right">
                <div className="pay_bar_wrap">
                  {e.paymentMethods &&
                    e.paymentMethods.map((e, i) => (
                      <div key={i} className="pay_bar">
                        {e}
                      </div>
                    ))}
                </div>
                <div className="title">{e.title}</div>
                <div className="sub_title">{e.subtitle}</div>
                <div className="desc">{e.description}</div>
                <div className="btn_wrap">
                  <Buttons.BgStandard
                    theme_grow_pink
                    label={"รับโปรโมชั่น"}
                    onClick={() => _handleClickPromotion(e.id)}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="banner_navigation">
        <button className="banner_arrow banner_arrow_prev">
          <Icons.ArrowLeft />
        </button>
        <button className="banner_arrow banner_arrow_next">
          <Icons.ArrowRight />
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="banner_pagination"></div>
    </BannerWidgetContainer>
  );
};

export default BannerWidget;
