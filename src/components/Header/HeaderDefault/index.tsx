import Logo from "../../../assets/logo.png"
import { Container, Item, UserBox } from "./styles";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../../Button";
import { useHeader } from "../../../providers/HeaderProvider";

const HeaderDefault = () => {
  const { isOpen, setIsOpen } = useHeader();
    return ( 
    <Container isOpen={isOpen}>
        <div className="container-img">
          <img src={Logo} alt="logo" />
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
                  <a>Fazer Login</a>
                </Item>
                <div className="user_box-button">
                  <Button
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