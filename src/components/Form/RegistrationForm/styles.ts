import styled from "styled-components";

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
  font-family: "Inter";
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
