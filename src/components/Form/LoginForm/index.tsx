import { useApi } from "../../../providers/api";
import { useHistory } from "react-router-dom";
import { DetailsBoxOne, DetailsBoxTwo, StyledForm, TitleForm } from "./styles";
import Button from "../../Button";
import Input from "../../Input";

const LoginForm = ({ handleSubmit, register, errors }: any) => {
  const history = useHistory();

  const { handleLoginRequest } = useApi();

  const handleLogin = async (data: any) => {
    const requestObj = {
      email: data.email,
      password: data.password,
    };
    await handleLoginRequest(requestObj);

    const userId = localStorage.getItem("motorshop-id");

    if (userId) {
      setTimeout(() => {
        history.push(`/profile/${userId}`);
      }, 1000);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleLogin)}>
      <TitleForm>
        <h2>Login</h2>
      </TitleForm>
      <Input
        type={"text"}
        description={"Email"}
        placeholder={"Digitar email"}
        name={"email"}
        register={register}
        errors={errors?.name}
        width={"100%"}
        height={"100%"}
      />

      <Input
        type={"password"}
        description={"Senha"}
        placeholder={"Digitar senha"}
        name={"password"}
        register={register}
        errors={errors?.password}
        width={"100%"}
        height={"100%"}
      />

      <DetailsBoxOne>
        <p>Esqueci minha senha</p>
      </DetailsBoxOne>

      <Button
        borderC={"--sucess3"}
        backgroundC={"--brand1"}
        fontC={"--whiteFixed"}
        width={"100%"}
        height={"35px"}
        type={"submit"}
      >
        Enviar
      </Button>

      <DetailsBoxTwo>
        <p>Ainda não possui conta?</p>
      </DetailsBoxTwo>

      <Button
        borderC={"--grey4"}
        backgroundC={"--grey10"}
        fontC={"--grey0"}
        width={"100%"}
        height={"35px"}
        type={"button"}
        onClick={() => history.push("/register")}
      >
        Cadastrar
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
