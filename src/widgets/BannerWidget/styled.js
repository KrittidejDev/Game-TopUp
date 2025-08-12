import styled from "styled-components";

export const BannerWidgetContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK_3};
  box-sizing: border-box;
  overflow: hidden;
  .banner_item {
    margin-bottom: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 450px;
    aspect-ratio: 3.84/1;
    background-color: ${({ theme }) => theme.COLORS.BLACK_3};
    .row_left {
      position: relative;
      width: 50%;
      height: 100%;
      .banner_image {
        border: none;
        object-fit: contain;
      }
    }
    .row_right {
      position: relative;
      padding: 20px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .pay_bar_wrap {
        margin-bottom: 12px;
        display: flex;
        column-gap: 16px;
        .pay_bar {
          border: 1px solid ${({ theme }) => theme.COLORS.BLUE_1};
          border-radius: 4px;
          padding: 5px 13px;
          color: ${({ theme }) => theme.COLORS.BLUE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          white-space: nowrap;
        }
      }
      .title {
        margin-bottom: 8px;
        line-height: 44px;
        color: ${({ theme }) => theme.COLORS.YELLOW_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S42};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
      .sub_title {
        margin-bottom: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
    }
    .desc {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .btn_wrap {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  /* Navigation Arrows */
  .banner_navigation {
    .banner_arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-50%) scale(1.1);
      }

      /* Previous Arrow */
      &.banner_arrow_prev {
        left: 5px;
      }

      /* Next Arrow */
      &.banner_arrow_next {
        right: 5px;
      }
    }
  }

  /* Pagination Dots */
  .banner_pagination {
    position: absolute !important;
    bottom: 20px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    z-index: 10;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 8px;
    width: auto !important;

    /* Pagination Bullets */
    .swiper-pagination-bullet {
      width: 12px !important;
      height: 12px !important;
      background: ${({ theme }) => `${theme.COLORS.WHITE_1}80`} !important;
      border-radius: 50% !important;
      opacity: 1 !important;
      transition: all 0.3s ease !important;
      margin: 0 4px !important;

      /* Active Bullet */
      &.swiper-pagination-bullet-active {
        background: ${({ theme }) => theme.COLORS.WHITE_1} !important;
      }
    }
  }

  /* .banner_img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      object-position: center;
      object-fit: fill;
    }
    .bn_content_block {
      padding: 46px 0 128px 0;
      z-index: 2;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: ${({ theme }) => theme.ETC.BODY_CONTAINER};
      box-sizing: border-box;
      .row_left {
        width: 50%;
        .bn_title {
          margin-bottom: 26px;
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S60};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
        }
        .bn_desc {
          margin-bottom: 62px;
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        }
        .bn_bottom_desc {
          display: flex;
          align-items: center;
          column-gap: 40px;
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
          .circle {
            border-radius: 50%;
            width: 14px;
            height: 14px;
            background: ${({ theme }) => theme.COLORS.GRAY_1};
          }
        }
      }
      .bn_icon_wrap {
        width: 50%;
        max-height: 445px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
    } */
`;
