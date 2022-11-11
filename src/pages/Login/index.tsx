import { Container } from "./styles";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { Toaster } from "react-hot-toast";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Form name="login"></Form>
      </Container>
      <Toaster />
    </>
  );
};

export default Login;
