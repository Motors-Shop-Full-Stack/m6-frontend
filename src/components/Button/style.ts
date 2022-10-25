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
  border-color: ${(props) => handleBorderColors(props)};
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => handleBackGroundHover(props)};
    color: ${(props) => handleFontHover(props)};
  }
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;
`;

// const handleFontColors = (props: Props) => {
//   return props.colorSchema === "--grey0"
//     ? "var(--whiteFixed)"
//     : props.colorSchema === "--grey1"
//     ? "var(--whiteFixed)"
//     : props.colorSchema === "--grey6"
//     ? "var(--grey2)"
//     : props.colorSchema === "--brand1"
//     ? "var(--whiteFixed)"
//     : props.colorSchema === "--brand2"
//     ? "var(--whiteFixed)"
//     : props.colorSchema === "--brand4"
//     ? "var(--brand1)"
//     : props.colorSchema === "--grey10"
//     ? "var(--grey1)"
//     : props.colorSchema === "--grey8"
//     ? "var(--grey0)"
//     : props.colorSchema === "--brand1"
//     ? "var(--whiteFixed)"
//     : props.colorSchema === "--alert3"
//     ? "var(--alert1)"
//     : props.colorSchema === "--alert2"
//     ? "var(--alert1)"
//     : props.colorSchema === "--sucess3"
//     ? "var(--sucess1)"
//     : props.colorSchema === "--sucess2"
//     ? "var(--sucess1)"
//     : props.colorSchema === "--brand3" && "var(--brand4)";
// };

// const handleBackgroundColors = (props: Props) => {
//   return props.colorSchema === "--grey0"
//     ? "var(--grey0)"
//     : props.colorSchema === "--grey1"
//     ? "var(--grey1)"
//     : props.colorSchema === "--grey6"
//     ? "var(--grey6)"
//     : props.colorSchema === "--grey5"
//     ? "var(--grey5)"
//     : props.colorSchema === "--grey8"
//     ? "var(--grey8)"
//     : props.colorSchema === "--brand1"
//     ? "var(--brand1)"
//     : props.colorSchema === "--brand2"
//     ? "var(--brand2)"
//     : props.colorSchema === "--brand4"
//     ? "var(--brand4)"
//     : props.colorSchema === "--gey10"
//     ? "var(--gey10)"
//     : props.colorSchema === "--brand1"
//     ? "var(--brand1)"
//     : props.colorSchema === "--alert3"
//     ? "var(--alert3)"
//     : props.colorSchema === "--alert2"
//     ? "var(--alert2)"
//     : props.colorSchema === "--sucess3"
//     ? "var(--sucess3)"
//     : props.colorSchema === "--sucess2"
//     ? "var(--sucess2)"
//     : props.colorSchema === "--brand3" && "var(--brand3)";
// };
