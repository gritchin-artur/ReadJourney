import styled from "styled-components";

export const ModalFinishReadContainer = styled.div`
  padding: 15px 10px;
  border: 1px solid rgba(104, 104, 104, 0.2);
  border-radius: 12px;
  width: 335px;
  height: 290px;
  background: #1f1f1f;
  position: relative;

  .CloseButton {
    cursor: pointer;
    position: absolute;
    right: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
