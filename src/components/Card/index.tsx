import React from "react";
import Button from "../Button";
import {
  Container,
  ImageBox,
  TextBox,
  ProfileBox,
  InfoBox,
  InfoDetail,
  AdminBox,
} from "./styles";
import Test from "./test.png";
import { ICardProps } from "../../pages/Home/interfaces";
import { useHistory } from "react-router-dom";

const Card = ({ announcement, isAdmin }: ICardProps) => {

  const history = useHistory()

  return (
    <Container>
      <ImageBox url={announcement.announceCover} onClick={() => history.push(`/product/${announcement.id}`)}>
        {announcement.is_active ? (
          <div className="tag">Ativo</div>
        ) : (
          <div className="tag">Inativo</div>
        )}
        <img alt="product" src={announcement.announceCover}></img>
      </ImageBox>
      <TextBox>
        <h5>{announcement.title}</h5>
        <p>{announcement.description}</p>
      </TextBox>
      {isAdmin ? (
        <ProfileBox>
          <div>R</div>
          <h5>Regina</h5>
        </ProfileBox>
      ) : null}

      <InfoBox>
        <div className="info-1">
          <InfoDetail>{announcement.km} KM</InfoDetail>
          <InfoDetail>{announcement.fabricationYear.toString()}</InfoDetail>
        </div>
        <div>
        <h5>R$ {announcement.price.toString().replace(".", ",")}</h5>
        </div>
      </InfoBox>
      {isAdmin ? (
        <AdminBox>
          <Button
            borderC="--grey1"
            backgroundC="--whiteFixed"
            fontC="--grey1"
            width="100px"
            height="40px"
          >
            Editar
          </Button>
          <Button
            borderC="--grey1"
            backgroundC="--whiteFixed"
            fontC="--grey1"
            width="100px"
            height="40px"
          >
            Ver como
          </Button>
        </AdminBox>
      ) : null}
    </Container>
  );
};

export default Card;
