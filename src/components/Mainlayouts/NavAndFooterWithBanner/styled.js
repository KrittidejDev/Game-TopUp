import styled from "styled-components";

export const NavAndFooterWithBannerStyles = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  display: flex;
  align-items: center;
  flex-direction: column;
  .content_container {
    width: 100%;
    max-width: 1200px;
  }
`;
