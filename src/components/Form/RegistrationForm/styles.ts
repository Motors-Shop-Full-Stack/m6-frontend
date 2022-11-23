import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--grey10);
  border-radius: 4px;
  width: 295px;
  height: 1140px;
  margin: 105px 0px 35px 0px;
  @media (min-width: 425px) {
    height: 1140px;
    width: 370px;
  }
`;

export const FormRegisterTitle = styled.div`
  display: flex;
  width: 94%;
  height: 20px;
  margin-top: 15px;
  h2 {
    font-family: var(--lexend);
    font-size: 19px;
    color: var(--grey0);
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const FormRegisterSubTitle = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  margin: 0px 0px 7px 0px;
  margin: 15px;
  h4 {
    font-family: var(--inter);
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
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
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
  input {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
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
  font-family: var(--inter);
  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
  input {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
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
  font-family: var(--inter);
  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
  input {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
  }
  button {
    font-size: 12px;
    &:focus {
      color: var(--grey0);
      background-color: var(--grey10);
      border-color: var(--grey4);
    }
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
