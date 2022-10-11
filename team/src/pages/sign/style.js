import styled from "styled-components";
export const Form = styled.div`
  width: 800px;
  height: 900px;
  z-index: 999;
  margin: 100px auto;

  box-shadow: -60px 0px 100px -90px #000, 60px 0px 100px -90px #000;
  background: rgb(25, 31, 44);
  border-radius: 10px;
  position: absolute;
  top: 25%;
  left: 40%;
  transform: translate(-5%, -10%);
`;
export const FormInner = styled.div`
  padding: 100px 0;
  height: 600px;

  & > h2 {
    margin-bottom: 100px;
    color: white;
  }
  & p {
    margin: 70px 0;
    /* color: white; */
  }
  & p > input {
    width: 400px;
    height: 40px;
    margin-left: 20px;
    border-radius: 5px 5px;
    text-indent: 20px;
    color: white;
    font-size: 20px;
  }

  & input::placeholder {
    color: white;
    font-size: 20px;
  }
`;
export const Btn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  left: 90%;
  outline: 0;
  border: 0;
`;
export const CloseImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const CheckMessage = styled.p`
  width: 800px;

  font-size: 1rem;
  color: orange;
`;
