import styled from "styled-components";

export const NavbarWidgetStyles = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  .nav_container {
    width: 100%;
    max-width: ${({ theme }) => theme.ETC.BODY_CONTAINER};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav_menu_list {
    max-width: 60%;
    flex: 1;
    display: flex;
    column-gap: 24px;
    align-items: center;
    justify-content: space-between;
    .menu_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 5px;
      color: ${({ theme }) => theme.COLORS.GRAY_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      white-space: nowrap;
      &:hover {
        color: ${({ theme }) => theme.COLORS.ORANGE_1};
      }
      &.active {
        color: ${({ theme }) => theme.COLORS.ORANGE_1};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
    }
  }
`;
