import styled from "styled-components";
export const EditLine = styled.div`
  width: 50%;
  float: right;
  margin-right: 10%;
  /* background-color: grey; */
  text-align: center;
  font-size: 30px;

  &h1 {
  }
  & input {
    width: 600px;
    height: 40px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 20px;
  }
`;

export const BannerBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin: 100px 150px;
  width: 70%;
  text-align: left;
`;
export const AddBtn = styled.button`
  border: none;
  position: relative;
  left: 400px;
  margin-bottom: 30px;
`;
export const BoxInner = styled.div`
  margin: auto 50px;
  & p input {
    width: auto;
    height: auto;
    margin-left: 20px;
    border-radius: 10px;
    text-indent: 18px;
    overflow: auto;
    border: 1px solid black;
  }
`;

export const BtnBox = styled.div`
  position: relative;
  left: 70%;
  margin: 20px auto;
  & button {
    font-size: 20px;
    width: 60px;
    height: 40px;
    border-radius: 10px;
    margin-left: 30px;
  }
`;
