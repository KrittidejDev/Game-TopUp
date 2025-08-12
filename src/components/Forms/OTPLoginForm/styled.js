import styled from "styled-components";

export const OTPVerifyFormStyled = styled.div`
  margin: auto;
  border-radius: 32px;
  box-shadow: 0px 4px 8px 3px #00000026;
  padding: 32px 88px;
  width: calc(100% - 177px);
  max-width: 376px;
  display: flex;
  flex-direction: column;
  align-item: center;
  .title {
    width: 100%;
    margin-bottom: 16px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .sub_title {
    margin-bottom: 16px;
    text-align: center;
  }
  .count_down_label {
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    column-gap: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .req_again {
    margin-bottom: 63px;
    display: flex;
    flex-direction: column;
    align-item: center;
    .req_title {
      margin-bottom: 8px;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .req_btn_wrap {
      display: flex;
      justify-content: center;
    }
  }

  .input_wrap {
    margin-bottom: 33px;
    &.checkbox {
      padding: 0 20px;
    }
  }
  .capcha_wrap {
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .count_down_label {
    margin-top: 33px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GREEN_5};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }

  @media (max-width: ${({ theme }) => theme.SCREENS.IPAD}) {
    padding: 32px 26px;
    width: calc(100% - 52px);
  }
`;
