import Layout from "../../../../layout";
import { motion } from "framer-motion";
import * as Styled from "./style";
import { Link } from "react-router-dom";
import { useRef } from "react";
const NewHide = () => {
  const targetImg = useRef(null);
  const targetImg2 = useRef(null);
  const targetImg3 = useRef(null);

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
  const overBig3 = () => {
    targetImg3.current.style.width = "300px";
    targetImg3.current.style.height = "300px";
  };
  const leaveSmall3 = () => {
    targetImg3.current.style.width = "200px";
    targetImg3.current.style.height = "200px";
  };
  const overBig4 = () => {
    targetImg3.current.style.width = "200px";
    targetImg3.current.style.height = "200px";
  };
  const leaveSmall4 = () => {
    targetImg3.current.style.width = "100px";
    targetImg3.current.style.height = "100px";
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
          <Link to="/hand">
            <Styled.Img2
              src="img/glen/Hendricks_Gin_Logo.jpg"
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
              src="img/glen/glenfiddich_13.jpg"
              alt=""
              ref={targetImg2}
              onMouseOver={overBig2}
              onMouseLeave={leaveSmall2}
            />
          </Link>
        </Styled.ImgBox1>
        <Styled.Box>
          <Link to="/wine">
            <Styled.Img3
              src="img/wine/winelogo.png"
              alt=""
              ref={targetImg3}
              onMouseOver={overBig3}
              onMouseLeave={leaveSmall3}
            />
          </Link>
        </Styled.Box>
        <Styled.Box1>
          <Link to="/map">
            <Styled.Img4
              src="img/다운로드.png"
              alt=""
              ref={targetImg3}
              onMouseOver={overBig4}
              onMouseLeave={leaveSmall4}
            />
          </Link>
        </Styled.Box1>
        <Styled.TextBox>
          <h2>LIQUOR</h2>
          <p>Click directly on the brand you are interested in</p>
        </Styled.TextBox>
      </Styled.MainInner>
    </Layout>
  );
};
export default NewHide;
