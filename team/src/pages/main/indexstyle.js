import styled from "styled-components";
export const Section = styled.section`
  justify-content: center;

  height: 100vh;

  overflow: hidden;
  position: relative;
  text-align: center;
  background: url(img/Glenfiddich-Ourstory-2001.jpg) center no-repeat;
  background-size: cover;

  transition: all 1s ease;
  & div {
    color: white;
    font-size: 2rem;
    margin-top: 20%;
    letter-spacing: 20px;
    z-index: 1;
    line-height: 40px;
  }
  & div hr {
    width: 0px;
    transition: all 3s ease;
  }
  &div h2 {
    transition: all 5s ease;
    display: inline-block;
    font-size: 1.75em;
    opacity: 0;
    padding: 0.35em 1em;
    position: relative;
    z-index: 1;
  }
`;
export const Btn = styled.button`
  background-color: grey;
  transition: all 1s ease;
  border: 0;
  color: white;
  border-radius: 10px;
  width: 400px;
  height: 100px;
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;
