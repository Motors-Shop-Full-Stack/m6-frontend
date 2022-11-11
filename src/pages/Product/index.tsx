import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
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
import { useParams } from "react-router-dom";
import { formatName, getInitials } from "../../utils/stringFormaters";
import { useHistory } from "react-router-dom";

const Product = () => {
  const params: {id: "string"} = useParams()
  const history = useHistory()

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { data } = useFetch(`http://localhost:3000/announcements/${params.id}`, config);

  return (
    <div>
      <Header />
      <MainContainer>
        <div>
          <LeftColumn>
            <PhotoContainer>
              <img src={data && data.announceCover} alt="carro" />
            </PhotoContainer>
            <InfoContainer>
              <h2>{data && data.title}</h2>
              <SpanContainer>
                <div>
                  <span>{data && data.fabricationYear}</span>
                  <span>{data && data.km}</span>
                </div>
                <span>R$ {data && data.price}</span>
              </SpanContainer>
              <BuyButton>Comprar</BuyButton>
            </InfoContainer>
            <DescriptionContainer>
              <h2>Descrição</h2>
              <p>
                {data && data.description}
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
              <UserIcon>{data && getInitials(data.user.name)}</UserIcon>
              <h3>{data && formatName(data.user.name)}</h3>
              <p>
              {data && data.user.description}
              </p>
              <button onClick={() => history.push(`/profile/${data.user.id}`)}>Ver todos os anuncios</button>
            </AdvertiserContainer>
          </RightColumn>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Product;
