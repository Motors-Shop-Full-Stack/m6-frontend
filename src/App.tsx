import Footer from "./components/Footer";
import Form from "./components/Form";
import GlobalStyle from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <div>
        <h2>TCM m6</h2>

        <Form name="login" />

        {/* <Button
          borderC={"--sucess3"}
          backgroundC={"--brand1"}
          fontC={"--whiteFixed"}
          width={"100px"}
          height={"40px"}
        >
          Text Test
        </Button> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
