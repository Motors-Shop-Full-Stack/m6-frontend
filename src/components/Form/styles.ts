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

//register

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--grey10);
  border-radius: 4px;
  width: 295px;
  height: 1105px;
  margin: 30px 0px 35px 0px;
  @media (min-width: 425px) {
    height: 1105px;
    width: 370px;
  }
`;

export const FormRegisterTitle = styled.div`
  display: flex;
  width: 94%;
  height: 20px;
  margin-top: 15px;
  h1 {
    font-family: var(-lexend);
    font-weight: bold;
    font-size: 19px;
    color: var(--grey0);
  }
`;

export const FormRegisterSubTitle = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  margin: 0px 0px 7px 0px;
  h2 {
    font-family: var(--inter);
    font-size: 12px;
    font-weight: 500;
  }
`;

export const FormRegisterPersonalInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 94%;
  height: 460px;
  margin: 15px 0px 0px 0px;
  label {
    font-size: 12px;
  }
  input {
    font-size: 10px;
  }
`;

export const FormRegisterAddresInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 94%;
  height: 310px;
  margin: 15px 0px 0px 0px;
  label {
    font-size: 12px;
  }
  input {
    font-size: 10px;
  }
`;

export const FormRegisterAddressBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
`;

export const FormRegisterAddressAccount = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 94%;
  height: 315px;
  margin: 15px 0px 0px 0px;
  label {
    font-size: 12px;
  }
  input {
    font-size: 10px;
  }
  button {
    font-size: 12px;
  }
`;

export const FormRegisterAccountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 5px 0px 0px 0px;
  button {
    font-size: 12px;
  }
`;

export const FormRegisterSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
  height: 60px;
  label {
    color: var(--grey1);
    font-weight: 500;
    font-size: 12px;
    margin-top: -5px;
  }
  select {
    height: 29px;
    margin: 6px 0px 3px 0px;
    background-color: var(--grey10);
    border: 1px solid var(--grey8);
    color: var(--grey3);
    border-radius: 4px;
    font-size: 12px;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--grey3);
      border-radius: 3px;
    }
    option {
      background-color: var(--grey10);
      border: 1px solid var(--grey8);
    }
  }
`;
