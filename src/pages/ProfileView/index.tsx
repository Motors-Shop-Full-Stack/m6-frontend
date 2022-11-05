import Button from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { GradientContainer, UserBox, UserType } from "./styles";
import { useModal } from "../../providers/modal";
import Form from "../../components/Form";

const ProfileView = () => {
  const { handleFirstModal } = useModal();

  const name = "Samuel de Oliveira das Neves Leão";
  let d =
    name.split(" ")[0][0] + name.split(" ")[name.split(" ").length - 1][0];

  return (
    <>
      <Modal name="first" pTop="4%" pLeft="0%">
        <Form name="createad" />
      </Modal>
      <Header></Header>
      <GradientContainer>
        <UserBox>
          <div className="userbox-avatar">{d}</div>
          <div className="userbox-info">
            <h5>Samuel Leão</h5>
            <UserType>Anunciante</UserType>
          </div>
          <div className="userbox-paragraph">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div>
            <Button
              borderC="--brand1"
              backgroundC="--whiteFixed"
              fontC="--brand1"
              width="100px"
              height="50px"
              onClick={() => handleFirstModal()}
            >
              Cadastrar
            </Button>
          </div>
        </UserBox>
      </GradientContainer>
    </>
  );
};

export default ProfileView;
