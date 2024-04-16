import styled from "styled-components";
import starImg from "../../img/png/star.png";
import recordImg from "../../img/png/block (1)-min.png";
import stopRecordImg from "../../img/png/block-min.png";

export const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;

  .ControlBookContainer {
    border-radius: 30px;
    width: 335px;
    height: 390px;
    background: #1f1f1f;

    padding: 20px;
    box-sizing: border-box;
  }

  .FormTitle {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    padding-left: 14px;
  }

  .DivInput {
    margin-top: 8px;
    position: relative;
  }

  input {
    border-radius: 12px;
    width: 295px;
    height: 44px;
    background: #262626;
    border: unset;
    padding-left: 96px;

    box-sizing: border-box;

    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    &:focus {
      outline: none;
    }
  }

  .TextInput {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
    position: absolute;

    left: 14px;
    top: 14px;
  }

  .ButtonToStart {
    cursor: pointer;
    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 30px;
    width: 91px;
    height: 38px;
    background-color: unset;
    margin-top: 25px;

    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.02em;
    color: #f9f9f9;

    &:hover {
      color: #1f1f1f;
      background-color: #f9f9f9;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ProgressContainer {
    margin-top: 40px;
  }

  .TitleProgress {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  .ProgressText {
    margin-top: 14px;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #686868;
  }

  .ImgContainer {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ImgStar {
    width: 80px;
    height: 80px;
    background-image: url(${starImg});
  }

  .OwnBookContainer {
    box-sizing: border-box;
    margin-top: 10px;
    padding: 40px 20px;
    border-radius: 30px;
    width: 335px;
    height: 471px;
    background: #1f1f1f;
  }

  .BookContainer {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ContentContainer {
    border-radius: 8px;
    width: 137px;
    height: 208px;

    text-align: center;
  }

  .TitleMyReading {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
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

  .RecordButtonContainer {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .RecordButton {
    /* cursor: pointer; */
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.$reading ? stopRecordImg : recordImg })
        /* width: ${(props) => props.$lengthbooks * 157}px; */

    /* &:hover {
      transform: scale(1.1);
    }

    &:active {
      background-image: url(${stopRecordImg});
    } */
  }
`;
