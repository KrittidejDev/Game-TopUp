import styled from "styled-components";

export const BannerWidgetContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK_2};
  box-sizing: border-box;
  overflow: hidden;
  .banner_item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 720px;
    /* aspect-ratio: 12 / 5; */
    .banner_img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      background-repeat: no-repeat;
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
    }
  }

  /* @media (max-width: 1280px) {
    .mySwiper {
      .banner_item {
        .bn_content_block {
          .bn_label_p1 {
            line-height: 120px;
            margin-bottom: 10px;
            font-size: ${({ theme }) => theme.FONTS.SIZES.S108};
            .bn_underline {
              height: 8px;
            }
          }
        }
        .bnp2p3_block {
          line-height: 70px;
          .bn_label_p2 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S54};
          }
          .bn_label_p3 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S54};
          }
        }
        .bn_label_p4 {
          margin-bottom: 50px;
          font-size: ${({ theme }) => theme.FONTS.SIZES.S30};
        }
        .bn_label_p5 {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S30};
          .bn_underline_p5 {
            height: 4px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.SCREENS.LAPTOP}) {
    .mySwiper {
      .banner_item {
        .bn_content_block {
          .bn_label_p1 {
            line-height: 100px;
            margin-bottom: 8px;
            font-size: ${({ theme }) => theme.FONTS.SIZES.S86};
            .bn_underline {
              height: 6px;
            }
          }
        }
        .bnp2p3_block {
          line-height: 60px;
          .bn_label_p2 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S45};
          }
          .bn_label_p3 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S45};
          }
        }
        .bn_label_p4 {
          margin-bottom: 40px;
          font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
        }
        .bn_label_p5 {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
          .bn_underline_p5 {
            height: 4px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.SCREENS.TABLET}) {
    .mySwiper {
      .banner_item {
        .bn_content_block {
          .bn_label_p1 {
            line-height: 80px;
            margin-bottom: 8px;
            font-size: ${({ theme }) => theme.FONTS.SIZES.S70};
            .bn_underline {
              height: 4px;
            }
          }
        }
        .bnp2p3_block {
          line-height: 50px;
          .bn_label_p2 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S35};
          }
          .bn_label_p3 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S35};
          }
        }
        .bn_label_p4 {
          margin-bottom: 30px;
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
        }
        .bn_label_p5 {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
          .bn_underline_p5 {
            height: 4px;
          }
        }
      }
    }
  }
  @media (max-width: 620px) {
    .mySwiper {
      .banner_item {
        .bn_content_block {
          .bn_label_p1 {
            line-height: 60px;
            margin-bottom: 8px;
            font-size: ${({ theme }) => theme.FONTS.SIZES.S58};
            .bn_underline {
              height: 4px;
            }
          }
        }
        .bnp2p3_block {
          line-height: 30px;
          .bn_label_p2 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S26};
          }
          .bn_label_p3 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S26};
          }
        }
        .bn_label_p4 {
          margin-bottom: 30px;
          font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
        }
        .bn_label_p5 {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
          .bn_underline_p5 {
            height: 4px;
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.SCREENS.MOBILE}) {
    .mySwiper {
      .banner_item {
        .bn_content_block {
          .bn_label_p1 {
            line-height: 46px;
            margin-bottom: 8px;
            font-size: ${({ theme }) => theme.FONTS.SIZES.S40};
            .bn_underline {
              height: 2px;
            }
          }
        }
        .bnp2p3_block {
          line-height: 20px;
          .bn_label_p2 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
          }
          .bn_label_p3 {
            font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
          }
        }
        .bn_label_p4 {
          margin-bottom: 10px;
          font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
        }
        .bn_label_p5 {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
          .bn_underline_p5 {
            height: 2px;
          }
        }
      }
    }
  } */
`;
