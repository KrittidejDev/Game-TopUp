import styled from "styled-components";

export const NavAndFooterStyles = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
`;

export const FooterStyles = styled.div`
  background: #1c1c1c;
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  padding: 2.5rem 1rem 1.5rem;
  overflow-x: clip; 

  .inner {
    width: 100%;  
    margin: 0 auto;
  }

  .article {
    display: flex;
    position:relative;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_2 || "#333"};
    flex-wrap: wrap; 
  }

  .arrow-btn {
    width: 45px;
    height: 81.67px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex: 0 0 auto; 
    margin: 0 50px; 
  }

  .image {
    height: auto;
    aspect-ratio: 452 / 360.65;
    border-radius: 10px;
    flex: 0 0 auto;
  }

  .content {
    flex: 1 1 360px; 
    min-width: 280px;
    display:flex;
    flex-direction:column;
  }

  .content h3 {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S42};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-weight: 700;
    margin-bottom: 0.5rem;
    line-height: 1.25;
  }

  .content p {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S26};
  }

  .content a {
    color: ${({ theme }) => theme.COLORS.ORANGE_1};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
    text-decoration: none;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S22};
    align-self: flex-end;   
  }

  .warning {

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #df2121;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
    padding-top: 32px;    /* ระยะบนล่างแบบกำลังดี */
    padding-bottom: 32px;
    text-align: center;
    background: #1c1c1c;
  }

  .warning img {
    width: 30px;
    height: 30px;
  }

  .copy {
    height: 80px;
    background: #101010;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    text-align: center;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
    padding: 12px 0;
    width: 100%;
    display: flex;       
    align-items: center;
    justify-content: center;
  }

  
  @media (max-width: 1024px) {
    .content h3 { font-size: ${({ theme }) => theme.FONTS.SIZES.S25}; }
    .content p  { font-size: ${({ theme }) => theme.FONTS.SIZES.S18}; }
    .arrow-btn  { height: 64px; width: 36px; }
  }

  @media (max-width: 768px) {
  .arrow-btn { display: none; }


  .article {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0 1.25rem;
  }

  .image {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }

  .content {
    width: 100%;
  }
  .content h3 {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S22};
    margin-top: .25rem;
  }
  .content p  {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    margin-bottom: .75rem;
  }

  .article { border-bottom-color: rgba(255,255,255,.08); }

  .warning {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    padding-top: 18px;
    padding-bottom: 18px;
    max-width: 90ch;      /* จำกัดความกว้างข้อความ */
    margin: 0 auto;
  }
}

`;