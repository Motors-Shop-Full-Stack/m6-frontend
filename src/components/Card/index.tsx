import React from "react";
import Button from "../Button";
import { Container, ImageBox, TextBox, ProfileBox, InfoBox, InfoDetail, AdminBox } from "./styles";
import Test from "./test.png"
import { ICardProps } from "../../pages/Home/interfaces";

const Card = ({ data }: ICardProps) => {
    ///Autentication States Simulation
    const [isAdmin] = React.useState<boolean>(true);

    return (
        <Container>
            <ImageBox url={data.announcement_cover}>
                {data.is_active ? (
                    <div className="tag">Ativo</div>
                ) : (
                    <div className="tag">Inativo</div>
                )}
                <img src={data.announcement_cover}></img>
            </ImageBox>
            <TextBox>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
            </TextBox>
            {isAdmin ? (
                <ProfileBox>
                    <div>R</div>
                    <h5>Regina</h5>
                </ProfileBox>
            ) : (null)}

            <InfoBox>
                <div className="info-1">
                    <InfoDetail>{data.km} KM</InfoDetail>
                    <InfoDetail>{data.fabrication_year.toString()}</InfoDetail>
                </div>
                <div>
                    <h5>R$ {data.price}</h5>
                </div>
            </InfoBox>
            <AdminBox>
                <Button borderC="--grey1" backgroundC="--whiteFixed" fontC="--grey1" width="100px" height="40px">Ver como</Button>
                <Button borderC="--grey1" backgroundC="--whiteFixed" fontC="--grey1" width="100px" height="40px">Ver como</Button>
            </AdminBox>
        </Container>
    );
}

export default Card;