import "./App.css";
import Button from "./components/Button";
import GlobalStyle from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <div>
        <h2>TCM m6</h2>
        <Button
          borderC={"--sucess3"}
          backgroundC={"--brand1"}
          fontC={"--whiteFixed"}
          width={"100px"}
          height={"40px"}
        >
          Text Test
        </Button>
      </div>
    </>
  );
}

export default App;
