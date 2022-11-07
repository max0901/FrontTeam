import styled from "styled-components";
export const List = styled.li`
  background-color: #121b34;

  z-index: 4;
  width: 2000px;
`;
export const Inner = styled.div`
  width: 100%;
  display: flex;
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
  & span {
    font-size: 30px;
    font-weight: 600;
    font-family: "Bembo MT W01 Bold", "Georgia", "Times New Roman", Serif;
    font-style: italic;
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: 40px;
  background: url("img/hand/bottomdeco.png");
  position: relative;
`;
export const star = styled.img`
  width: 150px;
  height: 150px;
  position: relative;
  top: 20%;
  right: 500px;
  animation: Ud 1s infinite alternate;
  @keyframes Ud {
    from {
      transform: translateY(5%);
    }
    to {
      transform: translateY(30%);
    }
  }
`;
