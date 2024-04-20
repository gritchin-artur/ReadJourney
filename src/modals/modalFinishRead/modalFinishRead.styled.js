import styled from "styled-components";
import BookImg from "../../img/png/📚desctop.png";
import BookImgDesctop from "../../img/png/📚mobile.png"

export const ModalFinishReadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  padding: 15px 10px;
  border: 1px solid rgba(104, 104, 104, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 290px;
  background: #1f1f1f;
  position: relative;

      @media only screen and (min-width: 768px) {
width: 342px;
height: 308px;
    }

  .CloseButton {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .ContentContainer {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 242px;
    height: 170px;

          @media only screen and (min-width: 768px) {
width: 242px;
height: 208px;
    }
  }

  .BookImg {
    width: 50px;
    height: 50px;
    background-image: url(${BookImg});

              @media only screen and (min-width: 768px) {
                    width: 68px;
    height: 68px;
 background-image: url(${BookImgDesctop});
    }
  }

  .Title {
    margin-top: 20px;

    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #f9f9f9;

                  @media only screen and (min-width: 768px) {
 font-size: 20px;
    }
  }

  .Text {
    margin-top: 10px;

    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .PartText {
    color: #f9f9f9;
  }
`;
