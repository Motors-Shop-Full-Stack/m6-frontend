import Logo from "../../../assets/logo.png"
import { Container, Item, UserBox, UserIcon } from "./styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiMenu, BiX } from "react-icons/bi";
import { useHeader } from "../../../providers/HeaderProvider";
import { getInitials, formatName } from "../../../utils/stringFormaters";
import { useHistory } from "react-router-dom";

const HeaderLogged = ({data}: any) => {
  const { isOpen, setIsOpen, open, handleClick, handleClose, anchorEl, setAnchorEl } = useHeader();
  const history = useHistory()

  const visitProfile = () => {
    let id = localStorage.getItem("motorshop-id")
    history.push(`/profile/${id}/`)
    setAnchorEl(null)
  }

    return ( 
        <Container isOpen={isOpen}>
            <div className="container-img">
              <img src={Logo} alt="logo" onClick={()=> history.push("/")} />
              {!isOpen ? (
                <BiMenu className="icon" onClick={() => setIsOpen(true)} />
              ) : (
                <BiX className="icon" onClick={() => setIsOpen(false)} />
              )}
            </div>
            <div className="container-nav">
              <nav>
                <Item isOpen={isOpen}>
                  <a>Carros</a>
                </Item>
                <Item isOpen={isOpen}>
                  <a>Motos</a>
                </Item>
                <Item isOpen={isOpen}>
                  <a>Leilão</a>
                </Item>
              </nav>
              <UserBox isOpen={isOpen}>
                  <>
                    <div
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="user_box-div"
                    >
                      <UserIcon>{data && getInitials(data.name)}</UserIcon>
                      <h5>{data && formatName(data.name)}</h5>
                    </div>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={()=> visitProfile()}>Ver perfil</MenuItem>
                      <MenuItem>Editar perfil</MenuItem>
                      <MenuItem>Editar endereço</MenuItem>
                      <MenuItem>Minhas compras</MenuItem>
                      <MenuItem>Sair</MenuItem>
                    </Menu>
                  </>
              </UserBox>
            </div>
          </Container>
        );
}
 
export default HeaderLogged;