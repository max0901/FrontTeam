import { Link } from "react-router-dom";
import * as styled from "./style";
const Nav = () => {
  return (
    <styled.navContainer>
      <styled.navInner>
        <p>your favorit Wine</p>
        <styled.navUl>
          <li>ALL</li>
          <li>RED</li>
          <li>WHITE</li>
          <li>SPARKING</li>
        </styled.navUl>
      </styled.navInner>
    </styled.navContainer>
  );
};
export default Nav;
