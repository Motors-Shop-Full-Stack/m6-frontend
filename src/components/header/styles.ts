import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
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

  .container-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #dee2e6;
    
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
    }
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    border-bottom: 2px solid #dee2e6;
    .container-img {
      border-bottom: none;
      .icon {
        display: none;
      }
    }
    .container-nav {
      display: flex;
      width: 50%;
      nav {
        display: flex;
        justify-content: space-around;
        width: 100%;
        border-bottom: none;
        padding: 0;
        
      }
    }
    .container-icon {
      display: none;
    }
  }
`;

export const Item = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const UserBox = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  
  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  .user_box-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    button {
      width: 80%;
      max-width: 200px;
    }
  }
  .user_box-div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    border-left: solid 2px #dee2e6;
  }
  `;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 32px;
  height: 32px;
  background: #5126ea;
  border-radius: 150%;
  margin: 0 15px 0 15px;
`;
