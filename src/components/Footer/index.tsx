import Final from "./final.png";
import Logo from "./logo.png";
import { DivLogo, DivRights, DivUp, FooterContainer } from "./styles";
import UpButton from "./up.png";

const Footer = () => {
  return (
    <FooterContainer>
      <DivLogo>
        <img src={Logo} alt="logo" />
      </DivLogo>
      <DivRights>
        <img src={Final} alt="rights" />
      </DivRights>
      <DivUp>
        <img src={UpButton} alt="button" />
      </DivUp>
    </FooterContainer>
  );
};

export default Footer;
