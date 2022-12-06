import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--grey10);
  border-radius: 4px;
  padding: 25px 40px;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  @media (min-width: 500px){
    max-width: 380px;
  }
  label {
    font-family: var(--inter);
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
  input {
    font-family: var(--inter);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding: 15px 10px;
  }
  button {
    font-size: 14px;
  }

`;

export const TitleForm = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  margin: 15px;
  h2 {
    color: var(--grey0);
    font-family: var(--lexend);
    font-weight: 500;
    font-size: 20px;
  }
`;

export const DetailsBoxOne = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 10px;
  font-weight: 500;
  color: var(--grey2);
  font-family: var(--inter);
`;

export const DetailsBoxTwo = styled.div`
  display: flex;
  justify-content: center;
  color: var(--grey2);
  font-family: var(--inter);
  font-size: 10px;
  font-weight: 500;
`;
