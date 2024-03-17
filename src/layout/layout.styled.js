import styled from "styled-components";
import LogoMobile from "../img/svg/Logo.svg";
import LogoDesctop from "../img/svg/Logo-desctop.svg";
import BurgerImg from "../img/svg/menu-04-2.svg";

export const LayoutContainer = styled.div`
  display: ${(props) => props.display}!important;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  height: 57px;
  padding: 12px;
  background: #1f1f1f;

  @media only screen and (min-width: 768px) {
    height: 74px;
    padding: 16px;
  }

  .ImgLogo {
    width: 42px;
    height: 17px;
    background-image: url(${LogoMobile});
    background-repeat: no-repeat;

    @media only screen and (min-width: 1440px) {
      width: 182px;
      height: 17px;
      background-image: url(${LogoDesctop});
    }
  }

  .ListButton {
    display: none;
    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 32px;
    }
  }

  .Link {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: -0.02em;
    color: #686868;

    text-decoration: none;

    &:hover,
    &.active {
      color: #f9f9f9;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &::after {
        content: "";
        width: 100%;
        border: 1px solid #4f92f7;
        position: absolute;

        top: 27px;
        left: 0;
      }
    }
  }

  .RightSideContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .UserNameContainer {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .UserNameIcon {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #f9f9f9;

    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(249, 249, 249, 0.2);
  }

  .UserName {
    display: none;

    @media only screen and (min-width: 1440px) {
      font-weight: 700;
      font-size: 16px;
      line-height: 112%;
      letter-spacing: -0.02em;
      text-align: center;
      color: #f9f9f9;
    }
  }

  .ButtonLogOut {
    display: none;
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid rgba(249, 249, 249, 0.2);
      border-radius: 30px;
      width: 114px;
      height: 42px;
      background: #1f1f1f;

      font-weight: 700;
      font-size: 16px;
      line-height: 112%;
      letter-spacing: 0.02em;
      color: #f9f9f9;

      &:hover {
        background-color: #f9f9f9;
        color: #1f1f1f;
        transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
          background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  .BurgerImg {
    cursor: pointer;
    width: 28px;
    height: 28px;
    background-image: url(${BurgerImg});
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;
