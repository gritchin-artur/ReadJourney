import styled from "styled-components";
import BookImg from "../../img/png/📚desctop.png";

export const MyLibraryPageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }

  .FormContainer {
    box-sizing: border-box;
    border-radius: 30px;
    width: 335px;
    height: 528px;
    background: #1f1f1f;

    padding: 20px;

    @media only screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 30px;
      width: 704px;
      height: 336px;
    }

    @media only screen and (min-width: 1440px) {
      display: block;
      width: 353px;
      height: 651px;
      padding: 40px 20px 20px 20px;
    }
  }

  .Form {
    display: grid;
    gap: 10px;
  }

  .FormTitle {
    margin-left: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  .DivInput {
    position: relative;
  }

  input {
    box-sizing: border-box;
    border: none;
    border-radius: 12px;
    padding: 14px;
    width: 295px;
    height: 44px;
    background: #262626;

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

  input[id="title"] {
    padding-left: 70px;
  }

  input[id="author"] {
    padding-left: 80px;
  }

  input[id="number"] {
    padding-left: 112px;
  }

  .TextInput {
    position: absolute;
    left: 14px;
    top: 15px;

    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .ButtonAddBook {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 30px;
    padding: 10px;
    width: 98px;
    height: 38px;
    background-color: #1f1f1f;

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

  .StartWorkContainer {
    display: grid;
    justify-content: center;
    /* gap: 20px; */
    box-sizing: border-box;
    margin-top: 18px;
    padding: 20px;
    border-radius: 12px;
    width: 295px;
    height: 244px;

    background: #262626;

    @media only screen and (min-width: 768px) {
      gap: 40px;
      margin-top: 0px;
      width: 313px;
      height: 272px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 20px;
      border-radius: 12px;
      width: 313px;
      height: 272px;
    }
  }

  .Title {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    margin-left: 15px;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  /* .WorkOutList {
    display: grid;
    gap: 20px;
  }

  .WorkOutElement {
    display: -webkit-box;
    width: 230px;
    gap: 12px;
  } */

  /* .WorkOutNumber {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffff;

    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;

    color: #1f1f1f;
  }

  .WorkOutText {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  .WorkOutPartText {
    color: #686868;
    margin-left: 8px;
  } */

  .ButtonList {
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
  }

  .ButtonHome {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #686868;

    &:hover {
      color: #f9f9f9;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .ArrowNext {
    cursor: pointer;
    &:hover,
    &:active {
      path {
        stroke: #686868;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .DesctopBookContainer {
    display: none;

    @media only screen and (min-width: 1440px) {
      margin-top: 20px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 14px;
      border-radius: 12px;
      width: 313px;
      height: 83px;

      background: #262626;
    }
  }

  .BooksPicture {
    width: 45px;
    height: 45px;
    background-image: url(${BookImg});
  }

  .TextBook {
    width: 219px;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #686868;
  }

  .PartTextBook {
    color: #f9f9f9;
  }

  .RecommendedboksContainer {
    box-sizing: border-box;
    border-radius: 30px;
    width: 335px;
    height: 407px;
    background: #1f1f1f;

    justify-content: center;
    display: grid;

    @media only screen and (min-width: 768px) {
      width: 704px;
      height: 663px;

      padding: 50px;
    }

    @media only screen and (min-width: 1440px) {
      width: 847px;
      height: 651px;

      padding: 40px;
    }
  }

  .TitleButtonContainer {
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 0 20px;

    @media only screen and (min-width: 768px) {
      align-items: center;
      padding: 0;
    }
  }

  .RecommendedboksTitle {
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

  /* .PrevNextButtonList {
    display: flex;
    gap: 8px;
  } */

  /* .PrevNextButton {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #686868;

    &:hover .Arrow {
      path {
        stroke: #686868;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  } */

  .BookListLibraryContainer {
    width: 253px;
    height: 141px;
    transform: translate(0%, 0%);
    overflow: hidden;
    padding: 13px;
    /* box-sizing: border-box; */

    @media only screen and (min-width: 768px) {
      margin-top: 20px;

      width: 634px;
      height: 548px;
    }

    @media only screen and (min-width: 1440px) {
      width: 789px;
      height: 550px;
    }
  }

  .BookListLibrary {
    display: flex;
    list-style: none;
    position: fixed;
    transition: all ease 1s;
    gap: 20px;
    margin-left: 13px;
    width: ${(props) => props.$lengthbooks * 91}px;

    @media only screen and (min-width: 768px) {
      margin-left: 0;
      flex-direction: column;
      list-style-type: none;
      flex-wrap: wrap;
      width: ${(props) => (props.$lengthbooks * 91) / 2}px;
      height: 516px;
    }
  }

  .BookItem {
    cursor: pointer;
    width: 71px;
    height: 141px;

    display: grid;
    gap: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .BookImg {
    border-radius: 8px;
    width: 71px;
    height: 107px;
  }

  .BookTitle {
    font-weight: 700;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #e3e3e3;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .BookAuthor {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #686868;
  }

  .InputAllBooks {
    border: 1px solid #3e3e3e;
    border-radius: 12px;
    padding: 12px 14px;
    width: 120px;
    height: 40px;
  }
`;
