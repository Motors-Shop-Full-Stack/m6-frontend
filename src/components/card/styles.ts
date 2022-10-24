import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 312px;
`;

export const ImageBox = styled.div`
  background: #e9ecef;
  border: 2px solid transparent;
  /* Grey Scale/grey-7 */

  .tag {
    transition: opacity 0.5s;
    position: absolute;
    margin: 15px 0 0 15px;
    padding: 0px 8px;
    background: #4529E6;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
  }

  :hover {
    border: 2px solid #4529e6;
    .tag{
      
      transition-timing-function: linear;
      opacity: 0;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    transition: 0.5s;
  }

  img:hover {
    transform: scale(1.2);
  }
`;

export const TextBox = styled.div`
  h5 {
    //styleName: Heading/Heading-7-600;
    font-family: "Lexend", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    //styleName: Text/body-2-400;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-right: 10px;

    width: 32px;
    height: 32px;

    /* Brand/brand1 */

    background: #4529e6;
    border-radius: 150px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0px;

    color: #ffffff;
  }

  h5 {
    /* Text/body-2-500 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    /* Grey Scale/grey-2 */

    color: #495057;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Lexend", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  .info-1 {
    display: flex;
    div:nth-of-type(1) {
      margin-right: 8px;
    }
  }
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  width: 50px;
  height: 32px;

  /* Brand/brand4 */

  background: #edeafd;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  /* Brand/brand1 */

  color: #4529e6;
`;
