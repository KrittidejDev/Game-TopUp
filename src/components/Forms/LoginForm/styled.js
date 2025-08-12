import styled from "styled-components";

export const LoginFormStyled = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 495px;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  .title_wrap {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .image_wrap {
      position: relative;
      width: 100px;
      height: 100px;
    }
    .title {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
  }
  .otp_login_wrap {
    .input_wrap {
      margin-bottom: 30px;
    }
  }
  .filter_wrap {
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-end;
    .btn_wrap {
      border: 1px solid ${({ theme }) => theme.COLORS.PINK_1};
      border-radius: 10px;
      padding: 4px;
      .filter_btn {
        border-radius: 10px;
        padding: 8px 10px;
        color: ${({ theme }) => theme.COLORS.PINK_1};
        &.active {
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          background: ${({ theme }) => theme.COLORS.PINK_1};
        }
      }
    }
  }
  .check_group {
    display: flex;
    column-gap: 10px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .btn_submit {
    margin-top: 20px;
    width: 100%;
    max-width: 495px;
    height: 40px;
    border-radius: 6px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    background-color: ${({ theme }) => theme.COLORS.YELLOW_1};
    cursor: pointer;
    &:disabled {
      background-color: ${({ theme }) => theme.COLORS.GRAY_1};
      cursor: not-allowed;
    }
  }

  @media (max-width: ${({ theme }) => theme.SCREENS.IPAD}) {
    margin-top: 20px;
  }
`;
