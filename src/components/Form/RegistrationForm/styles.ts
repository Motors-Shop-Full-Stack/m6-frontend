import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--grey10);
  border-radius: 4px;
  padding: 25px;
  margin: 100px 0px;
  max-width: 300px;
  gap: 10px;
  @media (min-width: 425px) {
    width: 370px;
    max-width: none;
  }
`;

export const FormRegisterTitle = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  h2 {
    font-family: var(--lexend);
    font-size: 19px;
    color: var(--grey0);
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
  }
`;

export const FormRegisterSubTitle = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
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
  font-family: "Inter";
  width: 100%;
  gap: 20px;
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
  font-family: var(--inter);
  gap: 20px;
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
`;

export const FormRegisterAddressAccount = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: var(--inter);
  gap: 10px;
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
  padding: 10px 0px;
  button {
    font-size: 12px;
  }
`;

export const FormRegisterSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
  height: 100%;
  label {
    color: var(--grey1);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }
  select {
    height: 100%;
    padding: 10px;
    background-color: var(--grey10);
    border: 1px solid var(--grey8);
    color: var(--grey3);
    border-radius: 4px;
    font-size: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
