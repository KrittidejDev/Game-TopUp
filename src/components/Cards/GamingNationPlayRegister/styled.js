import styled from "styled-components";

export const GamingNationPlayRegisterCardWrap = styled.div`
  .register_card_container {
    width: 376px;
    height: 421px;
    background-color: #f7f5ed;
    border-radius: 8px;

    .package_header {
      display: flex;
      padding: 24px 0 28px 24px;

      img {
        width: 108px;
        height: 108px;
        background-color: red;
        border-radius: 4px;
      }

      .header_title {
        color: #1a1a1a;
        margin-left: 15px;

        .header_detail {
          font-size: 12px;
          font-weight: 600;
        }

        .header_price {
          font-size: 16px;
          font-weight: 600;
          margin-top: 8px;
        }
      }
    }

    .package_details {
      background-color: #ffffff;
      height: 161px;

      .main_details {
        display: flex;
        justify-content: space-between;
        padding-top: 24px;
        padding-left: 24px;
        padding-right: 24px;

        .details_left,
        .details_right {
          display: flex;
          flex-direction: column;

          .head_limited_container,
          .head_detail_container {
            display: flex;
            gap: 8px;

            .head_limited,
            .head_period {
              color: #1a1a1a;
            }
          }

          .detail_limited,
          .detail_period {
            color: #767676;
            padding-left: 25px;
            line-height: 32px;
          }
        }
      }

      .register_btn_container {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
