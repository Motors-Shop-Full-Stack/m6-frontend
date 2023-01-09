import Button from "../../components/Button";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import { GradientContainer, ListsWrapper, UserBox, UserType } from "./styles";
import { useModal } from "../../providers/modal";
import Form from "../../components/Form";
import { Toaster } from "react-hot-toast";
import { getInitials } from "../../utils/stringFormaters";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { IAnnouncement } from "../Home/interfaces";

import { useApi } from "../../providers/api";
import { useEffect } from "react";

const ProfileView = () => {
  const { handleFirstModal, selectedModal } = useModal();
  const params: { id: string } = useParams();
  const { user, fetchUser } = useApi();

  useEffect(() => {
    fetchUser();
  }, []);

  const id = localStorage.getItem("motorshop-id");
  const isAdmin = params.id === id;
  const isSeller = user && user.accountType === "seller";

  return (
    <>
      {selectedModal === "createAnnouncement" ? (
        <Modal name="first" pTop="4%" pLeft="0%">
          <Form name="createad" />
        </Modal>
      ) : null}
      <Header></Header>
      <GradientContainer>
        <UserBox>
          <div className="userbox-avatar">{user && getInitials(user.name)}</div>
          <div className="userbox-info">
            <h5>{user && user.name}</h5>
            <UserType>{isSeller ? "Anunciante" : "Comprador"}</UserType>
          </div>
          <div className="userbox-paragraph">
            <p>{user && user.description}</p>
          </div>
          {isSeller && isAdmin ? (
            <div>
              <Button
                borderC="--brand1"
                backgroundC="--whiteFixed"
                fontC="--brand1"
                width="140px"
                height="50px"
                onClick={() => handleFirstModal("createAnnouncement")}
              >
                Criar anuncio
              </Button>
            </div>
          ) : null}
        </UserBox>
      </GradientContainer>
      <ListsWrapper>
        <ProductList gap="20px" title="Carros" id="cars">
          {!!user &&
            user.announcements.map((item: IAnnouncement) => {
              if (item.announceType === "sale" && item.category === "car") {
                return (
                  <Card
                    key={item.id}
                    announcement={item}
                    isAdmin={isAdmin}
                  ></Card>
                );
              }
            })}
        </ProductList>
        <ProductList gap="20px" title="Motos" id="bikes">
          {!!user &&
            user.announcements.map((item: IAnnouncement) => {
              if (
                item.announceType === "sale" &&
                item.category === "motorcycle"
              ) {
                return (
                  <Card
                    key={item.id}
                    announcement={item}
                    isAdmin={isAdmin}
                  ></Card>
                );
              }
            })}
        </ProductList>
      </ListsWrapper>
      <Toaster />
    </>
  );
};

export default ProfileView;
