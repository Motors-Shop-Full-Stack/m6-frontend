import Button from "../../components/Button";
import Header from "../../components/Header";
import { GradientContainer, UserBox, UserType } from "./styles";

const ProfileView = () => {
  return (
    <>
      <Header></Header>
      <GradientContainer>
        <UserBox>
          <div className="userbox-avatar">SL</div>
          <div className="userbox-info">
            <h5>Samuel Leão</h5>
            <UserType>Anunciante</UserType>
          </div>
          <div className="userbox-paragraph">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div>
            <Button
              borderC="--brand1"
              backgroundC="--whiteFixed"
              fontC="--brand1"
              width="100px"
              height="50px"
            >
              Cadastrar
            </Button>
          </div>
        </UserBox>
      </GradientContainer>
    </>
  );
};

export default ProfileView;
