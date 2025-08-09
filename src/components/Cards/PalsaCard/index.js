import React from 'react'
import { PalsaContainer } from "./styled"


const PalsaCard = ({ data }) => {
  return (
      <PalsaContainer>
        <div className='container_palsa'> 
          <div className='box_card'>
          <div className="images_card">
              <img className="images_game" src={data.image} alt="3-pic" />
          </div>
          <div className='container_card'>
            <p className="title_card">{data.title}</p>
            <br/>
            <p className="description_card">{data.description}</p>
          </div>
          </div>
        </div>
      </PalsaContainer >
  )
};

export default PalsaCard;