import styled from "styled-components";
import LogoMobile from "../../img/svg/Logo.svg";
import LogoDesctop from "../../img/svg/Logo-desctop.svg";
import IphoneImg from "../../img/png/iPhone-15-Black-desctop.png";
import IphoneDesctopImg from "../../img/png/iPhone-15-Black-mobile.png";
import eye from "../../img/svg/eye.svg";
import eye_off from "../../img/svg/eye-off.svg";
import correct from "../../img/svg/Group-2.svg";
import error from "../../img/svg/Vector.svg";

export const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 10px;

  @media only screen and (min-width: 1440px) {
    display: flex;
    align-items: end;
  }

  .RegisterContainer {
    border-radius: 30px;
    height: 411px;
    background: #1f1f1f;

    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
      border-radius: 30px;
      width: 704px;
      height: 960px;
      padding: 30px 174px 58px 58px;
    }

    @media only screen and (min-width: 1440px) {
      width: 600px;
      height: 736px;
      padding: 40px 64px;
    }
  }

  .ImgLogo {
    width: 42px;
    height: 17px;
    background-image: url(${LogoMobile});
    background-repeat: no-repeat;

    @media only screen and (min-width: 768px) {
      width: 182px;
      height: 17px;
      background-image: url(${LogoDesctop});
    }
  }

  .Title {
    margin-top: 40px;
    font-family: "Gilroy", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 0.02em;
    color: #f9f9f9;

    @media only screen and (min-width: 768px) {
      margin-top: 150px;

      font-size: 64px;
      line-height: 94%;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 100px;
    }
  }

  .PartText {
    color: rgba(227, 227, 227, 0.5);
  }

  .Form {
    margin-top: 20px;
    display: grid;
    gap: 10px;

    @media only screen and (min-width: 768px) {
      margin-top: 50px;
    }
  }

  .DivInput {
    position: relative;
  }

  input {
    box-sizing: border-box;
    border: none;
    border-radius: 12px;
    padding: 14px;
    width: 100%;
    height: 44px;
    background: #262626;

    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    &:focus {
      outline: none;
    }

    @media only screen and (min-width: 768px) {
      height: 50px;
      padding: 16px;

      font-size: 14px;
      line-height: 129%;
    }
  }

  input[id="registerName"] {
    padding-left: 55px;

    @media only screen and (min-width: 768px) {
      padding-left: 60px;
    }
  }

  input[id="registerEmail"] {
    padding-left: 45px;

    @media only screen and (min-width: 768px) {
      padding-left: 50px;
    }
  }

  input[id="registerPassword"] {
    padding-left: 75px;

    @media only screen and (min-width: 768px) {
      padding-left: 85px;
    }
  }

  .TextInput {
    position: absolute;
    left: 14px;
    top: 14px;

    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 129%;

      top: 15px;
    }
  }

  .ButtonList {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      justify-content: flex-start;
      margin-top: 100px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 70px;
    }
  }

  .ButtonSubmit {
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 30px;
    width: 140px;
    height: 42px;
    background: #f9f9f9;
    align-items: center;
    display: flex;
    justify-content: center;

    font-family: "Gilroy", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @media only screen and (min-width: 768px) {
      width: 225px;
      height: 52px;

      font-size: 20px;
      line-height: 100%;
    }
  }

  .ButtonGoLogIn {
    cursor: pointer;
    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #686868;

    &:hover {
      color: #f9f9f9;
    }

    @media only screen and (min-width: 768px) {
      margin-left: 20px;
      font-size: 14px;
      line-height: 129%;
    }
  }

  .IphoneImgContainer {
    border-radius: 30px;
    display: flex;
    justify-content: center;
    background: #1f1f1f;
    height: 351px;

    @media only screen and (min-width: 768px) {
      display: none;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;

      width: 600px;
      height: 736px;
    }
  }

  .IphoneImg {
    margin-top: 20px;
    width: 255px;
    height: 518px;
    background-image: url(${IphoneImg});
    background-repeat: no-repeat;

    @media only screen and (min-width: 1440px) {
      margin-top: 80px;
      width: 405px;
      height: 834px;
      background-image: url(${IphoneDesctopImg});
    }
  }

  .DivInput:hover .ShowPassword,
  .DivInput:hover .HidePassword {
    display: block;
  }

  .DivInput[id="password"]:hover .ImgError,
  .DivInput[id="password"]:hover .ImgCorrect,
  .DivInput[id="password"]:hover .ErrorText,
  .DivInput[id="password"]:hover .SuccessText {
    display: none;
  }

  .ErrorInput {
    border: 1px solid #e74a3b;
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
  }

  .ShowPassword {
    display: none;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${eye_off});

    @media only screen and (min-width: 768px) {
      top: 47%;
    }
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${eye});

    @media only screen and (min-width: 768px) {
      top: 47%;
    }
  }

  .ErrorText {
    position: absolute;
    top: 43px;
    left: 20px;
    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 10px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #e90516;

    @media only screen and (min-width: 768px) {
      top: 49px;
    }
  }

  .SuccessText {
    position: absolute;
    top: 43px;
    left: 20px;
    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 10px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #30b94d;

    @media only screen and (min-width: 768px) {
      top: 49px;
    }
  }

  .ImgError {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 12px;
    right: 12px;
    background-image: url(${error});

    @media only screen and (min-width: 768px) {
      top: 13px;
    }
  }

  .ImgCorrect {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 12px;
    right: 12px;
    background-image: url(${correct});

    @media only screen and (min-width: 768px) {
      top: 13px;
    }
  }
`;
