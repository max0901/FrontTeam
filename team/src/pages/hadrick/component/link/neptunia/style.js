import styled from "styled-components";
export const List = styled.li`
  background-color: #c7e2e6;
`;
export const Inner = styled.div`
  width: 2000px;
  display: flex;
  /* width: 100vw; */
`;
export const head = styled.img`
  position: relative;
  overflow: hidden;
  width: 2000px;
  margin: 0 auto;
`;
export const NewImg = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  right: 350px;
  top: 100px;
`;
export const Textbox = styled.div`
  width: 40%;
  margin-top: 100px;
  line-height: 1.5;
  color: white;

  & h1 {
    font-size: 60px;
    margin-bottom: 40px;
  }
  & h1 > img {
    width: 500px;
    height: 150px;
  }
  & span {
    font-size: 30px;
    font-weight: 600;
    font-family: "Bembo MT W01 Bold", "Georgia", "Times New Roman", Serif;
    font-style: italic;
  }
  & p {
    width: 600px;
    position: relative;
    left: 200px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 40px;
  background: url("img/hand/bottomdeco.png");
  position: relative;
`;
