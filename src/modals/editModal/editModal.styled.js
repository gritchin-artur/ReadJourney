import styled from "styled-components";
import correct from "../../img/correct.svg";
import error from "../../img/error.svg";

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 15px;
  width: 342px;
  height: 359px;
  padding: 16px;

  background: #85aa9f;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    width: 627px;
    height: 345px;
    padding: 30px 60px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;
  }

  .Form {
    margin-top: 30px;
    position: relative;
    display: grid;
    gap: 15px;
    @media only screen and (min-width: 768px) {
      gap: 20px;
    }
  }

  input[id="ukrainian"],
  input[id="english"] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 176px 12px 24px;
    width: 311px;
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

  input[id="ukrainian"],
  input[id="english"] {
    @media only screen and (min-width: 768px) {
      padding: 16px 227px 16px 18px;
      width: 354px;
      height: 56px;
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
    padding: 12px 60px;
    width: 158px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    @media only screen and (min-width: 768px) {
      padding: 14px 101px;
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
    width: 145px;
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
      top: 58px;
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
      top: 58px;
    }
  }
`;
