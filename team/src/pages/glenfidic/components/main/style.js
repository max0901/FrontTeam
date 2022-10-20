import styled from "styled-components";
export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
`;
export const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;
export const Text1 = styled.div`
  color: white;
  text-align: left;
  line-height: 30px;
  position: absolute;
  left: 250px;
  margin-top: 250px;
  width: 500px;
  & hr {
    margin-bottom: 40px;
  }
  & span {
    color: #9d6f4d;
  }
`;

export const Bold = styled.p`
  font-weight: bold;
`;
export const ImgSize = styled.img`
  width: 100%;
  height: 100vh;
`;
// export const div2 = styled.div``;
// export const img1 = styled.img`
//   position: absolute;
//   top: 1000px;
// `;
