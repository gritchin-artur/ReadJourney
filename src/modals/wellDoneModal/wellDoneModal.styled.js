import styled from "styled-components";
import bookMobile from "../../img/open-orange-book-mobile-min.png";
import bookDesctop from "../../img/open-orange-book-desctop-min.png";

export const WellDoneContainer = styled.div`
  border-radius: 15px;
  width: 342px;
  height: 458px;
  padding: 18px;

  background: #85aa9f;
  position: relative;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    border-radius: 30px;
    width: 527px;
    height: 519px;

    padding: 18px 64px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;
  }

  .Title {
    margin-top: 30px;
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }
  }

  .ContentContainer {
    margin-top: 20px;
    display: flex;
    gap: 30px;
    justify-content: start;

    @media only screen and (min-width: 768px) {
      gap: 75px;
    }
  }

  .TitleCorrectAnswer,
  .TitleMistakes {
    font-weight: 400;
    font-size: 14px;
    color: rgba(252, 252, 252, 0.5);

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  .CorrectAnswerList,
  .MistakesList {
    margin-top: 10px;
    display: grid;
    gap: 8px;
  }

  .MistakesItem,
  .CorrectAnswerItem {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Img {
    width: 152px;
    height: 121px;
    background-image: url(${bookMobile});

    position: absolute;
    bottom: 40px;
    right: 0;

    @media only screen and (min-width: 768px) {
      width: 212px;
      height: 179px;
      background-image: url(${bookDesctop});
    }
  }
`;
