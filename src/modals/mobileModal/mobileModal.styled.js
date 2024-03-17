import styled from "styled-components";
import X from "../../img/svg/x-2.svg";

export const ModalDiv = styled.div`
  position: relative;
  background-color: #85aa9f;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 9999;
  transition: right 0.5s ease-in-out;
  padding: 16px;

  .HeaderOfModal {
    display: flex;
    justify-content: space-between;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 20px;
    width: 28px;
    height: 28px;
    background-image: url(${X});
  }

  .NavList {
    display: grid;
    gap: 28px;
    margin-top: 150px;
  }

  .NavElement {
    text-decoration: none;

    font-weight: 500;
    font-size: 14px;
    color: #f8f8f8;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &.active {
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #f8f8f8;
      color: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
