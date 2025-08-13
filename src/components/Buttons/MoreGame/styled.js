import styled from "styled-components";

export const MoreGamedStyled = styled.div`
  .more_games{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    color: aqua;
    gap: 10px;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
      scale: 101%;
      transition: 0.3s;}
  }
`;