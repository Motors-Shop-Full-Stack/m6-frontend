import { Container, ImageBox, TextBox, ProfileBox, InfoBox, InfoDetail } from "./styles";
import Test from "./test.png"

const Card = () => {
    return (
        <Container>
            <ImageBox>
                <div className="tag">Ativo</div>
                <img src={Test}></img>
            </ImageBox>
            <TextBox>
                <h5>Product title stays here - max 1 line</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...
                </p>
            </TextBox>
            <ProfileBox>
                <div>R</div>
                <h5>Regina</h5>
            </ProfileBox>
            <InfoBox>
                <div className="info-1">
                    <InfoDetail>0KM</InfoDetail>
                    <InfoDetail>2019</InfoDetail>
                </div>
                <div>
                    <h5>R$ 00.000,00</h5>
                </div>
            </InfoBox>
        </Container>
    );
}

export default Card;