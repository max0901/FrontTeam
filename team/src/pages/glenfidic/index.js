import { useRef, useState, useEffect } from "react";
import Layout from "../../layout";
import Main from "./components/main/main";
import TopNav from "./components/topNav/topNav";
import styled from "styled-components";

const Glen = () => {
  return (
    <Layout>
      <TopNav />
      <Main />
    </Layout>
  );
};
export default Glen;

const MainContainer = styled.div`
  width: 100%;
`;
