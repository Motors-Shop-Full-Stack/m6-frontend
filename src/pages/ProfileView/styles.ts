import styled from "styled-components";

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(237, 234, 253);
  background: linear-gradient(
    0deg,
    rgba(237, 234, 253, 1) 50%,
    rgba(69, 41, 230, 1) 50%
  );
  padding: 80px 0px;
  height: 100vh;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  padding: 40px 15px;
  box-sizing: border-box;
  background-color: #fdfdfd;
  border-radius: 4px;
  gap: 10px;

  .userbox-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    border-radius: 150px;
    background: var(--brand1);
    background: #4529e6;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 53px;
    color: #ffffff;
  }

  .userbox-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h5 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #212529;
    }
  }

  .userbox-paragraph {
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #495057;
    }
  }

  @media (min-width: 768px){
    padding: 50px;
  }
`;

export const UserType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  width: 92px;
  height: 32px;
  background: #edeafd;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #4529e6;
`;

export const ListsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 60px;
padding: 30px 0px;
@media (min-width: 768px){
  gap: 120px;
padding: 75px 0px;
}
`