import Button from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { GradientContainer, UserBox, UserType } from "./styles";
import { useModal } from "../../providers/modal";
import Form from "../../components/Form";
import { Toaster } from "react-hot-toast";
import useFetch from "../../hooks/useFetch";

const ProfileView = () => {
  const { handleFirstModal } = useModal();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { data } = useFetch(`http://localhost:3000/users/${userId}`, config);

  const getInitials = (name: string) => {
    return (
      name.split(" ")[0][0] + name.split(" ")[name.split(" ").length - 1][0]
    );
  };

  return (
    <>
      <Modal name="first" pTop="4%" pLeft="0%">
        <Form name="createad" />
      </Modal>
      <Header data={data}></Header>
      <GradientContainer>
        <UserBox>
          <div className="userbox-avatar">{data && getInitials(data.name)}</div>
          <div className="userbox-info">
            <h5>{data && data.name}</h5>
            <UserType>
              {data && data.accountType === "seller"
                ? "Vendedor"
                : "Anunciante"}
            </UserType>
          </div>
          <div className="userbox-paragraph">
            <p>{data && data.description}</p>
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
      <Toaster />
    </>
  );
};

export default ProfileView;
