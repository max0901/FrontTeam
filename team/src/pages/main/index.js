import Layout from "../../layout";
import styled from "styled-components";
const Main = () => {
  return (
    <Layout>
      <MainInner>
        <img src="img/main.jpg" alt="main" />
      </MainInner>
    </Layout>
  );
};
export default Main;

const MainInner = styled.div`
  width: 1400px;
  margin: 50px auto;
  & img {
    width: 100%;
  }
`;
