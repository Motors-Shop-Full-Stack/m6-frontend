import styled from "styled-components";

//login
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

//createad
export const FormAd = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--grey10);
  border-radius: 4px;
  width: 295px;
  height: 620px;
  @media (min-width: 425px) {
    height: 560px;
    width: 370px;
  }
`;

export const FormAdTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 22px;
  margin: 9px 0px 4px 0px;
  h2 {
    color: var(--grey1);
    font-family: var(--lexend);
    font-weight: 500;
    font-size: 12px;
  }
  button {
    font-weight: 100;
    font-size: 12px;
  }
`;

export const FormAdSubTitle = styled.div`
  display: flex;
  width: 95%;
  height: 15px;
  margin: 10px 0px 0px 0px;
  h3 {
    font-family: var(--inter);
    font-weight: 500;
    color: var(--grey0);
    font-size: 10px;
  }
`;

export const FormAdTypeContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 46px;
  margin: 8px 0px 0px 0px;
  button {
    font-size: 11px;
  }
`;

export const FormAdInputOneContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 50px;
  margin: 8px 0px 0px 0px;
  input {
    font-size: 12px;
    padding-left: 10px;
  }
  label {
    font-size: 11px;
    color: var(--grey1);
    font-weight: 500;
    font-family: var(--inter);
  }
  span {
  }
`;

export const FormAdInputManyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  height: 95px;
  margin: 8px 0px 0px 0px;
  input {
    font-size: 12px;
    padding-left: 10px;
  }
  label {
    font-size: 11px;
    color: var(--grey1);
    font-weight: 500;
    font-family: var(--inter);
  }
  span {
  }
  @media (min-width: 425px) {
    flex-direction: row;
    height: 45px;
  }
`;

export const FormAdInputManyBoxOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 42px;
  @media (min-width: 425px) {
    justify-content: space-around;
  }
`;

export const FormAdInputManyBoxTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 42px;
  margin-top: 4px;
  @media (min-width: 425px) {
    margin-top: 0px;
    width: 50%;
    input {
      margin-left: 10px;
      width: 97px;
    }
    label {
      margin-left: 10px;
    }
  }
`;

export const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
