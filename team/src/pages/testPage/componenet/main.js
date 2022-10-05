import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const TestMain = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = () => {
    const scrollteep = window.scrollY;
    const scrollTop = document.getElementById("test").scrollTop;
    setScrollY(scrollTop);
  };
  return (
    <div className="app">
      <Page1 id="test" onScroll={onScroll}></Page1>
      <Page2>이벤트발생위치2</Page2>
      <Page3>이벤트발생위치3</Page3>
    </div>
  );
};
export default TestMain;

const Page1 = styled.div`
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  background-color: grey;
`;
const Page2 = styled.div`
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  background-color: blue;
`;
const Page3 = styled.div`
  width: 1200px;
  height: 1000px;
  margin: 0 auto;
  background-color: green;
`;
