import styled from "styled-components";
export const List = styled.li`
  margin: 0 auto;
  background-color: #fffced;
`;

export const Inner = styled.div`
  width: 2000px;
  height: 90vh;
  display: flex;
`;
export const Textbox = styled.div`
  width: 40%;
  margin-top: 200px;
  line-height: 1.5;
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
export const head = styled.img`
  width: 100%;
`;
export const Boom = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 200px;
  right: 1700px;
  animation: move 4s infinite alternate;
  @keyframes move {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }
`;
export const Boom2 = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 250px;
  right: 300px;
  animation: move 3s infinite alternate;
  @keyframes move {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }
`;
export const Balloon = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 70%;
  right: 700px;
  animation: move 2s infinite alternate;
  @keyframes move {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }
`;
