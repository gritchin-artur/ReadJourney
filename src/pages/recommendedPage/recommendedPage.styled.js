import styled from "styled-components";

export const RecommendedPageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
  }

  .FormContainer {
    box-sizing: border-box;
    border-radius: 30px;
    width: 335px;
    height: 478px;
    background: #1f1f1f;

    padding: 20px;

    @media only screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 30px;
      width: 704px;
      height: 336px;
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
  }

  input[id="title"] {
    padding-left: 70px;
  }

  input[id="author"] {
    padding-left: 80px;
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

  .ButtonToApply {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
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
    gap: 20px;
    box-sizing: border-box;
    margin-top: 20px;
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
  }

  .Title {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .WorkOutList {
    display: grid;
    gap: 20px;
  }

  .WorkOutElement {
    display: -webkit-box;
    width: 230px;
    gap: 12px;
  }

  .WorkOutNumber {
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
  }

  .ButtonList {
    display: flex;
    justify-content: space-between;
  }

  .ButtonMyLibrary {
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

  .RecommendedboksContainer {
    box-sizing: border-box;
    border-radius: 30px;
    width: 335px;
    height: 382px;
    background: #1f1f1f;

    padding: 40px 20px;

    @media only screen and (min-width: 768px) {
      width: 704px;
      height: 663px;

      padding: 50px;
    }
  }

  .TitleButtonContainer {
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      align-items: center;
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

  .PrevNextButtonList {
    display: flex;
    gap: 8px;
  }

  .PrevNextButton {
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
  }

  .BookListContainer {
    margin-top: 20px;
    width: 295px;
    height: 248px;
    transform: translate(0%, 0%);
    overflow: hidden;

    @media only screen and (min-width: 768px) {
      width: 610px;
      height: 516px;
    }
  }

  .BookList {
    display: flex;

    gap: 20px;

    @media only screen and (min-width: 768px) {
      flex-wrap: wrap;
      width: 767px;
      height: 516px;
    }
  }

  .BookItem {
    width: 137px;
    height: 248px;

    display: grid;
    gap: 5px;
  }

  .BookImg {
    border-radius: 8px;
    width: 137px;
    height: 208px;
  }

  .BookList {
    display: flex;
    list-style: none;
    position: fixed;
    transition: all ease 1s;
  }

  .BookTitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

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
`;
