import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 229px;
  max-width: 300px;
  @media (min-width: 768px) {
    max-width: 520px;
  }
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  button{
    background-color: transparent;
    
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  h5 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;
