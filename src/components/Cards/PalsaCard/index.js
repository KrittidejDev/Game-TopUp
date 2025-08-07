import React from 'react'
import { PalsaContainer } from "./styled"


const PalsaCard = ({ data }) => {
  return (
      <PalsaContainer>
          <div className="images_card">
              <img className="images_game" src={data.image} alt="3-pic" />
          </div>
          <p className="title_card">{data.title}</p>
          <p className="description_card">{data.description}</p>
      </PalsaContainer >
  )
};

export default PalsaCard;