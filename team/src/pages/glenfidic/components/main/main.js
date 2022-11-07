import { useState, useRef, useEffect } from "react";
import * as Styled from "./style.js";
import { useSelector } from "react-redux";
const Main = () => {
  const { glen } = useSelector((state) => state.glenReducer);
  return (
    <Styled.Container>
      {glen.map((v) => (
        <Styled.ContainerInner id={v.id}>
          <Styled.Text1>
            <h4>{v.h4}</h4>
            <h1>{v.h1}</h1>
            <hr />
            <h1>{v.h1_1}</h1>
            {v.hr}
            <span>{v.span}</span>
            <Styled.Bold>{v.bold}</Styled.Bold>
            <p>{v.p}</p>
          </Styled.Text1>
          <div>
            <Styled.ImgSize src={v.img} />
          </div>
        </Styled.ContainerInner>
      ))}
      {/* <Styled.div2>
        <Styled.img1 src="img/Hendricks_Gin_Logo.jpg" />
      </Styled.div2> */}
    </Styled.Container>
  );
};
export default Main;
