import Form from "../../components/Form";
import { MainDiv } from "./styles";
import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import { useModal } from "../../providers/modal";
import Modal from "../../components/Modal";
import SuccessCard from "../../components/SuccessCard";

const Register = () => {
  const { selectedModal } = useModal();
  return (
    <>
      {selectedModal === "registrationSuccess" ? (
        <Modal name="first" pTop="20vh" pLeft="0%">
          <SuccessCard type={'registration'}></SuccessCard>
        </Modal>
      ) : (null)}
      <MainDiv>
        <Header />
        <Form name="register" />
      </MainDiv>
      <Toaster />
    </>
  );
};
export default Register;
