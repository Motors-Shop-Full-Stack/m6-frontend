import styled from "styled-components";

interface Props {
  width: string;
  height: string;
}

const handleWidth = (props: Props) => {
  return `${props.width}`;
};

const handleHeight = (props: Props) => {
  return `${props.height}`;
};

export const InputContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => handleWidth(props)};
  height: ${(props) => handleHeight(props)};
  
  input {
    border: 1px solid var(--grey8);
    border-radius: 4px;
    width: 100%;
    height: 55%;
    color: var(--grey3);
    padding-left: 4px;
    font-size: 16px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledLabel = styled.label`
  color: var(--grey1);
  margin-bottom: 5px;
  font-weight: 500;
`;

export const StyledSpan = styled.span`
  font-size: 11px;
  color: var(--alert1);
`;
