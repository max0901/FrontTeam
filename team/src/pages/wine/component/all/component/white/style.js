import styled from "styled-components";
export const prod = styled.li`
  /* background-color: grey; */
  border: 1px solid #ddd;
  margin: 10px 10px 0 10px;
  display: inline-block;
  width: 240px;
  overflow: hidden;
  height: 525px;
  & dl {
    line-height: 30px;
  }
`;
export const Dt = styled.dt`
  font-family: "Playfair Display SC", serif;
  font-weight: bold;
`;
export const DD = styled.dt`
  color: #93122d;
`;
export const ListDiv = styled.div`
  width: 1200px;
  overflow: hidden;
`;
export const ListUl = styled.ul`
  display: flex;
  width: 2000px;
  overflow: hidden;
`;
export const divHidden = styled.div`
  color: white;
  background-color: black;
  opacity: 0;

  transition: all 1s ease;
  position: relative;
  top: -610px;
  width: 240px;
  height: 525px;
  &:hover {
    opacity: 0.5;
  }
`;
export const Info = styled.ul`
  width: 200px;
  height: 400px;
  margin: 100px 0 0 30px;
  padding-top: 100px;
  text-align: left;
  line-height: 50px;
  & li {
    font-size: 0.7rem;
  }
`;
export const left = styled.div`
  height: 200px;
  float: left;
  position: absolute;
  top: 130%;
  left: 10%;
  opacity: 1;
  transition: all 1s ease;
  z-index: 5;
`;
export const right = styled.div`
  height: 200px;
  float: right;
  position: absolute;
  top: 130%;
  right: 10%;
  opacity: 1;
  transition: all 1s ease;
  z-index: 5;
`;
