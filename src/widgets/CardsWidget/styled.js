import styled from "styled-components";

export const CardsWidgetContainer = styled.div`
  min-height: 100dvh;
  width: 100%;
  .filter_wrap {
    margin-bottom: 26px;
    width: 100%;
    display: flex;
    .filter_btn_row {
      display: flex;
      column-gap: 121px;
      .filter_btn {
        color: #4b4b4b;
        font-size: 27px;
        font-weight: 500;
        cursor: pointer;
        &.active {
          color: #c0621b;
        }
        &:hover {
          color: #c0621b;
        }
      }
    }
  }
  .line{
    margin-bottom: 65px;
    border-bottom: 3px solid #494949;
    width: 100%;
  }
  .card_wrap{
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 110px;
  }

`;
