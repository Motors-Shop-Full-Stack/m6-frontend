import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--brand2);
  padding: 0px 10px;
  height: 100vh;
  gap: 50px;

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: var(--grey10);
    @media (min-width: 768px){
        padding: 0 22%;
    }
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: var(--grey9);
  }
  .button-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 768px) {
    .button-box {
      flex-direction: row;
    }
  }
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

export const EmptyMessage = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-family: "Inter";
`