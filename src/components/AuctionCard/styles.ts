import styled from "styled-components";
import test from "./test.png";

interface Props {
  isAdmin: boolean
}

interface Props2 {
  url: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 328px;
  min-height: 496px;

  @media(min-width: 768px){
    min-width: 735px;
    min-height: 326px;
  }
`;

export const ContentBox = styled.div<Props2>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 435px;
  padding: 24px 36px;
  border-radius: 4px 4px 0 0;
  background-image: url(${props => props.url}); /* fallback */
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%), url(${props => props.url});
  background-size: 100% 100%;

  .content-timer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25%;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 10px;
      width: 123px;
      height: 36px;
      background: #ffffff;
      border-radius: 32px;
      .clock-icon{
        color: var(--brand1);
      }
      h5 {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
      }
    }
  }

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 75%;

    h1 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey10);
      letter-spacing: 1px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey5);
    }

    .content_profile-box {
      display: flex;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;

      .profile-box_initial {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 32px;
        height: 32px;
        background: var(--brand1);
        border-radius: 150px;
        margin-right: 10px;
      }
    }

    .content_infos-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      width: 100%;
      gap: 10px;

      .info-detail {
        display: flex;
      }
      .info-price {
        color: #ffffff;
      }
    }
  }

  @media(min-width: 768px){
    height: 326px;

    .content-timer {
      height: 35%;
    }

    .content-text {
      height: 65%;
      .content_infos-box {
        flex-direction: row;
      }
    }
  }
`;

export const AuctionBox = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => (props.isAdmin ? "flex-start" : "space-between")};
  align-items: center;
  padding: 24px 36px;
  min-height: 61px;
  width: 100%;
  background: #4529e6;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;
  color: #ffffff;
  border-radius: 0 0 4px 4px;
  gap: 15px;
  .icon {
    cursor: pointer;
  }
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  height: 32px;
  background: var(--brand4);
  border-radius: 4px;
  color: var(--brand1);
  margin-right: 10px;
`;
