import { Container, AuctionBox, ContentBox, DetailBox } from "./styles";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

const AuctionCard = () => {
  return (
    <Container>
      <ContentBox>
        <div className="content-timer">
          <div>
            <AiOutlineClockCircle className="clock-icon" />
            <h5>01:58:00</h5>
          </div>
        </div>
        <div className="content-text">
          <h1>Mercedes</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div className="content_profile-box">
            <div className="profile-box_initial">R</div>
            <h5>Rodrigo Tavares</h5>
          </div>
          <div className="content_infos-box">
            <div className="info-detail">
              <DetailBox>2013</DetailBox>
              <DetailBox>0 km</DetailBox>
            </div>
            <div className="info-price">
              <h5>R$ 00.000,00</h5>
            </div>
          </div>
        </div>
      </ContentBox>
      <AuctionBox>
        <h5>Acessar página do leilão</h5>
        <HiArrowRight className="icon" />
      </AuctionBox>
    </Container>
  );
};

export default AuctionCard;
