import Form from "../../components/Form";
import { MainDiv } from "./styles";
import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";

const Register = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <Form name="register" />
      </MainDiv>
      <Toaster />
    </>
  );
};
export default Register;
