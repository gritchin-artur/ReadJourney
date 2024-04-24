import styled from "styled-components";
import starImg from "../../img/png/star.png";
import recordImg from "../../img/png/block (1)-min.png";
import stopRecordImg from "../../img/png/block-min.png";

export const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;

  @media only screen and (min-width: 1440px) {
    display: flex;
    margin-top: 20px;
    gap: 20px;
  }

  .ControlBookContainer {
    border-radius: 30px;
    width: 335px;
    min-height: 390px;
    background: #1f1f1f;

    padding: 20px;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 40px 20px 20px 40px;
      min-width: 704px;
      min-height: 336px;
    }

    @media only screen and (min-width: 1440px) {
      display: block;
      min-width: 353px;
      min-height: 651px;
      padding: 40px 20px 20px 20px;
    }
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

    @media only screen and (min-width: 1440px) {
      width: 100%;
    }
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
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

  .DairyContainer {
    margin-top: 30px;
    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
    @media only screen and (min-width: 1440px) {
      margin-top: 40px;
    }
  }

  .DairyContainerHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .TitleDairy {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    @media only screen and (min-width: 768px) {
      margin: 0;
      font-size: 20px;
    }
  }

  .StatisticContainer {
    margin-top: 10px;
    border-radius: 12px;
    width: 295px;
    height: 211px;
    background: #262626;
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
      width: 321px;
      height: 252px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 20px;
      border-radius: 12px;
      width: 313px;
      /* height: 373px; */
height: ${(props) => (props.$onStatistic ? 281 : 373)}px;
    }
  }

  .TextStatisticVisible{
    display: none;
        @media only screen and (min-width: 1440px) {
  display: ${(props) => (props.$onStatistic ? "flex" : "none")};

  margin-top: 20px;
  font-weight: 600;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: #686868;
    }
  }

  .ProgressElement {
    display: flex;
    justify-content: space-between;
  }

  .FramePercentContainer {
    display: flex;
    gap: 5px;
  }

  .StatisticCircleContainer {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
  }

  .StatisticCircle {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 116x;
    position: relative;
  }

  .PercentStatistic {
    position: absolute;

    font-weight: 700;
    font-size: 18px;
    line-height: 111%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  .PercentContainer {
    margin-top: 20px;

    display: grid;
    justify-content: center;
  }

  .CircleColorContainer {
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    &::before {
      content: "";
      position: absolute;
      border-radius: 4px;
      width: 14px;
      height: 14px;
      background: #30b94d;
      left: -25px;
      top: 2px;
    }
  }

  .PageAlreadyRead {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .ProgressList {
    display: grid;
    gap: 30px;
  }

  .DateItem {
    font-weight: 700;
    font-weight: 700;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.02em;
    color: #686868;
  }

  .PercentItem {
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  .ProgressElement:not(:first-child) .FrameImg {
    rect[rx="4"] {
      fill: #686868;
      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .ProgressElement:not(:last-child) .FrameImg {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 69px;
      border: 2px solid #1f1f1f;
      top: 16px;
      left: 6px;
    }
  }

  .MinuteItem {
    margin-top: 5px;
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .ReadPage {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    /* text-align: center; */
    color: #686868;
  }

  .GraphikContainer {
    display: flex;
    align-items: center;
    margin-top: 6px;
  }

  .Graphique {
    height: 22px;
    width: 44px;
  }

  .Trash {
    cursor: pointer;
    margin-left: 5px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
      path {
        stroke: #e90516;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .PagePerHour {
    margin-top: 5px;
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .IconList {
    display: flex;
    gap: 8px;
  }

  .ButtonDairy {
    cursor: pointer;
    path {
      stroke: ${(props) => (props.$onStatistic ? "#686868" : "#F9F9F9")};
    }

    transition: transform 0.3s ease;

    &:hover,
    &.active {
      transform: scale(1.1);
      path {
        stroke: #f9f9f9;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .ButtonStatistic {
    cursor: pointer;
    path {
      stroke: ${(props) => (props.$onStatistic ? "#F9F9F9" : "#686868")};
    }

    transition: transform 0.3s ease;

    &:hover,
    &.active {
      transform: scale(1.1);
      path {
        stroke: #f9f9f9;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .ProgressMainContainer {
    @media only screen and (min-width: 768px) {
      display: block;
      padding-left: inherit;
    }
        @media only screen and (min-width: 1440px) {
margin-top: 40px;
padding-left: initial;
    }
  }

  .ProgressContainer {
    margin-top: 40px;
    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  .TitleProgress {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
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

    @media only screen and (min-width: 768px) {
      height: 65%;
    }

            @media only screen and (min-width: 1440px) {
margin-top: 60px;

    }
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

    @media only screen and (min-width: 768px) {
      width: 704px;
      height: 518px;
      padding: 40px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0px;
      width: 847px;
      height: 651px;
    }
  }

  .BookContainer {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
      height: 65%;
    }
  }

  .ContentContainer {
    border-radius: 8px;
    width: 137px;
    height: 208px;

    text-align: center;

    @media only screen and (min-width: 768px) {
      display: table;
      margin-top: auto;
      padding-top: 40px;
    }
  }

  .TitleMyReading {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    @media only screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 114%;
      letter-spacing: 0.02em;
    }
  }

  .BookImg {
    border-radius: 10px;
    width: 140px;
    height: 213px;

    @media only screen and (min-width: 768px) {
      border-radius: 8px;
      width: 169px;
      height: 256px;
    }

    @media only screen and (min-width: 1440px) {
     width: 224px;
height: 340px;
    }
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
    max-width: 150px;
    margin-top: 15px;
    @media only screen and (min-width: 768px) {
      max-width: 500px;
    }
        @media only screen and (min-width: 1440px) {
font-size: 20px;
    }
  }

  .BookAuthor {
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #686868;
    margin-top: 2px;

            @media only screen and (min-width: 1440px) {
font-size: 14px;
line-height: 129%;
    }
  }

  .RecordButtonContainer {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .RecordButton {
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.$reading ? stopRecordImg : recordImg});
  }
`;
