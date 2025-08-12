import styled from "styled-components";

export const About_us_container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLORS.WHITE_1};

  .banner {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 40px;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }
  }

  .vip_section {
    text-align: center;
    margin-bottom: 40px;

    .vip_logo { width: 422px; height: 231.8px; }
    .vip_title {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
      font-weight: 700;
      margin-bottom: 12px;
    }
    .vip_desc {
      max-width: 800px;
      margin: 0 auto;
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      line-height: 1.8;
    }
  }

  .team_section {
    width: min(582px, 100%);
    margin: 28px auto 0;
    display: flex;
    flex-direction: column;

    .team_title {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
      font-weight: 700;
      margin-bottom: 16px;
      text-align: left;
    }

    .team_list {
      display: grid;
      gap: 16px;
      width: 100%;
      margin-bottom: 80px;

      .team_btn {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        min-height: 56px;
        padding: 12px 16px;
        background: #2a2a2a;
        border: 1px solid rgba(255,255,255,.08);
        border-radius: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-weight: 600;
        cursor: pointer;

        img { width: 28px; height: 28px; flex: 0 0 auto; }

        .name {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
          line-height: 28px;     /* spec: line height/28 */
          overflow-wrap: anywhere;
          text-align: center;
        }

        &:disabled { cursor: default; opacity: .85; }
      }
    }
  }

  @media (max-width: 920px) {
    .vip_section .vip_logo { width: 100%; height: auto; }
    .team_section { width: min(100%, 600px); }
  }
`;