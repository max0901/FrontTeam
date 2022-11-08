import styled from "styled-components";
export const EditLine = styled.div`
  width: 50%;
  float: right;
  margin-top: 200px;
  /* background-color: grey; */
  text-align: left;
  font-size: 30px;
  & input {
    width: 600px;
    height: 40px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 20px;
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
