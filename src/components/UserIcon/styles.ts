import styled from "styled-components";

interface Props {
    height: string
    width: string
    fontSize?: string
}

export const UserIcon = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  height: ${props => props.height};
  width: ${props => props.width};
  background: #5126ea;
  border-radius: 150%;
  font-family: var(--inter);
  font-size: ${props => props.fontSize};
`;