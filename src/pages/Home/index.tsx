import AuctionCard from "../../components/AuctionCard";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { BannerWrapper, ListsWrapper } from "./styles";

const Home = () => {
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
                <ProductList gap="10px" title='Leilão' id="auction">
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                </ProductList>
                <ProductList gap="20px" title='Carros' id="cars">
                    <Card />
                    <Card />
                    <Card />
                </ProductList>
                <ProductList gap="20px" title='Motos' id="bikes">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ProductList>
            </ListsWrapper>
            <Footer />
        </>
    );
}

export default Home;