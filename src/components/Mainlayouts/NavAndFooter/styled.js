import styled from "styled-components";

export const NavAndFooterStyles = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
`;


export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  padding: 2.5rem 1rem 1.5rem;
`;

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;


export const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ArticleContent = styled.div`
  flex: 1;
  min-width: 280px;

  h3 {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  }

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE_1};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


export const WarningBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 0.8rem;
  color: red;
  font-weight: 600;
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  padding-top: 0.75rem;
`;