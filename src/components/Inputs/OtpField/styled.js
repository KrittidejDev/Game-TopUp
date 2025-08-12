import styled from "styled-components";

export const OtpFieldStyled = styled.div`
  width: 100%;
  .otp_input_container {
    width: 100%;
    .label {
      margin-bottom: 10px;
      color: ${({ theme, isErr }) =>
        isErr ? theme.COLORS.RED_1 : theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .otp_input {
      width: 100%;
      column-gap: 10px;
      .input_item {
        padding: 5% 0;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK_2};
        width: 100% !important;
        color: ${({ theme }) => theme.COLORS.WHITE_1} !important;
        font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        background: ${({ theme }) => theme.COLORS.BLUE_2};
      }
    }
    .errors {
      margin-top: 6px;
      padding-left: 16px;
      font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      color: ${({ theme }) => theme.COLORS.RED_1};
    }
  }

  .theme_standard {
  }
`;
