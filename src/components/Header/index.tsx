import Logo from "./logo.png";
import { Container, Item, UserBox, UserIcon } from "./styles";
import Menu from "@mui/material/Menu";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../Button";

const Header = () => {
  ///Desktop dropdown variables
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ///Mobile dropdown variables
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  ///Autentication States Simulation
  const [isDefault] = React.useState<boolean>(false);

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
          {isDefault ? (
            <div className="user_box-default">
              <Item isOpen={isOpen}>
                <a>Fazer Login</a>
              </Item>
              <div className="user_box-button">
                <Button borderC="--grey4" backgroundC="--whiteFixed" fontC="--grey0" width="100px" height="50px">Cadastrar</Button>
              </div>
            </div>
          ) : (
            <>
              <div
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="user_box-div"
              >
                <UserIcon>SL</UserIcon>
                <h5>Samuel Leão</h5>
              </div>
              <Menu id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem>Editar perfil</MenuItem>
                <MenuItem>Editar endereço</MenuItem>
                <MenuItem>Minhas compras</MenuItem>
                <MenuItem>Sair</MenuItem>
              </Menu>
            </>
          )}
        </UserBox>
      </div>
    </Container>
  );
};

export default Header;
