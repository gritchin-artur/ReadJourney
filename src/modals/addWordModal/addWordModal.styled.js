import styled from "styled-components";
import toggle from "../../img/toggle.svg";
import correct from "../../img/correct.svg";
import error from "../../img/error.svg";

export const ContainerAddWordModal = styled.div`
  position: relative;
  border-radius: 15px;
  width: 342px;
  height: 621px;

  background: #85aa9f;
  padding: 18px;

  @media only screen and (min-width: 768px) {
    box-sizing: border-box;
    border-radius: 30px;
    width: 627px;
    height: 621px;

    padding: 18px 63px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;
  }

  .TextContainer {
    margin-top: 30px;
  }

  .Title {
    font-weight: 600;
    font-size: 30px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #f8f8f8;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    margin-top: 20px;

    @media only screen and (min-width: 768px) {
      font-size: 25px;
    }
  }

  .Form {
    margin-top: 20px;
    position: relative;
    display: grid;
    gap: 15px;
    @media only screen and (min-width: 768px) {
      gap: 20px;
    }
  }

  input[id="statistics"],
  input[id="ukrainian"],
  input[id="english"] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 24px;
    width: 100%;
    height: 48px;

    background: none;
    box-sizing: border-box;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    &:focus {
      outline: none;
    }
  }

  input[id="statistics"] {
    @media only screen and (min-width: 768px) {
      width: 204px;
      height: 52px;
    }
  }

  input[id="ukrainian"],
  input[id="english"] {
    @media only screen and (min-width: 768px) {
      width: 353px;
      height: 52px;
    }
  }

  .custom-inputAdd {
    position: relative;

    &::after {
      content: url(${toggle});
      position: absolute;
      top: 14px;
      right: 24px;

      @media only screen and (min-width: 768px) {
        left: 170px;
      }
    }
  }

  .custom-inputAdd::after {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(330deg)
      brightness(91%) contrast(92%);
  }

  .dropdownAdd {
    z-index: 1000;
    position: absolute;
    margin-top: 5px;
    display: none;
    gap: 8px;

    border-radius: 15px;
    padding: 12px 24px;
    width: 86%;
    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
    background: #fff;
  }

  .ListItem {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border-radius: 6px;

    &:hover {
      background-color: #85aa9f;
    }
  }

  .RadioButtonList {
    position: absolute;
    top: 65px;
    display: flex;
    gap: 34px;
    left: 14px;
  }

  .RadioButtonItem {
    position: relative;
    display: flex;
    gap: 8px;

    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #fcfcfc;
    text-align: center;
    align-items: center;
  }

  .RadioButton {
    height: 12px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #85aa9f;
      border: 3px solid #80808059;
    }

    &:checked:before {
      border-color: #fcfcfc;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fcfcfc;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .UkrainianContainer[id="ukrainian"] {
    margin-top: 50px;
    @media only screen and (min-width: 768px) {
      margin-top: 40px;
    }
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: grid;
    gap: 8px;
    position: relative;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 32px;
    }
  }
  .InputImagContainer {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;
    @media only screen and (min-width: 768px) {
      order: 2;
    }
  }

  .ButtonList {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      margin-top: 15px;
    }
  }

  .ButtonAdd {
    border-radius: 30px;
    padding: 12px 63px;
    width: 169px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    @media only screen and (min-width: 768px) {
      border-radius: 30px;
      padding: 14px 104px;
      width: 245px;
      height: 56px;

      display: flex;
      align-items: center;

      font-size: 23px;
      line-height: 156%;
    }
  }

  .ButtonCancel {
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 155px;
    height: 48px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      padding: 14px 92px;
      width: 245px;
      height: 56px;
    }
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${error});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${correct});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }
`;
