import styled from "styled-components";

export const MainInner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #29332b;
  overflow: hidden;
`;
export const TextBox = styled.div`
  margin: 0 auto;
  margin-top: 300px;
  text-align: center;
  width: 800px;

  & h2 {
    font-size: 72px;
    color: grey;
  }
  & p {
    width: 700px;
    font-size: 18px;
    color: white;
    margin: 0 auto;
  }
`;
export const ImgBox1 = styled.div`
  float: left;

  animation: moving 2s alternate;
  position: relative;
  left: 200px;
  top: 400px;
  @keyframes moving {
    from {
      opacity: 0;
      left: 500px;
      top: 1000px;
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
      left: 50px;
      top: 600px;
    }
    to {
      opacity: 1;
      left: 200px;
      top: 400px;
    }
  }
`;
export const ImgBox2 = styled.div`
  overflow: hidden;
  float: right;
  position: relative;
  right: 300px;
  top: 30px;
  animation: move 1s alternate;
  @keyframes move {
    from {
      opacity: 0;
      right: 500px;
      top: 1000px;
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
      right: 0px;
      top: 500px;
    }
    to {
      opacity: 1;
      right: 300px;
      top: 30px;
    }
  }
`;
export const Box = styled.div`
  background-color: #47b267;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  left: 500px;
  top: 100px;
  animation: move1 2s alternate;
  @keyframes move1 {
    from {
      opacity: 0;
      left: -200px;
      top: -100px;
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
      left: 0px;
      top: 50px;
    }
    to {
      opacity: 1;
      left: 500px;
      top: 100px;
    }
  }
`;
export const Box1 = styled.div`
  background-color: #47b267;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  right: -1400px;
  top: 500px;
  animation: move2 2s alternate;
  @keyframes move2 {
    from {
      opacity: 0;
      right: -1500px;
      top: 1200px;
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
      right: -1300px;
      top: 700px;
    }
    to {
      opacity: 1;
      right: -1400px;
      top: 500px;
    }
  }
`;
export const Img1 = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: all 1s ease;
`;
export const Img2 = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  transition: all 1s ease;
`;
