import { Container, AuctionBox, ContentBox, DetailBox } from "./styles";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import React from "react";
import Button from "../Button";
import { ICardProps } from "../../pages/Home/interfaces";

const AuctionCard = ({ announcement }: ICardProps) => {
  ///Autentication States Simulation
  const [isAdmin] = React.useState<boolean>(false);

  return (
    <Container>
      <ContentBox url={announcement.announceCover}>
        <div className="content-timer">
          <div>
            <AiOutlineClockCircle className="clock-icon" />
            <h5>01:58:00</h5>
          </div>
        </div>
        <div className="content-text">
          <h1>{announcement.title}</h1>
          <p>{announcement.description}</p>
          {isAdmin ? null : (
            <div className="content_profile-box">
              <div className="profile-box_initial">R</div>
              <h5>Rodrigo Tavares</h5>
            </div>
          )}

          <div className="content_infos-box">
            <div className="info-detail">
              <DetailBox>{announcement.fabricationYear.toString()}</DetailBox>
              <DetailBox>{announcement.km}KM</DetailBox>
            </div>
            <div className="info-price">
              <h5>R$ {announcement.price.toString().replace(".", ",")}</h5>
            </div>
          </div>
        </div>
      </ContentBox>
      <AuctionBox isAdmin={isAdmin}>
        {isAdmin ? (
          <>
            <Button
              borderC="--whiteFixed"
              backgroundC="--brand1"
              fontC="--whiteFixed"
              width="80px"
              height="50px"
            >
              Editar
            </Button>
            <Button
              borderC="--whiteFixed"
              backgroundC="--brand1"
              fontC="--whiteFixed"
              width="100px"
              height="50px"
            >
              Ver como
            </Button>
          </>
        ) : (
          <>
            <h5>Acessar página do leilão</h5>
            <HiArrowRight className="icon" />
          </>
        )}
      </AuctionBox>
    </Container>
  );
};

export default AuctionCard;
