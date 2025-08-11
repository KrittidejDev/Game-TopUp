import styled from "styled-components";
export const AboutUsContainer = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLORS.WHITE_1};


  .banner{
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 40px;
  }
  .banner img{
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  .vip-section{ text-align: center; margin-bottom: 40px; }
  .vip-logo{ width: 422px; height: 231.8px; }
  .vip-title{
    font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
    font-weight: 700;
    margin-bottom: 12px;
  }
  .vip-desc{
    max-width: 800px;
    margin: 0 auto;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    line-height: 1.8;
  }


  .team-section{
    width: min(582px, 100%); 
    margin: 28px auto 0;     
    display: flex;
    flex-direction: column;
  }
  .team-title{
    font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
    font-weight: 700;
    margin-bottom: 16px;
    text-align: left;
  }
  .team-list{
    display: grid;
    gap: 16px;               
    width: 100%;
    margin-bottom: 80px;
  }

  .team-btn{
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
  }

  .team-btn img{ width: 28px; height: 28px; flex: 0 0 auto; }

  .team-btn .name{
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    line-height: 28px;          /* ตาม spec line height/28 */
    overflow-wrap: anywhere;
    text-align: center;
  }


  @media (max-width: 920px){
    .vip-logo{ width: 100%; height: auto; }
    .team-section{ width: min(100%, 600px); }
  }
`;