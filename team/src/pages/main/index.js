import Layout from "../../layout";
import styled from "styled-components";
import MainBanner from "./components/main/main";
const Main = () => {
  return (
    <Layout>
      <MainInner>
        <MainBanner />
      </MainInner>
    </Layout>
  );
};
export default Main;

const MainInner = styled.div`
  width: 100%;
`;
