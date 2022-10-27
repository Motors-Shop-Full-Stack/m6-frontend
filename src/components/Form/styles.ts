import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  background-color: var(--grey10);
  border-radius: 4px;
  width: 200px;
  height: 310px;
  label {
    font-size: 13px;
  }
  input {
    font-size: 14px;
  }
  button {
    margin: 10px 0px 10px 0px;
    font-size: 14px;
  }
`;

export const TitleForm = styled.div`
  display: flex;
  width: 77%;
  height: 20px;
  margin: 12px 0px 12px 0px;
  h2 {
    color: var(--grey0);
    font-family: var(--lexend);
    font-weight: 500;
    font-size: 16px;
  }
`;

export const DetailsBoxOne = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 77%;
  height: 20px;
  font-size: 10px;
  font-weight: 500;
  color: var(--grey2);
  font-family: var(--inter);
`;

export const DetailsBoxTwo = styled.div`
  display: flex;
  justify-content: center;
  width: 77%;
  height: 20px;
  color: var(--grey2);
  font-family: var(--inter);
  font-size: 10px;
  font-weight: 500;
`;
