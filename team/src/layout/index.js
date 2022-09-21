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
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
          <li>메뉴4</li>
        </Menu>
      </Header>
      <Container>{children}</Container>
      <Footer>
        <div>회사이름</div>
      </Footer>
    </>
  );
};
export default Layout;

const Header = styled.div`
  width: 100%; ;
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
  margin-right: 10px;
  font-size: 5px;
`;
const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 100%;
  text-align: center;
`;
const Footer = styled.div`
  width: 100%;
  & div {
    width: 1000px;
    margin: 0 auto;
  }
`;
