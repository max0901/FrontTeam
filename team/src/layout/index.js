import { Link } from "react-router-dom";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Title>제목</Title>
        <Sign>
          <LinkTo to="/login">로그인</LinkTo>
          <LinkTo to="/sign">회원가입</LinkTo>
        </Sign>
        <Menu>
          <li>
            <Link to="">메뉴1</Link>
          </li>
          <li>
            <Link to="">메뉴2</Link>
          </li>
          <li>
            <Link to="">메뉴3</Link>
          </li>
          <li>
            <Link to="">메뉴4</Link>
          </li>
        </Menu>
      </Header>
      <Container>{children}</Container>
    </>
  );
};
export default Layout;

const Header = styled.div`
  width: 100%;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
`;

const Title = styled.h2`
  text-align: center;
`;
const Sign = styled.ul`
  float: right;
  position: relative;
  top: -50px;
  right: 40px;
`;
const LinkTo = styled(Link)`
  float: left;
  margin-right: 30px;
  font-size: 10px;
`;
const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  background-color: #000080;
  color: white;
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
`;
