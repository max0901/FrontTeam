import styled from "styled-components";
import { Link } from "react-router-dom";
export const Form = styled.div`
  width: 25rem;
  height: 30rem;
  z-index: 999;
  margin: 70px auto;

  box-shadow: -60px 0px 100px -90px #000, 60px 0px 100px -90px #000;
  background: rgb(25, 31, 44);
  border-radius: 10px;
  position: absolute;
  top: 20%;
  left: 40%;
  transform: translate(-5%, -10%);
`;
export const FormInner = styled.div`
  padding: 40px 0;
  height: 600px;

  & > h2 {
    margin-bottom: 50px;
    color: white;
    font-size: 20px;
  }
  & p {
    margin: 50px 0;
    color: white;
  }
  & p > input {
    width: auto;
    height: auto;
    margin-left: 20px;
    border-radius: 5px 5px;
    text-indent: 18px;
    color: white;
    font-size: 10px;
  }

  & input::placeholder {
    color: white;
    font-size: 13px;
  }
`;
export const Btn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  font-size: 13px;
  cursor: pointer;
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
export const TextSign = styled(Link)`
  font-size: 13px;
  letter-spacing: 5px;
`;
