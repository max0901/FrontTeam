import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RedList from "./component/red/redList";
import SparkList from "./component/spark/sparkList";
import WhiteList from "./component/white/whiteList";

import * as styled from "./style";
const All = ({ redClick, whiteClick, sparkClick }) => {
  return (
    <styled.product>
      <styled.TItle>
        <span>RED</span>
        <Link onClick={redClick}>
          more <styled.Pimg src="img/wine/next.png" alt="" />
        </Link>
      </styled.TItle>
      <RedList />

      <styled.TItle>
        <span>WHITE</span>
        <Link onClick={whiteClick}>
          more <styled.Pimg src="img/wine/next.png" alt="" />
        </Link>
      </styled.TItle>
      <WhiteList />

      <styled.TItle>
        <span>SPARK</span>
        <Link onClick={sparkClick}>
          more <styled.Pimg src="img/wine/next.png" alt="" />
        </Link>
      </styled.TItle>
      <SparkList />
    </styled.product>
  );
};
export default All;
