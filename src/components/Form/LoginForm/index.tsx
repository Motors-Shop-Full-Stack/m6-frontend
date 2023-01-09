import { useApi } from "../../../providers/api";
import Button from "../../Button";
import Input from "../../Input";
import { DetailsBoxOne, DetailsBoxTwo, StyledForm, TitleForm } from "./styles";
import { useHistory } from "react-router-dom";

const LoginForm = ({ handleSubmit, register, errors }: any) => {
  const history = useHistory();

  const { handleLoginRequest } = useApi();

  const handleLogin = async (data: any) => {
    console.log(data);
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
        width={"80%"}
        height={"60px"}
      />

      <Input
        type={"password"}
        description={"Senha"}
        placeholder={"Digitar senha"}
        name={"password"}
        register={register}
        errors={errors?.password}
        width={"80%"}
        height={"60px"}
      />

      <DetailsBoxOne>
        <p>Esqueci minha senha</p>
      </DetailsBoxOne>

      <Button
        borderC={"--sucess3"}
        backgroundC={"--brand1"}
        fontC={"--whiteFixed"}
        width={"65%"}
        height={"35px"}
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
        width={"65%"}
        height={"35px"}
        type={"submit"}
      >
        Cadastrar
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
