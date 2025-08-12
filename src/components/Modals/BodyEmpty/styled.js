import styled from "styled-components";

export const BodyEmptyStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  z-index: 99;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .backdrop {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.COLORS.BLACK_1}66;
  }
  .modal_body_layout {
    position: relative;
    .btn_close_modal {
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 36px;
      border: 1px solid ${({ theme }) => theme.COLORS.GREEN_1};
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.WHITE_1};
      z-index: 2;
      cursor: pointer;
    }
  }

  &.theme_btm0 {
    @media (max-width: ${({ theme }) => theme.SCREENS.SURFACE_DUO}) {
      .modal_body_layout {
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        border-radius: 16px 16px 0 0;
        background: ${({ theme }) => theme.COLORS.WHITE_1};
      }
    }
  }
`;
