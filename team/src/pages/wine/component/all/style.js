import styled from "styled-components";

export const product = styled.div`
  width: 1200px;
  margin: 50px auto;
`;

export const prod = styled.div`
  /* background-color: grey; */
  border: 1px solid #ddd;
  margin: 10px 10px 0 10px;
  display: inline-block;
  width: 20%;
`;
export const divHidden = styled.div`
  color: white;
  background-color: black;
  opacity: 0.5;

  transition: all 1s ease;
  position: absolute;
  top: 375px;
  width: 238px;
  height: 496px;
`;
export const Info = styled.ul`
  width: 200px;
  height: 400px;
  margin: 100px 0 0 30px;
  text-align: left;
  line-height: 50px;
  & li {
    font-size: 0.5rem;
  }
`;
