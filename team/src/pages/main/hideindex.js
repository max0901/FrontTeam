import Layout from "../../layout";
import styled from "styled-components";
import MainBanner from "./components/main/main";

import { motion } from "framer-motion";
const HideIndex = () => {
  return (
    <Layout
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainInner>
        <MainBanner />
      </MainInner>
    </Layout>
  );
};
export default HideIndex;
const MainInner = styled.div`
  width: 100%;
`;
