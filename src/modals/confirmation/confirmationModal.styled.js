import styled from "styled-components";

export const ModalContainer = styled.div`
  border-radius: 15px;
  padding: 30px;
  display: grid;
  gap: 50px;

  background: #85aa9f;
  box-sizing: border-box;

  .Title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #fff;
  }

  .ListButton {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .ButtonYes {
    text-align: center;
    border-radius: 30px;
    padding: 14px 65px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .ButtonNo {
    text-align: center;
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 155px;
    height: 48px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;
  }
`;
