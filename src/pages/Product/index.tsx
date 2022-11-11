import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  AdvertiserContainer,
  BuyButton,
  DescriptionContainer,
  GalleryContainer,
  InfoContainer,
  LeftColumn,
  MainContainer,
  PhotoContainer,
  RightColumn,
  SpanContainer,
  UserIcon,
} from "./styles";
import Carro from "./test.png";

const Product = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <div>
          <LeftColumn>
            <PhotoContainer>
              <img src={Carro} alt="carro" />
            </PhotoContainer>
            <InfoContainer>
              <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h2>
              <SpanContainer>
                <div>
                  <span>2013</span>
                  <span>0 KM</span>
                </div>
                <span>R$ 00.000,00</span>
              </SpanContainer>
              <BuyButton>Comprar</BuyButton>
            </InfoContainer>
            <DescriptionContainer>
              <h2>Descrição</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </DescriptionContainer>
            <div></div>
          </LeftColumn>
          <RightColumn>
            <GalleryContainer>
              <h2>Fotos</h2>
              <div>
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
                <img src={Carro} alt="carro" />
              </div>
            </GalleryContainer>
            <AdvertiserContainer>
              <UserIcon>SL</UserIcon>
              <h3>Samuel Leão</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <button>Ver todos os anuncios</button>
            </AdvertiserContainer>
          </RightColumn>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Product;
