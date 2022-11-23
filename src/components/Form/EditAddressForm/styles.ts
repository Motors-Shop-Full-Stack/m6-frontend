import styled from "styled-components";

export const FormRegisterAddresInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: var(--inter);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  @media(min-width: 768px){
    max-width: 520px;
  }

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

export const FormRegisterSubTitle = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  margin: 15px 0px;

  h4 {
    font-family: var(--inter);
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;


export const FormRegisterAddressBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  margin: 20px 0px 0px 0px;
`;