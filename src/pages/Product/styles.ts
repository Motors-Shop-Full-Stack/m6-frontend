import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(to bottom, var(--brand1) 60%, var(--grey6) 0%);
  justify-content: center;
  padding: 32px;

  > div {
    display: flex;
    gap: 40px;
    max-width: 1200px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PhotoContainer = styled.div`
  background-color: var(--whiteFixed);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 45px 0;
`;

export const InfoContainer = styled.div`
  background-color: var(--whiteFixed);
  padding: 32px;
  border-radius: 4px;

  h2 {
    font-family: var(--lexend);
    margin-bottom: 45px;
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  border-radius: 4px;

  div {
    display: flex;
    gap: 10px;
  }

  div > span {
    font-family: var(--inter);
    color: var(--brand1);
    background-color: var(--brand4);
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
  }

  span {
    font-family: var(--lexend);
    font-size: 16px;
    font-weight: 500;
  }
`;

export const BuyButton = styled.button`
  background-color: var(--brand1);
  font-family: var(--inter);
  color: var(--whiteFixed);
  font-size: 14px;
  font-weight: 600;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const DescriptionContainer = styled.div`
  background-color: var(--whiteFixed);
  padding: 32px;
  border-radius: 4px;

  h2 {
    font-family: var(--lexend);
    margin-bottom: 45px;
  }

  p {
    font-family: var(--inter);
    line-height: 28px;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 420px;
  width: 100%;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteFixed);
  border-radius: 4px;
  padding: 36px 44px;
  gap: 32px;

  h2 {
    font-family: var(--lexend);
    font-size: 20px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  div > img {
    width: 100px;
    background-color: var(--grey7);
    padding: 28px 6px;
  }
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 100px;
  height: 100px;
  background: #5126ea;
  border-radius: 150%;
  margin: 0 15px 0 15px;
  font-family: var(--inter);
  font-size: 36px;
`;

export const AdvertiserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  border-radius: 4px;
  padding: 36px 44px;
  gap: 32px;

  h3 {
    font-family: var(--lexend);
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-family: var(--inter);
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: var(--grey2);
    line-height: 28px;
  }

  button {
    padding: 12px 28px;
    background-color: var(--grey0);
    border-radius: 4px;
    font-family: var(--inter);
    color: var(--whiteFixed);
  }
`;
