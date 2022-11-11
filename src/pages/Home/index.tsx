import { useEffect } from "react";
import AuctionCard from "../../components/AuctionCard";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { BannerWrapper, ListsWrapper } from "./styles";
import axios from "axios";
import {useApi } from "../../providers/api";
import { IAnnouncement } from "./interfaces";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { homeData, setHomeData } = useApi();

  useEffect(() => {
    axios
      .get("http://localhost:3000/announcements/")
      .then((response) => setHomeData(response.data))
      .catch((error) => console.log(error));
  }, []);

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
          {!!homeData &&
            homeData.map((item: IAnnouncement) => {
              if (item.announceType === "auction") {
                return <AuctionCard key={item.id} data={item}></AuctionCard>;
              }
            })}
        </ProductList>
        <ProductList gap="20px" title="Carros" id="cars">
          {!!homeData &&
            homeData.map((item: IAnnouncement) => {
              if (item.announceType === "sale" && item.category === "car") {
                return <Card key={item.id} data={item}></Card>;
              }
            })}
        </ProductList>
        <ProductList gap="20px" title="Motos" id="bikes">
          {!!homeData &&
            homeData.map((item: IAnnouncement) => {
              if (
                item.announceType === "sale" &&
                item.category === "motorcycle"
              ) {
                return <Card key={item.id} data={item}></Card>;
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
