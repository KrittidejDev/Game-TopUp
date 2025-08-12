import styled from "styled-components";
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

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
      margin-bottom: 20px;

      .left {
        flex: 1 1 auto;
        min-width: 0;

        .logo {
          display: inline-flex;

          .logo_img {
            height: 44px;
            width: auto;
            display: block;
            margin-bottom: 16px;
          }
        }

        .footer_menu {
          display: flex;
          flex-wrap: wrap;
          gap: 20px 28px;
          margin-bottom: 14px;

          .footer_menu_link {
            color: ${({ theme }) => theme.COLORS.WHITE_1};
            text-decoration: none;
            font-weight: 600;
            white-space: nowrap;
          }
        }

        .muted {
          color: ${({ theme }) => theme.COLORS.GRAY_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
          line-height: 1.4;
        }
      }

      .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 24px;
        flex-shrink: 0;
        flex-wrap: nowrap;
        min-width: 0;

        .actions {
          display: flex;
          gap: 12px;
          align-items: center;

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

            &:hover { opacity: .92; }
          }
        }

        
        .call {
          display: flex;
          align-items: baseline;   
          gap: 4px;
          white-space: nowrap;
          flex-direction: column;
          color: ${({ theme }) => theme.COLORS.WHITE_1};
  
  

          .label {
            color: ${({ theme }) => theme.COLORS.WHITE_1};
            font-size: 14px;
            line-height: 1;
            margin: 0;
          }

          .number {
            font-size: 32px;
            font-weight: 800;
            line-height: 1;
            color: ${({ theme }) => theme.COLORS.WHITE_1};
          }
        }
      }
    }

    .bottom {
      padding: 14px 0 26px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .policy {
        display: flex;
        gap: 36px;
        align-items: center;

        .policy_link {
          color: ${({ theme }) => theme.COLORS.GRAY_1};
          text-decoration: none;
          font-weight: 500;
          white-space: nowrap;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .inner {
      .top {
        flex-direction: column;
        align-items: stretch;
        gap: 24px;

        .right {
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
      }
      .bottom { justify-content: flex-end; }
    }
  }

  @media (max-width: 640px) {
    .inner {
      .top {
        .left { .footer_menu { gap: 12px 18px; } }

        .right {
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;

          .call .number { font-size: 28px; }
        }
      }

      .bottom { .policy { gap: 20px; } }
    }
  }
`;