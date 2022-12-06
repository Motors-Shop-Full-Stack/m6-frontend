import styled from "styled-components";

interface Props {
  disabled?: boolean
}

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(to bottom, var(--brand1) 70vh, var(--grey6) 0%);
  justify-content: center;
  padding: 132px 32px 32px 32px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1200px;
    @media (min-width: 900px) {
      flex-direction: row;
    }
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 900px) {
    min-width: 55%;
  }
`;

export const PhotoContainer = styled.div`
  background-color: var(--whiteFixed);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 45px 0;
  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
  }
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

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteFixed);
  padding: 32px;
  border-radius: 4px;

  h2 {
    font-family: var(--lexend);
    margin-bottom: 45px;
    margin-bottom: 20px;
  }

  p {
    font-family: var(--inter);
    line-height: 28px;
  }
`;

export const CommentingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 32px;
  border-radius: 4px;
  background-color: var(--whiteFixed);
  width: 100%;
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  line-height: 24px;

  h5 {
    font-weight: 500;
    font-size: 14px;
    color: var(--grey1);
  }
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .button-wrapper{
    display: flex;
    gap: 8px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid var(--grey8);
  border-radius: 4px;
  width: 100%;
  height: 55%;
  color: var(--grey3);
  padding-left: 4px;
  font-size: 16px;
  height: 128px;
  width: 100%;
`;

export const ShortcutButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  height: 24px;
  background: var(--grey7);
  border-radius: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: var(--grey3);
`;

export const CommentButton = styled.button<Props>`
  position: absolute;
  bottom: 50px;
  right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  width: 108px;
  height: 38px;
  background: ${props => props.disabled ? "var(--grey5)" : "var(--brand1)"};
  border: ${props => props.disabled ? "1.5px solid var(--grey5)" : "1.5px solid var(--brand1)"};
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
  color: #ffffff;
  cursor: ${props => props.disabled ? "default" : "pointer"}; ;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media (min-width: 900px) {
    min-width: 360px;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--whiteFixed);
  border-radius: 4px;
  padding: 26px 24px;
  gap: 32px;
  width: 100%;

  @media (min-width: 500px) {
    padding: 36px 44px;
  }

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
    padding: 18px 3px;
  }
`;

export const AdvertiserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  border-radius: 4px;
  padding: 36px 44px;
  gap: 32px;
  width: 100%;

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
