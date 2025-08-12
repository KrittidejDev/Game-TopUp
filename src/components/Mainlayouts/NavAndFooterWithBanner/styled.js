import styled from "styled-components";

export const NavAndFooterWithBannerStyles = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
`;

export const FooterStyles = styled.footer`
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  padding: 28px 0 0;

  .inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 20px;
  }

  .left {
    flex: 1;
  }

  .left .logo img {
    height: 44px;
    width: auto;
    display: block;
    margin-bottom: 16px;
  }

  .footer-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 28px;
    margin-bottom: 14px;
  }

  .footer-menu a {
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    text-decoration: none;
    font-weight: 600;
  }

  .muted {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    line-height: 1.4;
  }

  .right {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
  }

  .actions {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #333333;
    border: 0;
    border-radius: 8px;
    padding: 10px 16px;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    cursor: pointer;
    font-weight: 600;
    white-space: nowrap;
    font-size: 14px;
  }

  .call {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    white-space: nowrap;
  }

  .call .label {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: 14px;
    line-height: 1;
    margin: 0;
  }

  .call .number {
    font-size: 32px;
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
  }

  .bottom {
    padding: 14px 0 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .company-info {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: 500;
  }

  .policy {
    display: flex;
    gap: 36px;
    align-items: center;
  }

  .policy a {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    text-decoration: none;
    font-weight: 500;
    white-space: nowrap;
    font-size: 14px;
  }

  @media (max-width: 992px) {
    .top {
      flex-direction: column;
      gap: 24px;
    }

    .right {
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .bottom {
      justify-content: space-between;
    }
  }

  @media (max-width: 640px) {
    .footer-menu {
      gap: 12px 18px;
    }

    .call .number {
      font-size: 28px;
    }

    .right {
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }

    .policy {
      gap: 20px;
    }
  }
`;
