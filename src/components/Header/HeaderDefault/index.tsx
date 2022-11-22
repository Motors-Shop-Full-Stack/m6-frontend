import Logo from "../../../assets/logo.png";
import { Container, Item, UserBox } from "./styles";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../../Button";
import { useHeader } from "../../../providers/HeaderProvider";
import { useHistory } from "react-router-dom";

const HeaderDefault = () => {
  const { isOpen, setIsOpen } = useHeader();
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
    setIsOpen(false);
  };

  const handleLoginPage = () => {
    history.push("/login");
    setIsOpen(false);
  };

  return (
    <Container isOpen={isOpen}>
      <div className="container-img">
        <img src={Logo} alt="logo" onClick={() => history.push("/")} />
        {!isOpen ? (
          <BiMenu className="icon" onClick={() => setIsOpen(true)} />
        ) : (
          <BiX className="icon" onClick={() => setIsOpen(false)} />
        )}
      </div>
      <div className="container-nav">
        <nav>
          <Item isOpen={isOpen}>
            <>Carros</>
          </Item>
          <Item isOpen={isOpen}>
            <>Motos</>
          </Item>
          <Item isOpen={isOpen}>
            <>Leilão</>
          </Item>
        </nav>
        <UserBox isOpen={isOpen}>
          <div className="user_box-default">
            <Item isOpen={isOpen}>
              <a onClick={() => handleLoginPage()}>Fazer Login</a>
            </Item>
            <div className="user_box-button">
              <Button
                onClick={() => handleRegister()}
                borderC="--grey4"
                backgroundC="--whiteFixed"
                fontC="--grey0"
                width="100px"
                height="50px"
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </UserBox>
      </div>
    </Container>
  );
};

export default HeaderDefault;
