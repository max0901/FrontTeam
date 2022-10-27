import styled from "styled-components";
export const TopBanner = styled.div`
  width: 100px;

  position: fixed;

  z-index: 4;
  right: 3%;
  top: 30%;
`;
export const TopUl = styled.ul`
  width: 142px;
  position: relative;

  z-index: 5;
  background-color: black;

  & .active > div {
    background-color: green;
    visibility: visible;
    opacity: 1;
    transition: all 1s ease;
  }
  & a {
    width: 150px;
    height: 80px;
    display: block;
    color: white;
    font-size: 11px;
    position: relative;
    top: 10px;
    /* background-color: grey; */
    cursor: pointer;
  }
  & a > div {
    width: 120px;
    height: 50px;
    margin: 5px auto;
    background-color: white;
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
  }
  & a > p {
    position: relative;
    width: 100px;
    top: -45px;
    left: 23px;
  }
`;
export const TopBtn = styled.button`
  width: 70px;
  height: 50px;
  border: 0;
  outline: 0;
  position: fixed;
  left: 94%;
  bottom: 80px;
  opacity: 0.5;
  & img {
    width: 40px;
  }
`;
export const BtnDot = styled.div`
  position: relative;

  right: -47%;
  top: 100px;
  & div {
    margin-top: 10px;
  }
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
