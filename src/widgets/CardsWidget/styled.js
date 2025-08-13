import styled from "styled-components";

export const CardsWidgetContainer = styled.div`
  width: 100%;
  margin-bottom: 60px;
  text-align: center;
  margin-top: 72px;
  .filter_wrap {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
    .filter_btn_row {
      display: flex;
      column-gap: 8px;
      .filter_btn {
        display: flex;
        align-items: center;
        color: #dbdbdb;
        font-size: 14px;
        font-weight: 500;
        padding: 5px 12px;
        background-color: #0f0f0f;
        border: 2px solid #ffffff00;
        border-radius: 12px;
        cursor: pointer;
        gap: 8px;
        &.active {
          color: white;
          border: 2px solid #d6214c;
          box-shadow: #d6214c 0px 6px 12px -2px, #d6214c 0px 3px 7px -3px;}
        &:hover {
          scale: 101%;
          transition: 0.3s;
          border: 2px solid #d6214c;
          box-shadow: #d6214c 0px 6px 12px -2px, #d6214c 0px 3px 7px -3px;
        }
        .btn_tab{
          font-size: 14px;
        }
      }
    }
  }
  .card_wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 9px;
    box-sizing: border-box;
    .card_item {
      cursor: pointer;
      &.active {
        color: #c0621b;
        border-bottom: 4px solid #C0621B;}
      &:hover{
        scale: 105%;
        transition: 0.3s;}
      &:hover::before {
        opacity: 1;
        transform: rotate(-45deg) translateY(100%);
      }
    }
  }
`;
