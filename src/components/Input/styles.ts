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
  /* border: 1px solid #000; */
  margin-bottom: 12px;
  input {
    border: 1px solid var(--grey8);
    border-radius: 4px;
    width: 100%;
    height: 55%;
    color: var(--grey3);
    padding-left: 4px;
    font-size: 16px;
  }
  label {
    color: var(--grey1);
    padding-bottom: 3.5px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
`;

export const StyledLabel = styled.label``;

export const StyledSpan = styled.span`
  font-size: 11px;
  text-decoration: underline;
  color: var(--alert1);
`;
