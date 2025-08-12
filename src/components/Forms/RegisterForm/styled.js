import styled from "styled-components";

export const RegisterFormStyled = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 495px;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  .title {
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
  }
  .sub_title {
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .input_wrap {
    &.mb_62 {
      margin-bottom: 62px;
    }
  }
  .btn_wrap {
    width: 100%;
    display: flex;
    justify-content: center;
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
