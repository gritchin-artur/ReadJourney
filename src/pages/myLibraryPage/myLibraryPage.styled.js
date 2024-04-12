import styled from "styled-components";
import BookImg from "../../img/png/📚desctop.png";
import BookImgDesctop from "../../img/png/📚mobile.png"

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

    @media only screen and (min-width: 768px) {
      margin-top: 45px;
      width: 131px;
      height: 42px;

      font-size: 16px;
      line-height: 112%;
    }
  }

  .StartWorkContainer {
    display: grid;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 18px;
    padding: 20px;
    border-radius: 12px;
    width: 295px;
    height: 244px;

    background: #262626;

    @media only screen and (min-width: 768px) {
      margin-top: 0px;
      width: 313px;
      height: 272px;
    }

    @media only screen and (min-width: 1440px) {
          margin-top: 60px;
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


  .RecommendedboksContainer {
    box-sizing: border-box;
    border-radius: 30px;
    width: 335px;
    min-height: 407px;
    background: #1f1f1f;
    padding: 40px 20px;

    justify-content: center;
    display: grid;

    @media only screen and (min-width: 768px) {
      width: 704px;
      min-height: 518px;

      padding: 48px;
      justify-content: unset;
      display: block;
    }

    @media only screen and (min-width: 1440px) {
      width: 847px;
      height: 651px;

      padding: 40px;
    }
  }

  .TitleButtonContainer {
    display: flex;
    gap: 80px;

    @media only screen and (min-width: 768px) {
      padding: 0;
      gap: 0;
          justify-content: space-between;
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

  .BookListLibraryContainer {
    width: 253px;
    height: 141px;
    transform: translate(0%, 0%);
    overflow: hidden;
    padding: 13px;

    @media only screen and (min-width: 768px) {
      width: 266px;
      height: 154px;
    }
  }

  .BookListLibrary {
    display: flex;
    list-style: none;
    position: fixed;
    transition: all ease 1s;
    gap: 20px;
    margin-left: 13px;
    width: ${(props) => console.log(props.$lengthbooks * 91)}px;

    @media only screen and (min-width: 768px) {
       margin-left: 20px;
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

  .custom-input {
    position: relative;
  }

  .InputAllBooks {
    border: 1px solid #3e3e3e;
    border-radius: 12px;
    padding: 12px 14px;
    width: 120px;
    height: 40px;

    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

        @media only screen and (min-width: 768px) {
width: 153px;
height: 46px;
    }
  }

  .IconSwitch {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 12px;

    &:hover,
    &:active {
      path {
        stroke: #686868;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  .dropdown {
    width: 70%;
    z-index: 1000;
    position: absolute;
    margin-top: 5px;
    display: none;
    gap: 8px;

    border-radius: 15px;
    padding: 12px 18px;

    background: #262626;
  }

  .ListItem {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #f9f9f96b;
    cursor: pointer;
    &:hover {
      color: #f9f9f9;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .BookOwnListLibrary {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;


            @media only screen and (min-width: 768px) {
margin-top: 48;
    }
  }

  .BookOwnItem {
    cursor: pointer;
    width: 137px;
    height: 248px;

    display: grid;
    gap: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .BookOwnContainer {
    display: flex;
    gap: 10px;
  }

  .BookOwnTitleContainer {
    width: 95px;
    height: 32px;
  }

  .BookOwnImg {
    border-radius: 8px;
    width: 137px;
    height: 208px;
  }

  .BookOwnTitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .BookOwnAuthor {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #686868;
  }

  .DeleteBookIcon {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.3);
    }
  }


  .EmptyContainer{
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .EmptyOwnBookContainer {
    width: 197px;
    height: 164px;
    text-align: center;
    display: ruby;

                @media only screen and (min-width: 768px) {
width: 274px;
height: 186px;
    }
  }


  .ImagContainer {
    width: 100px;
    height: 100px;
    background: #262626;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

                @media only screen and (min-width: 768px) {
    width: 130px;
    height: 130px;
    }
  }

  .EmptyBookImg {
    width: 50px;
    height: 50px;
    background-image: url(${BookImg});

                    @media only screen and (min-width: 768px) {
                          width: 70px;
    height: 70px;
  background-image: url(${BookImgDesctop});
    }
  }

  .TextAddBook {
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;

                        @media only screen and (min-width: 768px) {
margin-top: 20px;
    }
  }

  .PartText {
    color: #686868;
  }
`;
