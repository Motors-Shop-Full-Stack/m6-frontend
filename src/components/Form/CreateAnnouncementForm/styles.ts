import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--grey10);
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  @media (min-width: 768px) {
    max-width: 420px;
  }
`;


export const FormAdTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  
  h2 {
    color: var(--grey1);
    font-family: var(--lexend);
    font-weight: 500;
    font-size: 16px;
  }
  
  button {
    font-weight: 100;
    font-size: 12px;
  }
  `;

export const FormAdTypeContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  
  button {
    font-size: 12px;
  }
  `;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0px;
  gap: 10px;
  
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const FormAdInputOneContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

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
`;

export const FormAdInputManyContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

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

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
