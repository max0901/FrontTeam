import { Link } from "react-router-dom";
import * as styled from "./style";

import { useEffect, useRef, useState } from "react";
import All from "../all/all";
import Red from "../red/red";
import White from "../white/white";
import Sparking from "../spak/spak";
const Nav = () => {
  const [red, setRed] = useState(false);
  const [all, setAll] = useState(true);
  const [white, setWhite] = useState(false);
  const [spark, setSpark] = useState(false);

  const allClick = () => {
    setAll(true);
    setRed(false);
    setWhite(false);
    setSpark(false);
  };
  const redClick = () => {
    setRed(true);
    setAll(false);
    setWhite(false);
    setSpark(false);
  };
  const whiteClick = () => {
    setWhite(true);
    setAll(false);
    setRed(false);
    setSpark(false);
  };
  const sparkClick = () => {
    setSpark(true);
    setAll(false);
    setRed(false);
    setWhite(false);
  };
  return (
    <>
      <styled.navContainer>
        <styled.navInner>
          <p>your favorit Wine</p>
          <styled.navUl>
            <li>
              <Link to="" onClick={allClick}>
                ALL
              </Link>
            </li>
            <li>
              <Link to="" onClick={redClick}>
                RED
              </Link>
            </li>
            <li>
              <Link to="" onClick={whiteClick}>
                WHITE
              </Link>
            </li>
            <li>
              <Link to="" onClick={sparkClick}>
                SPARKLING
              </Link>
            </li>
          </styled.navUl>
        </styled.navInner>
      </styled.navContainer>

      {all ? (
        <All
          redClick={redClick}
          whiteClick={whiteClick}
          sparkClick={sparkClick}
        />
      ) : red ? (
        <Red />
      ) : white ? (
        <White />
      ) : spark ? (
        <Sparking />
      ) : (
        <All />
      )}
    </>
  );
};
export default Nav;
