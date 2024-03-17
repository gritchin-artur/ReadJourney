import styled from "styled-components";

export const ClickWordContainer = styled.ul`
  border-radius: 15px;
  padding: 12px 24px;
  width: 117px;
  height: 70px;

  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;
  box-sizing: border-box;

  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

  display: grid;
  gap: 8px;

  .Element {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
  }
`;
