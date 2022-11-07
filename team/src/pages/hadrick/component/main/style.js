import styled from "styled-components";
export const MainInner = styled.div`
  width: 100%;
  height: 90vh;
`;
export const Ulbox = styled.div`
  width: 2000px;
  height: 90vh;
  display: inline-block;
  overflow: hidden;
  & ul {
    width: 10000px;
    display: flex;
  }
  & ul li {
    width: 2000px;
  }
`;
export const BtnDot = styled.div`
  position: fixed;
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
export const left = styled.div`
  height: 200px;
  float: left;
  position: fixed;
  top: 50%;
  left: 30px;
  opacity: 0;
  transition: all 1s ease;
  z-index: 5;
`;
export const right = styled.div`
  height: 200px;
  float: right;
  position: fixed;
  top: 53%;
  right: 30px;
  opacity: 0;
  transition: all 1s ease;
  z-index: 5;
`;
