import styled from "styled-components";

export const BonusContainer = styled.div`
  
  max-width: 1728px;
  margin: 0 auto;
  padding: 96px 20px 160px;        
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLORS.WHITE_1};


    .banner {
    width: 100%;
    max-width: 1440px; 
    margin-inline: auto;
    margin-bottom: 48px;
  }
  .banner img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  .content{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;
  }

  .heading{
    font-size: ${({ theme }) => theme.FONTS.SIZES.S22};
    font-weight: 700;
    margin: 6px 0 12px;
  }

  .list{ list-style: none; padding: 0; margin: 0; }
  .list li{
    position: relative;
    padding-left: 18px;
    margin: 8px 0;
    line-height: 1.8;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
  }
  .list li::before{
    content: "•";
    position: absolute;
    left: 0; top: 0;
    line-height: 1.8;
    opacity: .8;
  }

  .note{
    margin-top: 12px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
  }

  .link{
    color: #f44336;              
    text-decoration: none;
    font-weight: 600;
  }
  .link:hover{ text-decoration: underline; }


  @media (max-width: 900px){
    padding: 72px 20px 120px;

    .banner{ width: 100%; }

    .content{
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 24px;
      max-width: 100%;
    }
  }
`;