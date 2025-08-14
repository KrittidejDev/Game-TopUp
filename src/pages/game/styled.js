import styled from "styled-components";

export const GameContainer = styled.div`
  padding: 10px 0px;
  .title_list_card{
    display: flex;
    padding-left: 10px;
    margin-bottom: 30px;
    font-size: 32px;
  }
  .card_wrap{
    .end_list_card{
      width: 30%;
      display: flex;
      align-items: center;
      margin-top: 20px;
      text-align: center;
      font-size: 20px;
      &::before,
      &::after {
        content: "";
        flex: 1;
        border-bottom: 2px solid #555;
      }
      &::before {
        margin-right: 10px;
      }
      &::after {
        margin-left: 10px;
      }
    }
  }
`;
