import styled from "styled-components";
import X from "../../img/svg/x-2.svg";

export const ModalDiv = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 812px;
  background: #262626;
  z-index: 9999;
  transition: right 0.5s ease-in-out;
  padding: 30px;

  display: grid;
  justify-content: center;
  align-items: self-start;

  .HeaderOfModal {
    display: flex;
    justify-content: space-between;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 30px;
    width: 28px;
    height: 28px;
    background-image: url(${X});

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .NavList {
    display: grid;
    gap: 28px;
  }

  .NavElement {
    position: relative;
    font-family: "Gilroy", sans-serif;
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

  .ButtonLogOut {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;

    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 30px;
    width: 114px;
    height: 42px;
    background: #1f1f1f;

    font-family: "Gilroy", sans-serif;
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
`;
