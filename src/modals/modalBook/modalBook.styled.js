import styled from "styled-components";
import X from "../../img/svg/x-2.svg";

export const ModalBookContainer = styled.div`
  border: 1px solid rgba(104, 104, 104, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 421px;
  background: #1f1f1f;
  position: relative;

  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 15px;
    width: 22px;
    height: 22px;
    background-image: url(${X});

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }


  .BookImg {
    border-radius: 10px;
    width: 140px;
    height: 213px;
  }

  .BookTitle {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;
    margin-top: 15px;
  }

  .BookAuthor {
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #686868;
    margin-top: 2px;
  }

  .BookPages {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #f9f9f9;
    margin-top: 4px;
  }

  .ButtonAdd {
    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 30px;
    width: 141px;
    height: 42px;
    background-color: unset;

    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.02em;
    color: #f9f9f9;

    margin-top: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
