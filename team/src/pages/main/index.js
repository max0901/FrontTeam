import Layout from "../../layout";
import styled from "styled-components";
import MainBanner from "./components/main/main";
import * as Styled from "./components/main/style";
import { useState } from "react";

const Main = () => {
  const [hideMain, setHideMain] = useState(true);
  const hideHandler = () => {
    setHideMain(false);
  };
  return (
    <>
      {hideMain ? (
        <Styled.Section>
          <div>
            <h2>Spectral</h2>
            <p>
              Another fine responsive
              <br />
              site template freebie
              <br />
              crafted by <a href="http://html5up.net">HTML5 UP</a>.
            </p>

            <Styled.Btn onClick={hideHandler}>START</Styled.Btn>
          </div>
        </Styled.Section>
      ) : (
        <Layout>
          <MainInner>
            <MainBanner />
          </MainInner>
        </Layout>
      )}
    </>
  );
};
export default Main;

const MainInner = styled.div`
  width: 100%;
`;
