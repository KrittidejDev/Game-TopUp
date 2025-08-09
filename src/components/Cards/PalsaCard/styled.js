import styled from "styled-components";

export const PalsaContainer = styled.div`
    .container_palsa{
        border: 2.5px solid hsla(0, 0%, 29%, 1);
        border-radius: 12px;
        position: relative;
        width: 318px;
        height: 136px;

    .box_card{
        position: absolute; 
        top: 20px;
        display: flex;
        flex-direction: row
        justify-content: center; 
        align-items: center;
        margin-left: 35px;
        margin-right: 35px;
        
    .image_card{
        width: 100%;
        height: 180px;
        
  
    .image_game{
        width: 100%;
        height: 100%;
        }
        }
        .container_card{
               padding: 16px;
               display: flex;
               flex-direction: column;


        .title_card{
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 19px;
                line-height: 1;
                letter-spacing: 0;
                                }
        .description_card{
                font-family: 'Poppins', sans-serif;
                font-weight: 600;          
                font-size: 32px;
                line-height: 1;           
                letter-spacing: 0;
                            }
            }
        }
    }
`