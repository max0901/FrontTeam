import styled from "styled-components";
export const MapWapper = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 500px;
  background-color: grey;
  margin-top: 20px;
`;
export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;
export const Title = styled.div`
  text-align: left;
  border-bottom: 3px solid #9c6f50;
  & p {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 4px;
    margin-left: 20px;
  }
`;
export const TextDiv = styled.div`
  margin-top: 40px;
  & p span {
    font-weight: 700;
    margin-right: 10px;
  }
`;
