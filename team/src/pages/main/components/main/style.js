import styled from "styled-components";

export const MainUl = styled.ul`
  display: flex;
  width: 100%;
`;
export const ImgBox = styled.div`
  width: 50%;
`;
export const Img1 = styled.img`
  width: 50%;
  height: 90vh;
  transition: 1s ease-out;
  opacity: 0.5;
  float: left;
`;
export const Img2 = styled.img`
  width: 50%;
  height: 100%;
  float: right;
  transition: 1s ease-out;
  opacity: 0.5;
`;
export const Section = styled.section`
  justify-content: center;

  height: 100vh;
  min-height: 35em;
  overflow: hidden;
  position: relative;
  text-align: center;
  background: url(img/Glenfiddich-Ourstory-2001.jpg) center no-repeat;
  background-size: cover;

  transition: all 1s ease;
  & div {
    color: white;
    font-size: 3rem;
    margin-top: 20%;
    letter-spacing: 20px;
    z-index: 1;
  }
  &div h2 {
    transition: transform 0.5s ease, opacity 0.5s ease;
    display: inline-block;
    font-size: 1.75em;
    opacity: 1;
    padding: 0.35em 1em;
    position: relative;
    z-index: 1;
  }
  & div h2::before {
    transition: width 0.85s ease;
    transition-delay: 0.25s;
    background: #fff;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    width: 100px;
    text-align: center;
  }
  & div h2::after {
    transition: width 0.85s ease;
    transition-delay: 0.25s;
    background: #fff;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    width: 30%;
  }
`;
export const Btn = styled.button`
  background-color: #ed4933;

  color: #ffffff;
  border-radius: 10px;
  width: 400px;
  height: 100px;
`;
