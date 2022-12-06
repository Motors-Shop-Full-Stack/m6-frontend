import AuctionCard from "../../components/AuctionCard";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { BannerWrapper, EmptyMessage, ListsWrapper } from "./styles";
import { useApi } from "../../providers/api";
import { IAnnouncement } from "./interfaces";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Home = () => {

  const { homeData, fetchAnnouncements } = useApi();

  useEffect(()=> {
    fetchAnnouncements()
  }, [])

  const auctions = homeData.filter(item => {
    return item.announceType === "auction"
  })

  const cars = homeData.filter(item => {
    return item.announceType === "sale" && item.category === "car"
  })

  const bikes = homeData.filter(item => {
    return item.announceType === "sale" && item.category === "motorcycle"
  })

  return (
    <>
      <Header />
      <BannerWrapper>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <span>Um ambiente feito para você explorar o seu melhor</span>
        <div className="button-box">
          <a href="#auction">
            <Button
              borderC="--whiteFixed"
              backgroundC="--brand2"
              fontC="--whiteFixed"
              width="200px"
              height="50px"
            >
              Leilão
            </Button>
          </a>
          <a href="#cars">
            <Button
              borderC="--whiteFixed"
              backgroundC="--brand2"
              fontC="--whiteFixed"
              width="200px"
              height="50px"
            >
              Carros
            </Button>
          </a>
          <a href="#bikes">
            <Button
              borderC="--whiteFixed"
              backgroundC="--brand2"
              fontC="--whiteFixed"
              width="200px"
              height="50px"
            >
              Motos
            </Button>
          </a>
        </div>
      </BannerWrapper>
      <ListsWrapper>
        <ProductList gap="10px" title="Leilão" id="auction">
          {auctions.length < 1 ? (<EmptyMessage>Não há leilões no momento</EmptyMessage>) : (null)}
          {!!homeData &&
            homeData.map((item: IAnnouncement) => {
              if (item.announceType === "auction") {
                return (
                  <AuctionCard
                    key={item.id}
                    announcement={item}
                    isAdmin={false}
                  ></AuctionCard>
                );
              }
            })}
        </ProductList>
        <ProductList gap="20px" title="Carros" id="cars">
          {cars.length < 1 ? (<EmptyMessage>Nenhum carro foi anunciado</EmptyMessage>) : (null)}
          {!!homeData &&
            homeData.map((item: IAnnouncement) => {
              if (item.announceType === "sale" && item.category === "car") {
                return (
                  <Card
                    key={item.id}
                    announcement={item}
                    isAdmin={false}
                  ></Card>
                );
              }
            })}
        </ProductList>
        <ProductList gap="20px" title="Motos" id="bikes">
          {bikes.length < 1 ? (<EmptyMessage>Nenhuma moto foi anunciada</EmptyMessage>) : (null)}
          {!!homeData &&
            homeData.map((item: IAnnouncement) => {
              if (
                item.announceType === "sale" &&
                item.category === "motorcycle"
              ) {
                return (
                  <Card
                    key={item.id}
                    announcement={item}
                    isAdmin={false}
                  ></Card>
                );
              }
            })}
        </ProductList>
      </ListsWrapper>
      <Footer />
      <Toaster />
    </>
  );
};

export default Home;
