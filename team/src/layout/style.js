import styled from "styled-components";
import { Link } from "react-router-dom";
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;
export const Header = styled.div`
  width: 100%;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
`;

export const Title = styled.h2`
  text-align: center;
`;
export const Sign = styled.ul`
  float: right;
  position: relative;
  top: -50px;
  right: 40px;
`;
export const LinkTo = styled(Link)`
  float: left;
  margin-right: 30px;
  font-size: 10px;
`;
export const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 25px;
  line-height: 40px;
  background-color: #000080;
  color: white;

  & li {
    font-size: 14px;
  }
  & li a {
    position: relative;
    top: -7px;
  }
`;
export const Container = styled.div`
  width: 100%;
  text-align: center;
`;
