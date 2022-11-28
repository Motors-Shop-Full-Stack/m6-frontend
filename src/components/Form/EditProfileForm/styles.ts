import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  width: 300px;
  max-height: 70vh;
  overflow-y: scroll;

  @media (min-width: 768px) {
    width: 520px;
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

export const FormPersonalInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px 0px 0px 0px;
  font-family: "Inter";
  text-align: left;

  h2 {
    font-family: var(--lexend);
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

  textarea {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: var(--grey2)
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
