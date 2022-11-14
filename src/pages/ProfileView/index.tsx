import Button from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { GradientContainer, ListsWrapper, UserBox, UserType } from "./styles";
import { useModal } from "../../providers/modal";
import Form from "../../components/Form";
import { Toaster } from "react-hot-toast";
import useFetch from "../../hooks/useFetch";
import {getInitials} from "../../utils/stringFormaters"
import { useParams } from "react-router-dom"
import ProductList from "../../components/ProductList";
import { IAnnouncement } from "../Home/interfaces";
import  Card  from "../../components/Card";

const ProfileView = () => {
  const { handleFirstModal } = useModal();
  const params: {id: string} = useParams()

  const { data } = useFetch(`http://localhost:3000/users/${params.id}`);
  const id = localStorage.getItem("id")
  const isAdmin = params.id === id

  return (
    <>
      <Modal name="first" pTop="4%" pLeft="0%">
        <Form name="createad" />
      </Modal>
      <Header></Header>
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
      <ListsWrapper>
      <ProductList gap="20px" title="Carros" id="cars">
        {!!data &&
            data.announcements.map((item: IAnnouncement) => {
                if (item.announceType === "sale" && item.category === "car") {
                  return <Card key={item.id} data={item} isAdmin={isAdmin}></Card>;
                }
            })}
        </ProductList>
        <ProductList gap="20px" title="Motos" id="bikes">
        {!!data &&
            data.announcements.map((item: IAnnouncement) => {
                if (item.announceType === "sale" && item.category === "motorcycle") {
                  return <Card key={item.id} data={item} isAdmin={isAdmin}></Card>;
                }
            })}
        </ProductList>
      </ListsWrapper>
      <Toaster />
    </>
  );
};

export default ProfileView;
