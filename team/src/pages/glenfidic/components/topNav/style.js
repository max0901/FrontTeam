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
  top: -140px;

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
    /* background-color: grey; */
    cursor: pointer;
  }
  & a > div {
    width: 120px;
    height: 60px;
    margin: 10px auto;
    background-color: white;
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
  }
  & a > p {
    position: relative;
    width: 100px;
    top: -60px;
    left: 23px;
  }
`;
