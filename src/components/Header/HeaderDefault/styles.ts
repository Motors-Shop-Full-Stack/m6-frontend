import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.header<Props>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  min-height: 80px;
  background: #fdfdfd;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #495057;
  border-bottom: 2px shadow grey;

  .container-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #dee2e6;
    padding: 1rem 1rem;

    img{
      cursor: pointer;
    }
    
    .icon {
      width: 35px;
      height: 40px;
      cursor: pointer;
    }
  }

  .container-nav {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    height: 100%;
    width: 100%;
    
    nav {
      display: ${(props) => (props.isOpen ? "block" : "none")};
      width: 100%;
      border-bottom: 2px solid #dee2e6;
      padding: 0 1rem;
    }
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    border-bottom: 2px solid #dee2e6;
    .container-img {
      border-bottom: none;
      margin-left: 25px;
      width: fit-content;
      
      .icon {
        display: none;
      }
    }
    .container-nav {
      display: flex;
      width: 100%;
      max-width: 60%;
      @media (min-width: 1024px){
        max-width: 50%;
      }

      nav {
        display: flex;
        justify-content: space-around;
        width: 100%;
        border-bottom: none;
        padding: 0;
        
      }
    }
  }
`;

export const Item = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  margin: 20px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const UserBox = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  
  h5 {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .user_box-default{
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }

  .user_box-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: solid 2px #dee2e6;
    margin: 0;
    min-height: 80px;

    .user_box-default{
      width: 100%;
      justify-content: space-around;
      flex-direction: row;
      padding: 0;
    }

  }
  `;
