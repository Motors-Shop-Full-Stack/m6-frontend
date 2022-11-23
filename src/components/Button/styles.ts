import styled from "styled-components";

interface Props {
  borderC: string;
  backgroundC: string;
  fontC: string;
  width: string;
  height: string;
  maxWd?: string;
  maxHt?: string;
}

const handleBackgroundColors = (props: Props) => {
  return `var(${props.backgroundC})`;
};

const handleBorderColors = (props: Props) => {
  return `var(${props.borderC})`;
};

const handleFontColors = (props: Props) => {
  return `var(${props.fontC})`;
};

const handleWidth = (props: Props) => {
  return `${props.width}`;
};

const handleMaxWidth = (props: Props) => {
  return `${props.maxWd}`;
};

const handleHeight = (props: Props) => {
  return `${props.height}`;
};

const handleMaxHeight = (props: Props) => {
  return `${props.maxHt}`;
};

const handleBackGroundHover = (props: Props) => {
  return props.backgroundC === "--brand1"
    ? "var(--grey7)"
    : props.backgroundC === "--grey4" && "var(--grey7)";
};

const handleFontHover = (props: Props) => {
  return props.backgroundC === "--whiteFixed" && "var(--grey7)";
};

export const StyledButton = styled.button<Props>`
  background-color: ${(props) => handleBackgroundColors(props)};
  color: ${(props) => handleFontColors(props)};
  width: ${(props) => handleWidth(props)};
  max-width: ${(props) => handleMaxWidth(props)};
  height: ${(props) => handleHeight(props)};
  max-height: ${(props) => handleMaxHeight(props)};
  border: 1px solid ${(props) => handleBorderColors(props)};
  border-radius: 4px;
  font-family: var(--inter);
  font-weight: 600;
  &:hover {
    background-color: ${(props) => handleBackGroundHover(props)};
    color: ${(props) => handleFontHover(props)};
  }
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;
`;
