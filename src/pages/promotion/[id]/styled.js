import styled from "styled-components";

export const PromotionDetailsId = styled.div`
  display: flex;
  flex-direction: column;

  .promotion_details_container {
    padding: 40px 140px;

    .label_title {
      color: #ffcb2c;
      font-size: 16px;
    }

    .promotion_title {
      font-size: 40px;
      font-weight: 600;
    }

    .details_title,
    .faq_title {
      margin-top: 40px;
      font-size: 20px;
      font-weight: 600;
    }

    .details_list,
    .faq_list {
      font-size: 16px;
      line-height: 30px;

      .list_margin {
        margin-top: 18px;
      }

      .gamingnationplay_link {
        text-decoration: underline;

        a {
          color: #d6214c;
        }
      }
    }
  }

  .package_register_card_wrap {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  .btn_wrap {
    display: flex;
    margin: 40px 0 25px 0;
    justify-content: center;
  }
}
`;