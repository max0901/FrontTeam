import * as Styled from "./indexstyle";

import { motion } from "framer-motion";

import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const Line = useRef(null);
  const Line2 = useRef(null);
  const H2 = useRef(null);
  const Btn = useRef(null);

  useEffect(() => {
    // Line.current.style.width = "500px";

    // Line2.current.style.width = "500px";
    H2.current.style.opacity = 1;
  }, []);

  const over = () => {
    Btn.current.style.backgroundColor = "#D8D8D8";
  };
  const leave = () => {
    Btn.current.style.backgroundColor = "grey";
  };
  const navigator = useNavigate();
  const hidehandler = () => {
    navigator("/hide");
  };
  return (
    <>
      <Styled.Section
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <hr ref={Line} />
          <h2 ref={H2}>LIQUOR</h2>
          <hr ref={Line2} />
          <p>
            Another fine liquor
            <br />
            what`s your favorit liquor? <br />
            Find your own drink
          </p>

          <Styled.Btn
            onClick={hidehandler}
            onMouseOver={over}
            onMouseOut={leave}
            ref={Btn}
          >
            START
          </Styled.Btn>
        </div>
      </Styled.Section>
    </>
  );
};
export default Main;
