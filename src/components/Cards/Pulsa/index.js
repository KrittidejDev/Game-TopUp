import React from "react";
import { CardsPulsaContainer } from "./styled";



const CardsPulsa = ({ data }) => {
    
    return (
        
        <CardsPulsaContainer>
            <div>
                <div><img src="/images/Card/card-pulsa/pic_3.png" alt="Pulsa-Logo" /></div>
                <div>
                    <div>
                        <div>Pulsa</div>
                        <div>5.000</div>
                    </div>
                    <div>Rp.5.500</div>
                </div>
            </div>
        </CardsPulsaContainer >
    )
};

export default CardsPulsa;