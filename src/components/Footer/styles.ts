import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--grey0);
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: unset;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  img {
    height: 20px;
  }
`;

export const DivRights = styled.div`
  display: flex;
  img {
    height: 10px;
  }
`;

export const DivUp = styled.div`
  display: flex;
  cursor: pointer;
  img {
    height: 35px;
  }
`;
