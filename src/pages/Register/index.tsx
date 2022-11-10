import Header from "../../components/Header";
import Form from "../../components/Form";
import { MainDiv } from "./styles";
import {Toaster} from "react-hot-toast"

const Register = () => {
  return (
    <>
    <MainDiv>
      <Header />
      <Form name="register" />
    </MainDiv>
    <Toaster />
    </>
  );
};
export default Register;
