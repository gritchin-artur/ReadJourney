import styled from "styled-components";

export const BackdropStyle = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;

  .ModalDiv {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;

export const BackdropClickWord = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`;
