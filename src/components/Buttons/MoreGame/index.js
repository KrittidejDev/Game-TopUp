import React from "react";
import { MoreGamedStyled } from "./styled";

const MoreGame = ({onClickView}) => {
    return (
        <MoreGamedStyled>
            <div onClick={onClickView} className="more_games">More games <img src="/images/icons/Home/more-games.png" width="12px" height="12px" alt="More games" /></div>
        </MoreGamedStyled>
    )
}

export default MoreGame;