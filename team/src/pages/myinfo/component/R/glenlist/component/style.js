import styled from "styled-components";
export const BoxInner = styled.div`
  margin: auto 50px;
  & p input {
    width: auto;
    height: auto;
    margin-left: 20px;
    border-radius: 10px;
    text-indent: 18px;
    overflow: auto;
  }
`;

export const BtnBox = styled.div`
  position: relative;
  left: 30%;
  margin: 20px auto;
  & button {
    width: 50px;
    height: 30px;
    border-radius: 10px;
    margin-left: 20px;
  }
`;
export const EditBtn = styled.div`
  margin: 150px 0 0 200px;
  & button {
    background-color: #000080;
    width: 250px;
    height: 70px;
    border-radius: 10px;
    color: white;
  }
`;
