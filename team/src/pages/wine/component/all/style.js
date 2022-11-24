import styled from "styled-components";

export const product = styled.div`
  width: 1200px;
  margin: 50px auto;
`;
export const TItle = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  & > span {
    color: red;
    font-weight: bold;
    font-size: 2rem;
    margin: 10px 20px;
  }
  & a {
    padding-top: 30px;
  }
`;

export const Pimg = styled.img`
  width: 10px;
  height: 10px;
`;
