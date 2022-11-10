import styled from "styled-components";

interface Props {
  pTop: string;
  pLeft?: string;
  pRight?: string;
}

const handlePositionTop = (props: Props) => {
  return `${props.pTop}`;
};

const handlePositionLeft = (props: Props) => {
  return `${props.pLeft}`;
};

const handlePositionRight = (props: Props) => {
  return `${props.pRight}`;
};

export const ModalSection = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainerOne = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  top: ${(props) => handlePositionTop(props)};
  left: ${(props) => handlePositionLeft(props)};
  right: ${(props) => handlePositionRight(props)};
  margin: 0 auto;
  width: max-content;
  height: max-content;
  border-radius: 4px;
  background-color: var(--grey10);
`;

export const ModalContainerTwo = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: ${(props) => handlePositionTop(props)};
  left: ${(props) => handlePositionLeft(props)};
  right: ${(props) => handlePositionRight(props)};
  width: max-content;
  height: max-content;
  border: 1px solid yellow;
  background-color: var(--alert1);
`;
