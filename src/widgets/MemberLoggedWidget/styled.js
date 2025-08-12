import styled from "styled-components";

export const MemberLoggedWidgetStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 6px;
  cursor: pointer;
  .mbl_left_col {
    .name_label {
      margin-bottom: 3px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
    }
    .role_label {
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
    }
  }
  .mbl_right_col {
  }

  .btn_logout {
    position: absolute;
    bottom: -70px;
    right: 0px;
    box-shadow: -1px 1px 10px -1px rgb(0 0 0 / 13%);
    border-radius: 6px;
    padding: 10px 20px;
    min-width: 110px;
    background: ${({ theme }) => theme.COLORS.BLACK_3};
    z-index: 9999;
  }
`;
