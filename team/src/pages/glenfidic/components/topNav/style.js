import styled from "styled-components";
export const TopBanner = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  /* background-color: blue; */
  z-index: 2;
`;
export const TopUl = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -120px;

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
  position: absolute;
  left: 94%;
  bottom: -680px;
  opacity: 0.5;
  & img {
    width: 40px;
  }
`;
