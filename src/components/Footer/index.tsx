import { useEffect, useState } from "react";
import Final from "./final.png";
import Logo from "./logo.png";
import { DivLogo, DivRights, DivUp, FooterContainer } from "./styles";
import UpButton from "./up.png";

const Footer = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (scrollUp) => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <DivLogo>
        <img src={Logo} alt="logo" />
      </DivLogo>
      <DivRights>
        <img src={Final} alt="rights" />
      </DivRights>
      {backToTopButton && (
        <DivUp onClick={scrollUp}>
          <img src={UpButton} alt="button" />
        </DivUp>
      )}
    </FooterContainer>
  );
};

export default Footer;
