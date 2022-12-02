import styled from "styled-components";

interface Props {
  bg: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 0px;
  gap: 5px;
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
  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey3);
  }
`;
export const CommentBox = styled.div`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--grey2);
`;

export const UserIcon = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 150px;
  background-color: ${props => props.bg};
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  font-size: 14px;
`;
