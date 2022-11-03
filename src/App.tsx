import Form from "./components/Form";
import Modal from "./components/Modal";
import Button from "./components/Button";
import GlobalStyle from "./style/global";
import { useModal } from "./providers/modal";
import React from "react";
import { MainDiv } from "./components/Form/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainDiv>
        <h2>TCM m6</h2>
        <Form name="createAd" />
      </MainDiv>
    </>
  );
}

export default App;
