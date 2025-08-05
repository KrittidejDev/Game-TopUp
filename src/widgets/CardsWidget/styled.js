import styled from "styled-components";

export const CardsWidgetContainer = styled.div`
  min-height: 100dvh;
  width: 100%;
  .filter_wrap {
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
    .card_wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
`;

export const GameInfoCard = styled.div `
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  margin-top: 20px;
    .imgMockup {
      width: 200px;
      height: 200px;
      background-color: #ffffff; 
      border-radius: 30px;
    }
    h2 {
      color: #999999;
      font-weight: 500;
      margin-top: 10px;
    }
    p {
      color: #4B4B4B;
    }
    a {
      color: #C0621B;
      font-size: 16px;
    }
`;
