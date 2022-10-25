import Layout from "../../../../layout";
import { motion } from "framer-motion";
import * as Styled from "./style";
import { Link } from "react-router-dom";
import { useRef } from "react";
const NewHide = () => {
  const targetImg = useRef(null);
  const targetImg2 = useRef(null);

  const overBig = () => {
    targetImg.current.style.width = "500px";
    targetImg.current.style.height = "500px";
  };
  const leaveSmall = () => {
    targetImg.current.style.width = "400px";
    targetImg.current.style.height = "400px";
  };
  const overBig2 = () => {
    targetImg2.current.style.width = "400px";
    targetImg2.current.style.height = "400px";
  };
  const leaveSmall2 = () => {
    targetImg2.current.style.width = "300px";
    targetImg2.current.style.height = "300px";
  };
  return (
    <Layout
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Styled.MainInner>
        <Styled.ImgBox2>
          <Link to="/">
            <Styled.Img2
              src="img/Hendricks_Gin_Logo.jpg"
              alt=""
              ref={targetImg}
              onMouseOver={overBig}
              onMouseLeave={leaveSmall}
            />
          </Link>
        </Styled.ImgBox2>
        <Styled.ImgBox1>
          <Link to="/glen">
            <Styled.Img1
              src="img/glenfiddich_13.jpg"
              alt=""
              ref={targetImg2}
              onMouseOver={overBig2}
              onMouseLeave={leaveSmall2}
            />
          </Link>
        </Styled.ImgBox1>
        <Styled.Box></Styled.Box>
        <Styled.Box1></Styled.Box1>
        <Styled.TextBox>
          <h2>LIQUOR</h2>
          <p>Click directly on the brand you are interested in</p>
        </Styled.TextBox>
      </Styled.MainInner>
    </Layout>
  );
};
export default NewHide;