import styled from "styled-components";

export const navContainer = styled.div`
  width: 100%;
  height: 200px;
  background: url("img/wine/navbanner.jpg");
  z-index: -1;
  text-align: center;
`;
export const navInner = styled.div`
  padding-top: 40px;
  & p {
    font-size: 2rem;
    color: white;
  }
`;
export const navUl = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 10px;
  & li {
    color: #9d6f4d;
    border: 1px solid black;
    background-color: white;
    padding: 10px 11px 8px;
    border-radius: 2px;
  }
`;
