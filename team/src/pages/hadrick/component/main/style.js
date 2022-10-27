import styled from "styled-components";
export const MainInner = styled.div`
  background-color: #fffced;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  & ul {
    display: flex;
    width: 100%;
    overflow: hidden;
  }
`;
export const BtnDot = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  & .active span {
    background-color: green;
    visibility: visible;
    opacity: 1;
    transition: all 1s ease;
  }
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.6s ease;
`;
