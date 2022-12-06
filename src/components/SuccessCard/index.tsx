import { useHistory } from "react-router-dom";
import { useModal } from "../../providers/modal";
import Button from "../Button";
import { CardBody, CardHead, Container } from "./styles";

const SuccessCard = ({ type }: any) => {
    const history = useHistory()
    const {handleFirstModal} = useModal()
    const loginRedirect = () => {
        handleFirstModal("registrationSuccess", false)
        history.push("/login")
    }
    return (
        <>
            {type === "announcement" ? (
                <Container>
                    <CardHead>
                        <h2>Sucesso!</h2>
                        <button onClick={() => handleFirstModal("announcementSuccess", false)}>X</button>
                    </CardHead>
                    <CardBody>
                        <h5>Seu anúncio foi criado com sucesso!</h5>
                        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
                    </CardBody>
                </Container>
            ) : (
                <Container>
                    <CardHead>
                        <h2>Sucesso!</h2>
                        <button onClick={() => handleFirstModal("registrationSuccess", false)}>X</button>
                    </CardHead>
                    <CardBody>
                        <h5>Sua conta foi criada com sucesso!</h5>
                        <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
                    </CardBody>
                    <Button
                        borderC={"--brand1"}
                        backgroundC={"--brand1"}
                        fontC={"--whiteFixed"}
                        width={"132px"}
                        height={"50px"}
                        onClick={loginRedirect}
                    >
                        Ir para login
                    </Button>
                </Container>
            )}
        </>

    );
};

export default SuccessCard;
