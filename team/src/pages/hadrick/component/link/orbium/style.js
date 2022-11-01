import styled from "styled-components";
export const List = styled.li`
  background-color: #1e2224;
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
export const proImg = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  right: -4400px;
  top: 100px;
  animation: RL4 4s infinite alternate;
  @keyframes RL4 {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }
`;
export const Textbox = styled.div`
  width: 40%;
  margin-top: 200px;
  line-height: 1.5;
  color: white;

  & h1 {
    font-size: 60px;
    margin-bottom: 40px;
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
    left: 100px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 40px;
  background: url("img/hand/bottomdeco.png");
  position: relative;
`;
export const imgBox = styled.div`
  width: 100%;
  position: relative;
  top: -100px;
  display: flex;
  justify-content: space-between;
`;
