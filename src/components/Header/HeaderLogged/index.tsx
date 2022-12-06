import Logo from "../../../assets/logo.png"
import { Container, Item, UserBox, UserIcon } from "./styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiMenu, BiX } from "react-icons/bi";
import { useHeader } from "../../../providers/HeaderProvider";
import { getInitials, formatName } from "../../../utils/stringFormaters";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../providers/modal";
import Modal from "../../Modal";
import Form from "../../Form";
import { useApi } from "../../../providers/api";

const HeaderLogged = ({ data }: any) => {
  const { isOpen, setIsOpen, open, handleClick, handleClose, anchorEl, setAnchorEl } = useHeader();
  const history = useHistory()
  const {setUser} = useApi()

  const visitProfile = () => {
    let id = localStorage.getItem("motorshop-id")
    history.push(`/profile/${id}/`)
    setAnchorEl(null)
  }

  const { handleFirstModal, selectedModal } = useModal();

  const EditProfile = () => { 
    handleFirstModal("editProfile", true)
    setAnchorEl(null)
  }

  const EditAdress = () => { 
    handleFirstModal("editAddress", true)
    setAnchorEl(null)
  }

  const logout = () => {
    localStorage.clear()
    setUser(undefined)
    setAnchorEl(null)
    history.push('/login')
  }


  return (
    <>
    {selectedModal === "editProfile" ? (<Modal name="first" pTop="20%" pLeft="0%">
        <Form name="editProfile"></Form>
      </Modal>) : (null)}

      {selectedModal === "editAddress" ? (<Modal name="first" pTop="20%" pLeft="0%">
        <Form name="editAddress"></Form>
      </Modal>) : (null)}

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
                <MenuItem onClick={() => visitProfile()}>Ver perfil</MenuItem>
                <MenuItem onClick={() => EditProfile()}>Editar perfil</MenuItem>
                <MenuItem onClick={() => EditAdress()}>Editar endereço</MenuItem>
                <MenuItem>Minhas compras</MenuItem>
                <MenuItem onClick={() => logout()}>Sair</MenuItem>
              </Menu>
            </>
          </UserBox>
        </div>
      </Container>
    </>
  );
}

export default HeaderLogged;