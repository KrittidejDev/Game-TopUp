import styled from "styled-components";

export const ContactUsStyles = styled.div`
  width: 100%;
  height: 205px;
  padding-bottom: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;

    .contactUsContainer {
        width: 90%;
        height: 216px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #151515;
        box-shadow: 5px 14px 22px -1px rgba(0, 0, 0, 0.06);
        z-index: 1;
        position: absolute;
        top: -120px;
        overflow: hidden;

            h2 {
            padding: 25px 50px 10px 80px;
            font-size: 27px;
            font-weight: 600;
            color: #999999;
            }

            .itemsContainer {
            display: flex;
            height: 216px;
            justify-content: space-between;
            padding: 20px 80px 60px 80px;

                .orangeDecoLeft,
                .orangeDecoRight {
                    width: 200px;
                    height: 200px;
                    background-color: #c0621b;
                    position: absolute;
                    transform: translate(-50%, -50%) rotate(-45deg);
                }

                .orangeDecoLeft {
                    left: -1px;
                    bottom: -260px;
                }

                .orangeDecoRight {
                    right: -260px;
                    top: -1px;
                }

                .breakLine {
                    width: 6px;
                    height: 60px;
                    background-color: #494949;
                    border-radius: 5px;
                }

                .contactItem {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    p {
                    font-size: 23px;
                    font-weight: 600;
                    color: #828282;
                    }

                    img {
                    width: auto;
                    height: 55px;
                    }
                }
    }
  }
`;

export const ContactArrow = styled.img`
  width: 79px;
  height: auto;
`;
